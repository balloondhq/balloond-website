import type { NextPage } from 'next';
import { useState, useEffect, FormEvent } from 'react';
import { useRouter } from 'next/router';
import {
  useAdminBlogPosts,
  useAdminJobPositions,
  useAdminSiteContent,
} from '../../lib/use-content';

// API-based authentication hook
function useAuth() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const res = await fetch('/api/auth/me');
        if (res.ok) {
          const data = await res.json();
          setUser(data.user);
          setIsAuthenticated(true);
        } else {
          setUser(null);
          setIsAuthenticated(false);
        }
      } catch (error) {
        setUser(null);
        setIsAuthenticated(false);
      }
      setIsLoading(false);
    };
    checkAuth();
  }, []);

  const login = async (email: string, password: string) => {
    setIsLoading(true);
    const res = await fetch('/api/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    });
    
    if (res.ok) {
      const data = await res.json();
      setUser(data.user);
      setIsAuthenticated(true);
      setIsLoading(false);
      return true;
    }
    setIsLoading(false);
    return false;
  };

  const logout = async () => {
    await fetch('/api/auth/logout', { method: 'POST' });
    setUser(null);
    setIsAuthenticated(false);
  };

  return { isAuthenticated, isLoading, user, login, logout };
}

const LoginForm = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLogging, setIsLogging] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLogging(true);
    setError('');
    const success = await onLogin(email, password);
    setIsLogging(false);
    if (!success) setError('Invalid credentials');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-500 to-orange-500 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Balloon'd Admin</h1>
          <p className="text-gray-600">Sign in to manage your site</p>
        </div>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
            <input
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-500"
              placeholder="admin@balloond.com"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Password</label>
            <input
              type="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-500"
              placeholder="Enter your password"
              required
            />
          </div>
          {error && <div className="bg-red-50 text-red-600 p-3 rounded-lg text-sm">{error}</div>}
          <button
            type="submit"
            disabled={isLogging}
            className="w-full bg-rose-500 hover:bg-rose-600 text-white py-3 rounded-lg font-medium transition-colors disabled:opacity-50"
          >
            {isLogging ? 'Signing in...' : 'Sign In'}
          </button>
        </form>
      </div>
    </div>
  );
};

// Modal component
const Modal = ({ children, onClose }) => (
  <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center p-4">
    <div className="bg-white rounded-lg shadow-xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
      <div className="p-6 relative">
        <button onClick={onClose} className="absolute top-4 right-4 text-gray-400 hover:text-gray-600">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        {children}
      </div>
    </div>
  </div>
);

