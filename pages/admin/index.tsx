// pages/admin/index.tsx
import type { NextPage } from 'next';
import { useState, useEffect } from 'react';
import { NextSeo } from 'next-seo';
import { useRouter } from 'next/router';

interface ContentItem {
  id: string;
  title: string;
  content: string;
  lastModified: string;
  status: 'published' | 'draft';
}

// Mock authentication - in a real app, integrate with Vercel Auth or your auth provider
const useAuth = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    // Check if user is authenticated (in real app, check JWT/session)
    const authToken = localStorage.getItem('admin_token');
    if (authToken) {
      setUser({ name: 'Admin User', email: 'admin@balloond.com' });
      setIsAuthenticated(true);
    }
    setIsLoading(false);
  }, []);

  const login = async (email: string, password: string) => {
    // Mock login - integrate with real auth
    if (email === 'admin@balloond.com' && password === 'password') {
      localStorage.setItem('admin_token', 'mock_token_123');
      setUser({ name: 'Admin User', email: email });
      setIsAuthenticated(true);
      return true;
    }
    return false;
  };

  const logout = () => {
    localStorage.removeItem('admin_token');
    setUser(null);
    setIsAuthenticated(false);
  };

  return { isAuthenticated, isLoading, user, login, logout };
};

const LoginForm = ({ onLogin }: { onLogin: (email: string, password: string) => Promise<boolean> }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLogging, setIsLogging] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLogging(true);
    setError('');
    
    const success = await onLogin(email, password);
    if (!success) {
      setError('Invalid credentials');
    }
    setIsLogging(false);
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
              onChange={(e) => setEmail(e.target.value)}
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
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-500"
              placeholder="Enter your password"
              required
            />
          </div>
          
          {error && (
            <div className="bg-red-50 text-red-600 p-3 rounded-lg text-sm">
              {error}
            </div>
          )}
          
          <button
            type="submit"
            disabled={isLogging}
            className="w-full bg-rose-500 hover:bg-rose-600 text-white py-3 rounded-lg font-medium transition-colors disabled:opacity-50"
          >
            {isLogging ? 'Signing in...' : 'Sign In'}
          </button>
        </form>
        
        <div className="mt-6 p-4 bg-gray-50 rounded-lg">
          <p className="text-sm text-gray-600 font-medium">Demo Credentials:</p>
          <p className="text-xs text-gray-500">Email: admin@balloond.com</p>
          <p className="text-xs text-gray-500">Password: password</p>
        </div>
      </div>
    </div>
  );
};

