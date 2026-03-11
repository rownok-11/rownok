import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Toaster } from 'sonner';
import { MatrixBackground } from './components/MatrixBackground';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Blog } from './components/Blog';
import { CyberThreatMap } from './components/CyberThreatMap';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ScrollToTop } from './components/ScrollToTop';
import { AdminLogin } from './components/AdminLogin';
import { AdminDashboard } from './components/AdminDashboard';
import { validateCredentials } from './utils/auth';
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

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [projects, setProjects] = useState<Project[]>([
    {
      id: 1,
      title: 'Security Scanner Tool',
      description: 'Advanced web application security scanner with vulnerability detection',
      technologies: ['Python', 'Flask', 'SQLMap'],
      image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=400&h=300&fit=crop',
      liveUrl: '#',
      githubUrl: '#',
    },
    {
      id: 2,
      title: 'Bug Bounty Platform',
      description: 'Full-stack platform for bug bounty hunters to track and report vulnerabilities',
      technologies: ['React', 'Node.js', 'MongoDB'],
      image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=400&h=300&fit=crop',
      liveUrl: '#',
      githubUrl: '#',
    },
    {
      id: 3,
      title: 'Android Security App',
      description: 'Mobile application for security analysis and penetration testing',
      technologies: ['Java', 'Android SDK', 'Security APIs'],
      image: 'https://images.unsplash.com/photo-1607252650355-f7fd0460ccdb?w=400&h=300&fit=crop',
      liveUrl: '#',
      githubUrl: '#',
    },
  ]);

  const [posts, setPosts] = useState<BlogPost[]>([
    {
      id: 1,
      title: 'Understanding SQL Injection Attacks',
      description: 'Deep dive into SQL injection vulnerabilities and how to prevent them',
      image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=400&h=300&fit=crop',
      date: 'March 10, 2026',
    },
    {
      id: 2,
      title: 'XSS Attack Prevention Guide',
      description: 'Complete guide to Cross-Site Scripting attacks and mitigation strategies',
      image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=400&h=300&fit=crop',
      date: 'March 8, 2026',
    },
    {
      id: 3,
      title: 'API Security Best Practices',
      description: 'Essential security practices for building secure REST APIs',
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&h=300&fit=crop',
      date: 'March 5, 2026',
    },
  ]);

  useEffect(() => {
    const savedProjects = localStorage.getItem('projects');
    const savedPosts = localStorage.getItem('posts');
    const authStatus = sessionStorage.getItem('isAuthenticated');

    if (savedProjects) setProjects(JSON.parse(savedProjects));
    if (savedPosts) setPosts(JSON.parse(savedPosts));
    if (authStatus === 'true') setIsAuthenticated(true);
  }, []);

  const handleLogin = (username: string, password: string) => {
    if (validateCredentials(username, password)) {
      setIsAuthenticated(true);
      sessionStorage.setItem('isAuthenticated', 'true');
      toast.success('Login successful!');
    } else {
      toast.error('Invalid credentials!');
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    sessionStorage.removeItem('isAuthenticated');
    toast.success('Logged out successfully!');
  };

  const handleUpdateProjects = (newProjects: Project[]) => {
    setProjects(newProjects);
    localStorage.setItem('projects', JSON.stringify(newProjects));
  };

  const handleUpdatePosts = (newPosts: BlogPost[]) => {
    setPosts(newPosts);
    localStorage.setItem('posts', JSON.stringify(newPosts));
  };

  return (
    <Router>
      <div className="relative min-h-screen" style={{ background: '#000000' }}>
        <MatrixBackground />
        <ScrollToTop />
        <Toaster
          position="top-right"
          toastOptions={{
            style: {
              background: 'rgba(0, 0, 0, 0.9)',
              border: '1px solid #ff0000',
              color: '#00ff00',
            },
          }}
        />

        <Routes>
          <Route
            path="/"
            element={
              <>
                <Navigation />
                <div id="home">
                  <Hero />
                </div>
                <div id="about">
                  <About />
                </div>
                <div id="skills">
                  <Skills />
                </div>
                <div id="projects">
                  <Projects projects={projects} />
                </div>
                <div id="blog">
                  <Blog posts={posts} />
                </div>
                <div id="threat-map">
                  <CyberThreatMap />
                </div>
                <div id="contact">
                  <Contact />
                </div>
                <Footer />
              </>
            }
          />

          <Route
            path="/admin"
            element={
              isAuthenticated ? (
                <AdminDashboard
                  projects={projects}
                  posts={posts}
                  onUpdateProjects={handleUpdateProjects}
                  onUpdatePosts={handleUpdatePosts}
                  onLogout={handleLogout}
                />
              ) : (
                <AdminLogin onLogin={handleLogin} />
              )
            }
          />

          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </Router>
  );
}