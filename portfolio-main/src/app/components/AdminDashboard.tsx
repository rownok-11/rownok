import { motion } from 'motion/react';
import { useState } from 'react';
import { Plus, Edit2, Trash2, LogOut, Save, X } from 'lucide-react';
import { toast } from 'sonner';

interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  image: string;
  liveUrl: string;
  githubUrl: string;
}

interface BlogPost {
  id: number;
  title: string;
  description: string;
  image: string;
  date: string;
  content?: string;
}

interface AdminDashboardProps {
  projects: Project[];
  posts: BlogPost[];
  onUpdateProjects: (projects: Project[]) => void;
  onUpdatePosts: (posts: BlogPost[]) => void;
  onLogout: () => void;
}

export function AdminDashboard({
  projects,
  posts,
  onUpdateProjects,
  onUpdatePosts,
  onLogout,
}: AdminDashboardProps) {
  const [activeTab, setActiveTab] = useState<'projects' | 'blog'>('projects');
  const [editingProject, setEditingProject] = useState<Project | null>(null);
  const [editingPost, setEditingPost] = useState<BlogPost | null>(null);

  const handleAddProject = () => {
    const newProject: Project = {
      id: Date.now(),
      title: 'New Project',
      description: 'Project description',
      technologies: ['Tech1', 'Tech2'],
      image: 'https://via.placeholder.com/400x300',
      liveUrl: '#',
      githubUrl: '#',
    };
    onUpdateProjects([...projects, newProject]);
    toast.success('Project added successfully!');
  };

  const handleDeleteProject = (id: number) => {
    onUpdateProjects(projects.filter((p) => p.id !== id));
    toast.success('Project deleted successfully!');
  };

  const handleSaveProject = () => {
    if (!editingProject) return;
    const updatedProjects = projects.map((p) =>
      p.id === editingProject.id ? editingProject : p
    );
    onUpdateProjects(updatedProjects);
    setEditingProject(null);
    toast.success('Project updated successfully!');
  };

  const handleAddPost = () => {
    const newPost: BlogPost = {
      id: Date.now(),
      title: 'New Blog Post',
      description: 'Blog post description',
      image: 'https://via.placeholder.com/400x300',
      date: new Date().toLocaleDateString(),
    };
    onUpdatePosts([...posts, newPost]);
    toast.success('Blog post added successfully!');
  };

  const handleDeletePost = (id: number) => {
    onUpdatePosts(posts.filter((p) => p.id !== id));
    toast.success('Blog post deleted successfully!');
  };

  const handleSavePost = () => {
    if (!editingPost) return;
    const updatedPosts = posts.map((p) => (p.id === editingPost.id ? editingPost : p));
    onUpdatePosts(updatedPosts);
    setEditingPost(null);
    toast.success('Blog post updated successfully!');
  };

  return (
    <div className="min-h-screen py-20 relative">
      <div className="container mx-auto px-4 z-10">
        <div className="flex justify-between items-center mb-8">
          <h1
            style={{
              fontSize: '2.5rem',
              color: '#ff0000',
              textShadow: '0 0 10px #ff0000',
            }}
          >
            ADMIN DASHBOARD
          </h1>
          <button
            onClick={onLogout}
            className="flex items-center gap-2 px-6 py-3 rounded transition-all hover:scale-105"
            style={{
              border: '2px solid #ff0000',
              color: '#ff0000',
              boxShadow: '0 0 10px rgba(255, 0, 0, 0.3)',
            }}
          >
            <LogOut size={20} />
            <span>Logout</span>
          </button>
        </div>

        <div className="flex gap-4 mb-8">
          <button
            onClick={() => setActiveTab('projects')}
            className="px-6 py-3 rounded transition-all"
            style={{
              background: activeTab === 'projects' ? '#ff0000' : 'transparent',
              border: '2px solid #ff0000',
              color: activeTab === 'projects' ? '#000' : '#ff0000',
            }}
          >
            Projects
          </button>
          <button
            onClick={() => setActiveTab('blog')}
            className="px-6 py-3 rounded transition-all"
            style={{
              background: activeTab === 'blog' ? '#00ff00' : 'transparent',
              border: '2px solid #00ff00',
              color: activeTab === 'blog' ? '#000' : '#00ff00',
            }}
          >
            Blog Posts
          </button>
        </div>

        {activeTab === 'projects' && (
          <div>
            <button
              onClick={handleAddProject}
              className="flex items-center gap-2 px-6 py-3 rounded mb-6 transition-all hover:scale-105"
              style={{
                background: '#00ff00',
                color: '#000',
                fontWeight: '600',
              }}
            >
              <Plus size={20} />
              <span>Add Project</span>
            </button>

            <div className="grid grid-cols-1 gap-6">
              {projects.map((project) => (
                <div
                  key={project.id}
                  className="p-6 rounded-lg"
                  style={{
                    background: 'rgba(10, 10, 10, 0.8)',
                    border: '2px solid #ff0000',
                  }}
                >
                  {editingProject?.id === project.id ? (
                    <div className="space-y-4">
                      <input
                        type="text"
                        value={editingProject.title}
                        onChange={(e) =>
                          setEditingProject({ ...editingProject, title: e.target.value })
                        }
                        className="w-full px-4 py-2 rounded"
                        style={{
                          background: 'rgba(0, 0, 0, 0.5)',
                          border: '1px solid #00ff00',
                          color: '#00ff00',
                        }}
                      />
                      <textarea
                        value={editingProject.description}
                        onChange={(e) =>
                          setEditingProject({ ...editingProject, description: e.target.value })
                        }
                        className="w-full px-4 py-2 rounded"
                        rows={3}
                        style={{
                          background: 'rgba(0, 0, 0, 0.5)',
                          border: '1px solid #00ff00',
                          color: '#00ff00',
                        }}
                      />
                      <input
                        type="text"
                        value={editingProject.image}
                        onChange={(e) =>
                          setEditingProject({ ...editingProject, image: e.target.value })
                        }
                        placeholder="Image URL"
                        className="w-full px-4 py-2 rounded"
                        style={{
                          background: 'rgba(0, 0, 0, 0.5)',
                          border: '1px solid #00ff00',
                          color: '#00ff00',
                        }}
                      />
                      <div className="flex gap-2">
                        <button
                          onClick={handleSaveProject}
                          className="flex items-center gap-2 px-4 py-2 rounded"
                          style={{ background: '#00ff00', color: '#000' }}
                        >
                          <Save size={16} />
                          Save
                        </button>
                        <button
                          onClick={() => setEditingProject(null)}
                          className="flex items-center gap-2 px-4 py-2 rounded"
                          style={{ background: '#ff0000', color: '#000' }}
                        >
                          <X size={16} />
                          Cancel
                        </button>
                      </div>
                    </div>
                  ) : (
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 style={{ color: '#ff0000', fontSize: '1.5rem', marginBottom: '0.5rem' }}>
                          {project.title}
                        </h3>
                        <p style={{ color: '#00ff00' }}>{project.description}</p>
                      </div>
                      <div className="flex gap-2">
                        <button
                          onClick={() => setEditingProject(project)}
                          className="p-2 rounded"
                          style={{ border: '1px solid #00ff00', color: '#00ff00' }}
                        >
                          <Edit2 size={16} />
                        </button>
                        <button
                          onClick={() => handleDeleteProject(project.id)}
                          className="p-2 rounded"
                          style={{ border: '1px solid #ff0000', color: '#ff0000' }}
                        >
                          <Trash2 size={16} />
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'blog' && (
          <div>
            <button
              onClick={handleAddPost}
              className="flex items-center gap-2 px-6 py-3 rounded mb-6 transition-all hover:scale-105"
              style={{
                background: '#00ff00',
                color: '#000',
                fontWeight: '600',
              }}
            >
              <Plus size={20} />
              <span>Add Blog Post</span>
            </button>

            <div className="grid grid-cols-1 gap-6">
              {posts.map((post) => (
                <div
                  key={post.id}
                  className="p-6 rounded-lg"
                  style={{
                    background: 'rgba(10, 10, 10, 0.8)',
                    border: '2px solid #00ff00',
                  }}
                >
                  {editingPost?.id === post.id ? (
                    <div className="space-y-4">
                      <input
                        type="text"
                        value={editingPost.title}
                        onChange={(e) => setEditingPost({ ...editingPost, title: e.target.value })}
                        className="w-full px-4 py-2 rounded"
                        style={{
                          background: 'rgba(0, 0, 0, 0.5)',
                          border: '1px solid #00ff00',
                          color: '#00ff00',
                        }}
                      />
                      <textarea
                        value={editingPost.description}
                        onChange={(e) =>
                          setEditingPost({ ...editingPost, description: e.target.value })
                        }
                        className="w-full px-4 py-2 rounded"
                        rows={3}
                        style={{
                          background: 'rgba(0, 0, 0, 0.5)',
                          border: '1px solid #00ff00',
                          color: '#00ff00',
                        }}
                      />
                      <input
                        type="text"
                        value={editingPost.image}
                        onChange={(e) => setEditingPost({ ...editingPost, image: e.target.value })}
                        placeholder="Image URL"
                        className="w-full px-4 py-2 rounded"
                        style={{
                          background: 'rgba(0, 0, 0, 0.5)',
                          border: '1px solid #00ff00',
                          color: '#00ff00',
                        }}
                      />
                      <div className="flex gap-2">
                        <button
                          onClick={handleSavePost}
                          className="flex items-center gap-2 px-4 py-2 rounded"
                          style={{ background: '#00ff00', color: '#000' }}
                        >
                          <Save size={16} />
                          Save
                        </button>
                        <button
                          onClick={() => setEditingPost(null)}
                          className="flex items-center gap-2 px-4 py-2 rounded"
                          style={{ background: '#ff0000', color: '#000' }}
                        >
                          <X size={16} />
                          Cancel
                        </button>
                      </div>
                    </div>
                  ) : (
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 style={{ color: '#00ff00', fontSize: '1.5rem', marginBottom: '0.5rem' }}>
                          {post.title}
                        </h3>
                        <p style={{ color: '#888888' }}>{post.description}</p>
                        <p style={{ color: '#00ffff', marginTop: '0.5rem' }}>{post.date}</p>
                      </div>
                      <div className="flex gap-2">
                        <button
                          onClick={() => setEditingPost(post)}
                          className="p-2 rounded"
                          style={{ border: '1px solid #00ff00', color: '#00ff00' }}
                        >
                          <Edit2 size={16} />
                        </button>
                        <button
                          onClick={() => handleDeletePost(post.id)}
                          className="p-2 rounded"
                          style={{ border: '1px solid #ff0000', color: '#ff0000' }}
                        >
                          <Trash2 size={16} />
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