// Form for Blog Posts
const BlogPostForm = ({ post, onSave, onCancel }) => {
  const [formData, setFormData] = useState({
    title: post?.title || '',
    slug: post?.slug || '',
    excerpt: post?.excerpt || '',
    content: post?.content || '',
    author: post?.author || '',
    category: post?.category || '',
    readTime: post?.readTime || '5 min read',
    published: post?.published || false,
    featured: post?.featured || false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    onSave({ ...post, ...formData });
  };

  return (
    <Modal onClose={onCancel}>
      <form onSubmit={handleSubmit} className="space-y-6">
        <h2 className="text-2xl font-bold text-gray-800">{post ? 'Edit' : 'Create'} Blog Post</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700">Title</label>
            <input type="text" name="title" value={formData.title} onChange={handleChange} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-rose-500 focus:ring-rose-500" required />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Slug</label>
            <input type="text" name="slug" value={formData.slug} onChange={handleChange} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-rose-500 focus:ring-rose-500" required />
          </div>
        </div>
        
        <div>
            <label className="block text-sm font-medium text-gray-700">Author</label>
            <input type="text" name="author" value={formData.author} onChange={handleChange} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-rose-500 focus:ring-rose-500" required />
        </div>

        <div>
            <label className="block text-sm font-medium text-gray-700">Excerpt</label>
            <textarea name="excerpt" value={formData.excerpt} onChange={handleChange} rows={3} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-rose-500 focus:ring-rose-500" />
        </div>

        <div>
            <label className="block text-sm font-medium text-gray-700">Content</label>
            <textarea name="content" value={formData.content} onChange={handleChange} rows={10} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-rose-500 focus:ring-rose-500" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700">Category</label>
              <input type="text" name="category" value={formData.category} onChange={handleChange} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-rose-500 focus:ring-rose-500" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Read Time</label>
              <input type="text" name="readTime" value={formData.readTime} onChange={handleChange} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-rose-500 focus:ring-rose-500" />
            </div>
        </div>
        
        <div className="flex items-center space-x-8">
            <div className="flex items-center">
                <input id="published" name="published" type="checkbox" checked={formData.published} onChange={handleChange} className="h-4 w-4 text-rose-600 focus:ring-rose-500 border-gray-300 rounded" />
                <label htmlFor="published" className="ml-2 block text-sm text-gray-900">Published</label>
            </div>
            <div className="flex items-center">
                <input id="featured" name="featured" type="checkbox" checked={formData.featured} onChange={handleChange} className="h-4 w-4 text-rose-600 focus:ring-rose-500 border-gray-300 rounded" />
                <label htmlFor="featured" className="ml-2 block text-sm text-gray-900">Featured</label>
            </div>
        </div>

        <div className="flex justify-end space-x-4 pt-4">
          <button type="button" onClick={onCancel} className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-4 py-2 rounded-lg font-medium">Cancel</button>
          <button type="submit" className="bg-rose-500 hover:bg-rose-600 text-white px-4 py-2 rounded-lg font-medium">Save Post</button>
        </div>
      </form>
    </Modal>
  );
};

const JobPositionForm = ({ position, onSave, onCancel }) => {
  const [formData, setFormData] = useState({
    title: position?.title || '',
    department: position?.department || '',
    location: position?.location || '',
    type: position?.type || 'Full-time',
    description: position?.description || '',
    requirements: position?.requirements?.join('\n') || '',
    responsibilities: position?.responsibilities?.join('\n') || '',
    published: position?.published || false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    onSave({
      ...position,
      ...formData,
      requirements: formData.requirements.split('\n').filter(r => r.trim() !== ''),
      responsibilities: formData.responsibilities.split('\n').filter(r => r.trim() !== ''),
    });
  };

  return (
    <Modal onClose={onCancel}>
      <form onSubmit={handleSubmit} className="space-y-6">
        <h2 className="text-2xl font-bold text-gray-800">{position ? 'Edit' : 'Create'} Job Position</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700">Title</label>
            <input type="text" name="title" value={formData.title} onChange={handleChange} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-rose-500 focus:ring-rose-500" required />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Department</label>
            <input type="text" name="department" value={formData.department} onChange={handleChange} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-rose-500 focus:ring-rose-500" required />
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700">Location</label>
            <input type="text" name="location" value={formData.location} onChange={handleChange} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-rose-500 focus:ring-rose-500" required />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Type (e.g., Full-time)</label>
            <input type="text" name="type" value={formData.type} onChange={handleChange} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-rose-500 focus:ring-rose-500" />
          </div>
        </div>

        <div>
            <label className="block text-sm font-medium text-gray-700">Description</label>
            <textarea name="description" value={formData.description} onChange={handleChange} rows={4} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-rose-500 focus:ring-rose-500" />
        </div>

        <div>
            <label className="block text-sm font-medium text-gray-700">Requirements (one per line)</label>
            <textarea name="requirements" value={formData.requirements} onChange={handleChange} rows={5} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-rose-500 focus:ring-rose-500" />
        </div>

        <div>
            <label className="block text-sm font-medium text-gray-700">Responsibilities (one per line)</label>
            <textarea name="responsibilities" value={formData.responsibilities} onChange={handleChange} rows={5} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-rose-500 focus:ring-rose-500" />
        </div>
        
        <div className="flex items-center">
            <input id="published-job" name="published" type="checkbox" checked={formData.published} onChange={handleChange} className="h-4 w-4 text-rose-600 focus:ring-rose-500 border-gray-300 rounded" />
            <label htmlFor="published-job" className="ml-2 block text-sm text-gray-900">Published</label>
        </div>

        <div className="flex justify-end space-x-4 pt-4">
          <button type="button" onClick={onCancel} className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-4 py-2 rounded-lg font-medium">Cancel</button>
          <button type="submit" className="bg-rose-500 hover:bg-rose-600 text-white px-4 py-2 rounded-lg font-medium">Save Position</button>
        </div>
      </form>
    </Modal>
  );
};

const SiteContentForm = ({ content, onSave, onCancel }) => {
  const [formData, setFormData] = useState({
    section: content?.section || '',
    title: content?.title || '',
    content: content?.content || '',
    published: content?.published || false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    onSave({ ...content, ...formData });
  };

  return (
    <Modal onClose={onCancel}>
      <form onSubmit={handleSubmit} className="space-y-6">
        <h2 className="text-2xl font-bold text-gray-800">{content ? 'Edit' : 'Create'} Site Content</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700">Section</label>
            <input type="text" name="section" value={formData.section} onChange={handleChange} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-rose-500 focus:ring-rose-500" required />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Title</label>
            <input type="text" name="title" value={formData.title} onChange={handleChange} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-rose-500 focus:ring-rose-500" required />
          </div>
        </div>

        <div>
            <label className="block text-sm font-medium text-gray-700">Content</label>
            <textarea name="content" value={formData.content} onChange={handleChange} rows={10} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-rose-500 focus:ring-rose-500" />
        </div>
        
        <div className="flex items-center">
            <input id="published-content" name="published" type="checkbox" checked={formData.published} onChange={handleChange} className="h-4 w-4 text-rose-600 focus:ring-rose-500 border-gray-300 rounded" />
            <label htmlFor="published-content" className="ml-2 block text-sm text-gray-900">Published</label>
        </div>

        <div className="flex justify-end space-x-4 pt-4">
          <button type="button" onClick={onCancel} className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-4 py-2 rounded-lg font-medium">Cancel</button>
          <button type="submit" className="bg-rose-500 hover:bg-rose-600 text-white px-4 py-2 rounded-lg font-medium">Save Content</button>
        </div>
      </form>
    </Modal>
  );
};

const AdminDashboard: NextPage = () => {
  const { isAuthenticated, isLoading, user, login, logout } = useAuth();
  const { blogPosts, refresh: refreshPosts, loading: loadingPosts } = useAdminBlogPosts();
  const { jobPositions, refresh: refreshJobs, loading: loadingJobs } = useAdminJobPositions();
  const { siteContent, refresh: refreshContent, loading: loadingContent } = useAdminSiteContent();
  const [activeTab, setActiveTab] = useState('dashboard');
  const router = useRouter();
  const [modal, setModal] = useState<{ type: string | null; data: any | null }>({ type: null, data: null });

  useEffect(() => {
    // If a user doesn't have permissions for a tab, switch them away.
    if (user?.role === 'EDITOR' && activeTab === 'content') {
      setActiveTab('dashboard');
    }
  }, [activeTab, user]);

  const handleSaveBlogPost = async (data) => {
    const isNew = !data.id;
    const url = isNew ? '/api/blog' : `/api/blog/${data.id}`;
    const method = isNew ? 'POST' : 'PUT';

    try {
      const res = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error('Failed to save post');
      setModal({ type: null, data: null });
      refreshPosts();
    } catch (error) {
      console.error(error);
      alert('Error saving post.');
    }
  };

  const handleDeleteBlogPost = async (id) => {
    if (window.confirm('Are you sure you want to delete this blog post? This action cannot be undone.')) {
      try {
        const res = await fetch(`/api/blog/${id}`, { method: 'DELETE' });
        if (!res.ok) throw new Error('Failed to delete post');
        refreshPosts();
      } catch (error) {
        console.error(error);
        alert('Error deleting post.');
      }
    }
  };

  const handleSaveJobPosition = async (data) => {
    const isNew = !data.id;
    const url = isNew ? '/api/careers' : `/api/careers/${data.id}`;
    const method = isNew ? 'POST' : 'PUT';

    try {
      const res = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error('Failed to save job position');
      setModal({ type: null, data: null });
      refreshJobs();
    } catch (error) {
      console.error(error);
      alert('Error saving job position.');
    }
  };

  const handleDeleteJobPosition = async (id) => {
    if (window.confirm('Are you sure you want to delete this job position? This action cannot be undone.')) {
      try {
        const res = await fetch(`/api/careers/${id}`, { method: 'DELETE' });
        if (!res.ok) throw new Error('Failed to delete job position');
        refreshJobs();
      } catch (error) {
        console.error(error);
        alert('Error deleting job position.');
      }
    }
  };

  const handleSaveSiteContent = async (data) => {
    const isNew = !data.id;
    const url = isNew ? '/api/content' : `/api/content/${data.id}`;
    const method = isNew ? 'POST' : 'PUT';

    try {
      const res = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error('Failed to save content');
      setModal({ type: null, data: null });
      refreshContent();
    } catch (error) {
      console.error(error);
      alert('Error saving content.');
    }
  };

  const handleDeleteSiteContent = async (id) => {
    if (window.confirm('Are you sure you want to delete this content item? This action is permanent.')) {
      try {
        const res = await fetch(`/api/content/${id}`, { method: 'DELETE' });
        if (!res.ok) throw new Error('Failed to delete content');
        refreshContent();
      } catch (error) {
        console.error(error);
        alert('Error deleting content.');
      }
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-rose-500"></div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return <LoginForm onLogin={login} />;
  }

  const navItems = [
    { id: 'dashboard', name: 'Dashboard', icon: '📊' },
    user?.role === 'ADMIN' && { id: 'content', name: 'Site Content', icon: '📝' },
    { id: 'blog', name: 'Blog Posts', icon: '📖' },
    { id: 'careers', name: 'Careers', icon: '💼' },
  ].filter(Boolean); // filter(Boolean) removes false values if user is not ADMIN

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center space-x-4">
              <h1 className="text-2xl font-bold text-rose-600">Balloon'd</h1>
              <span className="text-gray-400">|</span>
              <span className="text-gray-600">Admin Dashboard</span>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-600">Welcome, {user?.name}</span>
              <button
                onClick={() => router.push('/')}
                className="text-gray-600 hover:text-gray-900 text-sm font-medium"
              >
                View Site
              </button>
              <button
                onClick={logout}
                className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded-lg font-medium transition-colors"
              >
                Sign Out
              </button>
            </div>
          </div>
        </div>
      </header>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex space-x-8">
          <aside className="w-64 flex-shrink-0">
            <nav className="bg-white rounded-lg shadow p-4">
              <ul className="space-y-2">
                {navItems.map((item) => (
                  <li key={item.id}>
                    <button
                      onClick={() => setActiveTab(item.id)}
                      className={`w-full flex items-center space-x-3 px-4 py-2 rounded-lg text-left transition-colors ${
                        activeTab === item.id
                          ? 'bg-rose-100 text-rose-600'
                          : 'text-gray-600 hover:bg-gray-100'
                      }`}
                    >
                      <span>{item.icon}</span>
                      <span className="font-medium">{item.name}</span>
                    </button>
                  </li>
                ))}
              </ul>
            </nav>
          </aside>
          <main className="flex-1">
            {activeTab === 'dashboard' && (
              <div className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="bg-white p-6 rounded-lg shadow">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Blog Posts</h3>
                    <p className="text-3xl font-bold text-rose-600">{blogPosts.length}</p>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Job Positions</h3>
                    <p className="text-3xl font-bold text-orange-600">{jobPositions.length}</p>
                  </div>
                  {user?.role === 'ADMIN' && (
                    <div className="bg-white p-6 rounded-lg shadow">
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">Site Content</h3>
                      <p className="text-3xl font-bold text-blue-600">{siteContent.length}</p>
                    </div>
                  )}
                </div>
              </div>
            )}

            {activeTab === 'content' && user?.role === 'ADMIN' && (
              <div className="space-y-6">
                <div className="flex justify-between items-center">
                  <h2 className="text-2xl font-bold text-gray-900">Site Content</h2>
                  <button
                    onClick={() => setModal({ type: 'content', data: null })}
                    className="bg-rose-500 hover:bg-rose-600 text-white px-4 py-2 rounded-lg font-medium transition-colors"
                  >
                    New Content
                  </button>
                </div>
                <div className="bg-white rounded-lg shadow overflow-hidden">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Section</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Title</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                        <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {siteContent.map((item) => (
                        <tr key={item.id}>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                            {item.section}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm font-medium text-gray-900">{item.title}</div>
                            <div className="text-sm text-gray-500 truncate max-w-xs">{item.content}</div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                              item.published 
                                ? 'bg-green-100 text-green-800' 
                                : 'bg-yellow-100 text-yellow-800'
                            }`}>
                              {item.published ? 'Published' : 'Draft'}
                            </span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium space-x-2">
                            <button
                              onClick={() => setModal({ type: 'content', data: item })}
                              className="text-indigo-600 hover:text-indigo-900"
                            >
                              Edit
                            </button>
                            <button
                              onClick={() => handleDeleteSiteContent(item.id)}
                              className="text-red-600 hover:text-red-900"
                            >
                              Delete
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {activeTab === 'blog' && (
              <div className="space-y-6">
                <div className="flex justify-between items-center">
                  <h2 className="text-2xl font-bold text-gray-900">Blog Management</h2>
                  <button
                    onClick={() => setModal({ type: 'blog', data: null })}
                    className="bg-rose-500 hover:bg-rose-600 text-white px-4 py-2 rounded-lg font-medium transition-colors"
                  >
                    New Post
                  </button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {blogPosts.map((post) => (
                    <div key={post.id} className="bg-white rounded-lg shadow p-6 flex flex-col">
                      <div className="flex-grow">
                        <div className="flex justify-between items-start mb-4">
                           <span className={`text-xs px-2 py-1 rounded-full ${
                              post.published
                                ? 'bg-green-100 text-green-600'
                                : 'bg-yellow-100 text-yellow-600'
                            }`}>
                              {post.published ? 'Published' : 'Draft'}
                            </span>
                        </div>
                        <h3 className="font-semibold text-gray-900 mb-2">{post.title}</h3>
                        <p className="text-sm text-gray-600 mb-4 line-clamp-2">{post.excerpt}</p>
                        <div className="flex justify-between items-center text-xs text-gray-500">
                          <span>{new Date(post.createdAt).toLocaleDateString()}</span>
                          <span>{post.readTime}</span>
                        </div>
                        <div className="mt-2">
                          <span className="inline-block bg-rose-50 text-rose-600 text-xs px-2 py-1 rounded">
                            {post.category}
                          </span>
                        </div>
                      </div>
                      <div className="mt-6 flex justify-end space-x-2 border-t pt-4">
                        <button
                          onClick={() => setModal({ type: 'blog', data: post })}
                          className="text-sm bg-gray-200 hover:bg-gray-300 text-gray-800 px-3 py-1 rounded-md"
                        >
                          Edit
                        </button>
                        <button
                          onClick={() => handleDeleteBlogPost(post.id)}
                          className="text-sm bg-red-100 hover:bg-red-200 text-red-700 px-3 py-1 rounded-md"
                        >
                          Delete
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'careers' && (
              <div className="space-y-6">
                <div className="flex justify-between items-center">
                  <h2 className="text-2xl font-bold text-gray-900">Careers Management</h2>
                  <button
                    onClick={() => setModal({ type: 'career', data: null })}
                    className="bg-rose-500 hover:bg-rose-600 text-white px-4 py-2 rounded-lg font-medium transition-colors"
                  >
                    New Position
                  </button>
                </div>
                <div className="space-y-4">
                  {jobPositions.map((position) => (
                    <div key={position.id} className="bg-white rounded-lg shadow p-6">
                      <div className="flex justify-between items-start">
                        <div className="flex-1">
                          <div className="flex items-center space-x-3 mb-2">
                            <h3 className="text-lg font-semibold text-gray-900">{position.title}</h3>
                            <span className={`text-xs px-2 py-1 rounded-full ${
                              position.published 
                                ? 'bg-green-100 text-green-600' 
                                : 'bg-yellow-100 text-yellow-600'
                            }`}>
                              {position.published ? 'Published' : 'Draft'}
                            </span>
                          </div>
                          <div className="flex items-center space-x-4 text-sm text-gray-600 mb-3">
                            <span>{position.department}</span>
                            <span>•</span>
                            <span>{position.location}</span>
                            <span>•</span>
                            <span>{position.type}</span>
                          </div>
                          <p className="text-gray-600 line-clamp-2">{position.description}</p>
                        </div>
                        <div className="flex-shrink-0 flex items-center space-x-2 ml-4">
                          <button
                            onClick={() => setModal({ type: 'career', data: position })}
                            className="text-sm bg-gray-200 hover:bg-gray-300 text-gray-800 px-3 py-1 rounded-md"
                          >
                            Edit
                          </button>
                          <button
                            onClick={() => handleDeleteJobPosition(position.id)}
                            className="text-sm bg-red-100 hover:bg-red-200 text-red-700 px-3 py-1 rounded-md"
                          >
                            Delete
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </main>
        </div>
      </div>
      
      {modal.type === 'blog' && (
        <BlogPostForm
          post={modal.data}
          onSave={handleSaveBlogPost}
          onCancel={() => setModal({ type: null, data: null })}
        />
      )}
      {modal.type === 'career' && (
        <JobPositionForm
          position={modal.data}
          onSave={handleSaveJobPosition}
          onCancel={() => setModal({ type: null, data: null })}
        />
      )}
      {modal.type === 'content' && (
        <SiteContentForm
          content={modal.data}
          onSave={handleSaveSiteContent}
          onCancel={() => setModal({ type: null, data: null })}
        />
      )}
    </div>
  );
};

export default AdminDashboard;
