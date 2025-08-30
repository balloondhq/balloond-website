// pages/admin/index.tsx (continued)
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Title</label>
                <input
                  type="text"
                  value={editingPost.title}
                  onChange={(e) => handleTitleChange(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-500"
                  placeholder="Enter post title"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Slug</label>
                <input
                  type="text"
                  value={editingPost.slug}
                  onChange={(e) => setEditingPost({...editingPost, slug: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-500"
                  placeholder="url-friendly-slug"
                />
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Excerpt</label>
              <textarea
                rows={3}
                value={editingPost.excerpt}
                onChange={(e) => setEditingPost({...editingPost, excerpt: e.target.value})}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-500"
                placeholder="Brief description of the post"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Content</label>
              <textarea
                rows={12}
                value={editingPost.content}
                onChange={(e) => setEditingPost({...editingPost, content: e.target.value})}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-500"
                placeholder="Write your blog post content here. You can use HTML tags."
              />
              <p className="text-xs text-gray-500 mt-1">You can use HTML tags for formatting</p>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Author</label>
                <input
                  type="text"
                  value={editingPost.author}
                  onChange={(e) => setEditingPost({...editingPost, author: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-500"
                  placeholder="Author name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
                <select
                  value={editingPost.category}
                  onChange={(e) => setEditingPost({...editingPost, category: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-500"
                >
                  <option value="Dating Tips">Dating Tips</option>
                  <option value="Research">Research</option>
                  <option value="Technology">Technology</option>
                  <option value="Success Stories">Success Stories</option>
                  <option value="Wellness">Wellness</option>
                  <option value="Dating Safety">Dating Safety</option>
                </select>
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Author Bio</label>
              <textarea
                rows={2}
                value={editingPost.authorBio}
                onChange={(e) => setEditingPost({...editingPost, authorBio: e.target.value})}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-500"
                placeholder="Brief author biography"
              />
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Read Time</label>
                <input
                  type="text"
                  value={editingPost.readTime}
                  onChange={(e) => setEditingPost({...editingPost, readTime: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-500"
                  placeholder="5 min read"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Tags (comma separated)</label>
                <input
                  type="text"
                  value={editingPost.tags.join(', ')}
                  onChange={(e) => setEditingPost({...editingPost, tags: e.target.value.split(',').map(tag => tag.trim())})}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-500"
                  placeholder="tag1, tag2, tag3"
                />
              </div>
            </div>
            
            <div className="flex items-center space-x-6">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="featured"
                  checked={editingPost.featured}
                  onChange={(e) => setEditingPost({...editingPost, featured: e.target.checked})}
                  className="w-4 h-4 text-rose-600 border-gray-300 rounded focus:ring-rose-500"
                />
                <label htmlFor="featured" className="ml-2 text-sm font-medium text-gray-700">
                  Featured Post
                </label>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Status</label>
                <select
                  value={editingPost.status}
                  onChange={(e) => setEditingPost({...editingPost, status: e.target.value as 'published' | 'draft'})}
                  className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-500"
                >
                  <option value="draft">Draft</option>
                  <option value="published">Published</option>
                </select>
              </div>
            </div>
          </div>
          
          <div className="flex justify-end space-x-3 mt-6">
            <button
              onClick={onClose}
              className="px-4 py-2 text-gray-600 hover:text-gray-800 font-medium"
            >
              Cancel
            </button>
            <button
              onClick={() => onSave(editingPost)}
              className="bg-rose-500 hover:bg-rose-600 text-white px-4 py-2 rounded-lg font-medium transition-colors"
            >
              {post ? 'Save Changes' : 'Create Post'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

// Job Position Modal Component
const JobPositionModal = ({ 
  position, 
  onSave, 
  onClose 
}: { 
  position: JobPosition | null;
  onSave: (position: JobPosition) => void;
  onClose: () => void;
}) => {
  const [editingPosition, setEditingPosition] = useState<JobPosition>(position || {
    id: 0,
    title: '',
    department: '',
    location: '',
    type: 'Full-time',
    description: '',
    requirements: [],
    responsibilities: [],
    status: 'active',
    datePosted: new Date().toISOString().split('T')[0]
  });

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg shadow-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            {position ? 'Edit Job Position' : 'Create New Job Position'}
          </h3>
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Job Title</label>
                <input
                  type="text"
                  value={editingPosition.title}
                  onChange={(e) => setEditingPosition({...editingPosition, title: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-500"
                  placeholder="Senior Full-Stack Developer"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Department</label>
                <select
                  value={editingPosition.department}
                  onChange={(e) => setEditingPosition({...editingPosition, department: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-500"
                >
                  <option value="Engineering">Engineering</option>
                  <option value="Design">Design</option>
                  <option value="Marketing">Marketing</option>
                  <option value="Product">Product</option>
                  <option value="Operations">Operations</option>
                  <option value="Sales">Sales</option>
                </select>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Location</label>
                <input
                  type="text"
                  value={editingPosition.location}
                  onChange={(e) => setEditingPosition({...editingPosition, location: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-500"
                  placeholder="Remote / London"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Type</label>
                <select
                  value={editingPosition.type}
                  onChange={(e) => setEditingPosition({...editingPosition, type: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-500"
                >
                  <option value="Full-time">Full-time</option>
                  <option value="Part-time">Part-time</option>
                  <option value="Contract">Contract</option>
                  <option value="Internship">Internship</option>
                </select>
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Description</label>
              <textarea
                rows={4}
                value={editingPosition.description}
                onChange={(e) => setEditingPosition({...editingPosition, description: e.target.value})}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-500"
                placeholder="Brief description of the role and what the person will be doing"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Requirements (one per line)</label>
              <textarea
                rows={5}
                value={editingPosition.requirements.join('\n')}
                onChange={(e) => setEditingPosition({...editingPosition, requirements: e.target.value.split('\n').filter(req => req.trim())})}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-500"
                placeholder="5+ years of experience&#10;Proficiency in React&#10;Strong problem-solving skills"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Responsibilities (one per line)</label>
              <textarea
                rows={5}
                value={editingPosition.responsibilities.join('\n')}
                onChange={(e) => setEditingPosition({...editingPosition, responsibilities: e.target.value.split('\n').filter(resp => resp.trim())})}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-500"
                placeholder="Develop and maintain applications&#10;Collaborate with design team&#10;Mentor junior developers"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Status</label>
              <select
                value={editingPosition.status}
                onChange={(e) => setEditingPosition({...editingPosition, status: e.target.value as 'active' | 'closed'})}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-500"
              >
                <option value="active">Active</option>
                <option value="closed">Closed</option>
              </select>
            </div>
          </div>
          
          <div className="flex justify-end space-x-3 mt-6">
            <button
              onClick={onClose}
              className="px-4 py-2 text-gray-600 hover:text-gray-800 font-medium"
            >
              Cancel
            </button>
            <button
              onClick={() => onSave(editingPosition)}
              className="bg-rose-500 hover:bg-rose-600 text-white px-4 py-2 rounded-lg font-medium transition-colors"
            >
              {position ? 'Save Changes' : 'Create Position'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
