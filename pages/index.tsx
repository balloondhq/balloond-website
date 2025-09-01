// pages/admin/index.tsx (complete file)
import type { NextPage } from 'next';
import { useState, useEffect } from 'react';
import { NextSeo } from 'next-seo';
import { useRouter } from 'next/router';
import { 
  useBlogPosts, 
  useJobPositions, 
  useSiteContent,
  triggerContentUpdate 
} from '../../lib/use-content';
import { BlogPost, JobPosition, SiteContent } from '../../lib/content-manager';

// Mock authentication
const useAuth = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    const authToken = localStorage.getItem('admin_token');
    if (authToken) {
      setUser({ name: 'Admin User', email: 'admin@balloond.com' });
      setIsAuthenticated(true);
    }
    setIsLoading(false);
  }, []);

  const login = async (email: string, password: string) => {
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
  const { posts, createPost, editPost, removePost } = useBlogPosts();
  const { positions, createPosition, editPosition, removePosition } = useJobPositions();
  const { content, editContent } = useSiteContent();
  const [activeTab, setActiveTab] = useState('dashboard');
  const [editingContent, setEditingContent] = useState<SiteContent | null>(null);
  const [editingPost, setEditingPost] = useState<BlogPost | null>(null);
  const [editingPosition, setEditingPosition] = useState<JobPosition | null>(null);
  const [showNewPostModal, setShowNewPostModal] = useState(false);
  const [showNewPositionModal, setShowNewPositionModal] = useState(false);
  const router = useRouter();

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

  const handleSaveContent = (updatedContent: SiteContent) => {
    editContent(updatedContent.id, updatedContent);
    setEditingContent(null);
    triggerContentUpdate();
  };

  const handleSavePost = (post: BlogPost) => {
    if (post.id && post.id > 0) {
      editPost(post.id, post);
    } else {
      createPost(post);
    }
    setEditingPost(null);
    setShowNewPostModal(false);
    triggerContentUpdate();
  };

  const handleSavePosition = (position: JobPosition) => {
    if (position.id && position.id > 0) {
      editPosition(position.id, position);
    } else {
      createPosition(position);
    }
    setEditingPosition(null);
    setShowNewPositionModal(false);
    triggerContentUpdate();
  };

  const handleDeletePost = (id: number) => {
    if (confirm('Are you sure you want to delete this post?')) {
      removePost(id);
      triggerContentUpdate();
    }
  };

  const handleDeletePosition = (id: number) => {
    if (confirm('Are you sure you want to delete this position?')) {
      removePosition(id);
      triggerContentUpdate();
    }
  };

  return (
    <>
      <NextSeo
        title="Admin Dashboard - Balloon'd"
        description="Admin dashboard for managing Balloon'd website content"
        noindex={true}
      />
      
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
              </div>
            </div>
          </div>
        </header>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex space-x-8">
            <aside className="w-64 flex-shrink-0">
              <nav className="bg-white rounded-lg shadow p-4">
                <ul className="space-y-2">
                  {[
                    { id: 'dashboard', name: 'Dashboard', icon: '📊' },
                    { id: 'content', name: 'Site Content', icon: '📝' },
                    { id: 'blog', name: 'Blog Posts', icon: '📖' },
                    { id: 'careers', name: 'Careers', icon: '💼' },
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

            <main className="flex-1">
              {activeTab === 'dashboard' && (
                <div className="space-y-8">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-white p-6 rounded-lg shadow">
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">Blog Posts</h3>
                      <p className="text-3xl font-bold text-rose-600">{posts.length}</p>
                      <p className="text-sm text-gray-500 mt-1">
                        {posts.filter(p => p.status === 'published').length} published
                      </p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow">
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">Job Positions</h3>
                      <p className="text-3xl font-bold text-orange-600">{positions.length}</p>
                      <p className="text-sm text-gray-500 mt-1">
                        {positions.filter(p => p.status === 'active').length} active
                      </p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow">
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">Site Content</h3>
                      <p className="text-3xl font-bold text-blue-600">{content.length}</p>
                      <p className="text-sm text-gray-500 mt-1">Content sections</p>
                    </div>
                  </div>
                  
                  <div className="bg-white rounded-lg shadow">
                    <div className="p-6 border-b border-gray-200">
                      <h2 className="text-xl font-semibold text-gray-900">System Status</h2>
                    </div>
                    <div className="p-6">
                      <div className="space-y-4">
                        <div className="flex items-center space-x-3">
                          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                          <span className="text-sm text-gray-600">Content management system active</span>
                          <span className="text-xs text-gray-400">Live</span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                          <span className="text-sm text-gray-600">Real-time updates enabled</span>
                          <span className="text-xs text-gray-400">Live</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'content' && (
                <div className="space-y-6">
                  <div className="flex justify-between items-center">
                    <h2 className="text-2xl font-bold text-gray-900">Site Content</h2>
                    <div className="text-sm text-green-600 bg-green-50 px-3 py-1 rounded-full">
                      ✅ Live Updates Active
                    </div>
                  </div>
                  
                  <div className="bg-white rounded-lg shadow overflow-hidden">
                    <table className="min-w-full divide-y divide-gray-200">
                      <thead className="bg-gray-50">
                        <tr>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Section</th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Title</th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-gray-200">
                        {content.map((item) => (
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
                                item.status === 'published' 
                                  ? 'bg-green-100 text-green-800' 
                                  : 'bg-yellow-100 text-yellow-800'
                              }`}>
                                {item.status}
                              </span>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                              <button
                                onClick={() => setEditingContent(item)}
                                className="text-rose-600 hover:text-rose-900"
                              >
                                Edit
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
                    <div className="flex items-center space-x-4">
                      <div className="text-sm text-green-600 bg-green-50 px-3 py-1 rounded-full">
                        ✅ Live Updates Active
                      </div>
                      <button
                        onClick={() => setShowNewPostModal(true)}
                        className="bg-rose-500 hover:bg-rose-600 text-white px-4 py-2 rounded-lg font-medium transition-colors"
                      >
                        New Blog Post
                      </button>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {posts.map((post) => (
                      <div key={post.id} className="bg-white rounded-lg shadow p-6">
                        <div className="flex justify-between items-start mb-4">
                          <span className={`text-xs px-2 py-1 rounded-full ${
                            post.status === 'published' 
                              ? 'bg-green-100 text-green-600' 
                              : 'bg-yellow-100 text-yellow-600'
                          }`}>
                            {post.status}
                          </span>
                          <div className="flex space-x-2">
                            <button
                              onClick={() => setEditingPost(post)}
                              className="text-rose-600 hover:text-rose-700 text-sm font-medium"
                            >
                              Edit
                            </button>
                            <button
                              onClick={() => handleDeletePost(post.id)}
                              className="text-red-600 hover:text-red-700 text-sm font-medium"
                            >
                              Delete
                            </button>
                          </div>
                        </div>
                        <h3 className="font-semibold text-gray-900 mb-2">{post.title}</h3>
                        <p className="text-sm text-gray-600 mb-4">{post.excerpt}</p>
                        <div className="flex justify-between items-center text-xs text-gray-500">
                          <span>{post.date}</span>
                          <span>{post.readTime}</span>
                        </div>
                        <div className="mt-2">
                          <span className="inline-block bg-rose-50 text-rose-600 text-xs px-2 py-1 rounded">
                            {post.category}
                          </span>
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
                    <div className="flex items-center space-x-4">
                      <div className="text-sm text-green-600 bg-green-50 px-3 py-1 rounded-full">
                        ✅ Live Updates Active
                      </div>
                      <button
                        onClick={() => setShowNewPositionModal(true)}
                        className="bg-rose-500 hover:bg-rose-600 text-white px-4 py-2 rounded-lg font-medium transition-colors"
                      >
                        New Position
                      </button>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    {positions.map((position) => (
                      <div key={position.id} className="bg-white rounded-lg shadow p-6">
                        <div className="flex justify-between items-start">
                          <div className="flex-1">
                            <div className="flex items-center space-x-3 mb-2">
                              <h3 className="text-lg font-semibold text-gray-900">{position.title}</h3>
                              <span className={`text-xs px-2 py-1 rounded-full ${
                                position.status === 'active' 
                                  ? 'bg-green-100 text-green-600' 
                                  : 'bg-gray-100 text-gray-600'
                              }`}>
                                {position.status}
                              </span>
                            </div>
                            <div className="flex items-center space-x-4 text-sm text-gray-600 mb-3">
                              <span>{position.department}</span>
                              <span>•</span>
                              <span>{position.location}</span>
                              <span>•</span>
                              <span>{position.type}</span>
                            </div>
                            <p className="text-gray-600">{position.description}</p>
                          </div>
                          <div className="flex space-x-2 ml-4">
                            <button
                              onClick={() => setEditingPosition(position)}
                              className="text-rose-600 hover:text-rose-700 text-sm font-medium"
                            >
                              Edit
                            </button>
                            <button
                              onClick={() => handleDeletePosition(position.id)}
                              className="text-red-600 hover:text-red-700 text-sm font-medium"
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

              {activeTab === 'settings' && (
                <div className="space-y-6">
                  <h2 className="text-2xl font-bold text-gray-900">Settings</h2>
                  
                  <div className="bg-white rounded-lg shadow p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Content Management System</h3>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between p-4 bg-green-50 rounded-lg">
                        <div>
                          <h4 className="font-medium text-green-800">Live Updates</h4>
                          <p className="text-sm text-green-600">Changes are instantly reflected on your website</p>
                        </div>
                        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      </div>
                      <div className="flex items-center justify-between p-4 bg-blue-50 rounded-lg">
                        <div>
                          <h4 className="font-medium text-blue-800">Data Persistence</h4>
                          <p className="text-sm text-blue-600">All changes are saved locally in browser storage</p>
                        </div>
                        <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                      </div>
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
              )}
            </main>
          </div>
        </div>

        {/* Modals */}
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