const AdminDashboard: NextPage = () => {
  const { isAuthenticated, isLoading, user, login, logout } = useAuth();
  const [activeTab, setActiveTab] = useState('dashboard');
  const [editingContent, setEditingContent] = useState<ContentItem | null>(null);
  const router = useRouter();

  // Mock content data
  const [contents, setContents] = useState<ContentItem[]>([
    {
      id: 'homepage-hero',
      title: 'Homepage Hero Section',
      content: 'One pop away from what you\'ve been waiting for',
      lastModified: '2024-12-20',
      status: 'published'
    },
    {
      id: 'about-mission',
      title: 'About Page Mission',
      content: 'Balloon\'d is built on the belief that anyone looking for love should be able to find it.',
      lastModified: '2024-12-19',
      status: 'published'
    },
    {
      id: 'blog-featured',
      title: 'Featured Blog Post',
      content: 'The Psychology Behind Voice-First Dating',
      lastModified: '2024-12-18',
      status: 'published'
    },
    {
      id: 'careers-intro',
      title: 'Careers Page Introduction',
      content: 'Join our mission to revolutionize how people connect and find love.',
      lastModified: '2024-12-17',
      status: 'draft'
    }
  ]);

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

  const handleSaveContent = (content: ContentItem) => {
    setContents(prev => 
      prev.map(item => 
        item.id === content.id 
          ? { ...content, lastModified: new Date().toISOString().split('T')[0] }
          : item
      )
    );
    setEditingContent(null);
  };

  const renderDashboard = () => (
    <div className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Total Pages</h3>
          <p className="text-3xl font-bold text-rose-600">12</p>
          <p className="text-sm text-gray-500 mt-1">Active pages</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Blog Posts</h3>
          <p className="text-3xl font-bold text-orange-600">6</p>
          <p className="text-sm text-gray-500 mt-1">Published articles</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Last Updated</h3>
          <p className="text-lg font-medium text-gray-900">Today</p>
          <p className="text-sm text-gray-500 mt-1">Homepage content</p>
        </div>
      </div>
      
      <div className="bg-white rounded-lg shadow">
        <div className="p-6 border-b border-gray-200">
          <h2 className="text-xl font-semibold text-gray-900">Recent Activity</h2>
        </div>
        <div className="p-6">
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span className="text-sm text-gray-600">Homepage hero section updated</span>
              <span className="text-xs text-gray-400">2 hours ago</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              <span className="text-sm text-gray-600">New blog post published</span>
              <span className="text-xs text-gray-400">1 day ago</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
              <span className="text-sm text-gray-600">Careers page content updated</span>
              <span className="text-xs text-gray-400">3 days ago</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderContentManagement = () => (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-gray-900">Content Management</h2>
        <button className="bg-rose-500 hover:bg-rose-600 text-white px-4 py-2 rounded-lg font-medium transition-colors">
          Add New Content
        </button>
      </div>
      
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Title</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Last Modified</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {contents.map((item) => (
              <tr key={item.id}>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm font-medium text-gray-900">{item.title}</div>
                  <div className="text-sm text-gray-500 truncate max-w-xs">{item.content}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                    item.status === 'published' 
                      ? 'bg-green-100 text-green-800' 
                      : 'bg-yellow-100 text-yellow-800'
                  }`}>
                    {item.status}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {item.lastModified}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                  <button
                    onClick={() => setEditingContent(item)}
                    className="text-rose-600 hover:text-rose-900 mr-3"
                  >
                    Edit
                  </button>
                  <button className="text-gray-600 hover:text-gray-900">
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );

  const renderBlogManagement = () => (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-gray-900">Blog Management</h2>
        <button className="bg-rose-500 hover:bg-rose-600 text-white px-4 py-2 rounded-lg font-medium transition-colors">
          New Blog Post
        </button>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[1,2,3,4,5,6].map((i) => (
          <div key={i} className="bg-white rounded-lg shadow p-6">
            <div className="flex justify-between items-start mb-4">
              <span className="bg-rose-100 text-rose-600 text-xs px-2 py-1 rounded-full">Published</span>
              <button className="text-gray-400 hover:text-gray-600">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z"></path>
                </svg>
              </button>
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Blog Post Title {i}</h3>
            <p className="text-sm text-gray-600 mb-4">Lorem ipsum dolor sit amet consectetur...</p>
            <div className="flex justify-between items-center text-xs text-gray-500">
              <span>Dec {20-i}, 2024</span>
              <span>5 min read</span>
            </div>
            <div className="mt-4 flex space-x-2">
              <button className="text-rose-600 hover:text-rose-700 text-sm font-medium">Edit</button>
              <button className="text-gray-600 hover:text-gray-700 text-sm font-medium">View</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderSettings = () => (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-900">Settings</h2>
      
      <div className="bg-white rounded-lg shadow p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Site Settings</h3>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Site Title</label>
            <input
              type="text"
              defaultValue="Balloon'd"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Site Description</label>
            <textarea
              rows={3}
              defaultValue="Break through the noise of modern dating. Pop the balloon of small talk and endless swiping with authentic, fun connections."
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-500"
            />
          </div>
          <button className="bg-rose-500 hover:bg-rose-600 text-white px-4 py-2 rounded-lg font-medium transition-colors">
            Save Settings
          </button>
        </div>
      </div>
      
      <div className="bg-white rounded-lg shadow p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">User Account</h3>
        <div className="flex items-center space-x-4">
          <div className="w-12 h-12 bg-rose-500 rounded-full flex items-center justify-center text-white font-medium">
            {user?.name?.charAt(0)}
          </div>
          <div>
            <p className="font-medium text-gray-900">{user?.name}</p>
            <p className="text-sm text-gray-600">{user?.email}</p>
          </div>
        </div>
        <div className="mt-4">
          <button
            onClick={logout}
            className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded-lg font-medium transition-colors"
          >
            Sign Out
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <>
      <NextSeo
        title="Admin Dashboard - Balloon'd"
        description="Admin dashboard for managing Balloon'd website content"
        noindex={true}
      />
      
      <div className="min-h-screen bg-gray-100">
        {/* Header */}
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
              </div>
            </div>
          </div>
        </header>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex space-x-8">
            {/* Sidebar */}
            <aside className="w-64 flex-shrink-0">
              <nav className="bg-white rounded-lg shadow p-4">
                <ul className="space-y-2">
                  {[
                    { id: 'dashboard', name: 'Dashboard', icon: '📊' },
                    { id: 'content', name: 'Content', icon: '📝' },
                    { id: 'blog', name: 'Blog Posts', icon: '📖' },
                    { id: 'careers', name: 'Careers', icon: '💼' },
                    { id: 'press', name: 'Press', icon: '📰' },
                    { id: 'settings', name: 'Settings', icon: '⚙️' }
                  ].map((item) => (
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

            {/* Main Content */}
            <main className="flex-1">
              {activeTab === 'dashboard' && renderDashboard()}
              {activeTab === 'content' && renderContentManagement()}
              {activeTab === 'blog' && renderBlogManagement()}
              {activeTab === 'settings' && renderSettings()}
            </main>
          </div>
        </div>

        {/* Edit Content Modal */}
        {editingContent && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-lg shadow-xl max-w-2xl w-full max-h-96 overflow-y-auto">
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Edit: {editingContent.title}
                </h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Title</label>
                    <input
                      type="text"
                      value={editingContent.title}
                      onChange={(e) => setEditingContent({
                        ...editingContent,
                        title: e.target.value
                      })}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Content</label>
                    <textarea
                      rows={6}
                      value={editingContent.content}
                      onChange={(e) => setEditingContent({
                        ...editingContent,
                        content: e.target.value
                      })}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Status</label>
                    <select
                      value={editingContent.status}
                      onChange={(e) => setEditingContent({
                        ...editingContent,
                        status: e.target.value as 'published' | 'draft'
                      })}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-500"
                    >
                      <option value="draft">Draft</option>
                      <option value="published">Published</option>
                    </select>
                  </div>
                </div>
                <div className="flex justify-end space-x-3 mt-6">
                  <button
                    onClick={() => setEditingContent(null)}
                    className="px-4 py-2 text-gray-600 hover:text-gray-800 font-medium"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={() => handleSaveContent(editingContent)}
                    className="bg-rose-500 hover:bg-rose-600 text-white px-4 py-2 rounded-lg font-medium transition-colors"
                  >
                    Save Changes
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default AdminDashboard;