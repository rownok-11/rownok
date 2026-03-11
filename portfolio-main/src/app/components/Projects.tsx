import { motion } from 'motion/react';
import { ExternalLink, Github } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  image: string;
  liveUrl: string;
  githubUrl: string;
}

interface ProjectsProps {
  projects: Project[];
}

export function Projects({ projects }: ProjectsProps) {
  return (
    <section className="min-h-screen flex items-center justify-center py-20 relative">
      <div className="container mx-auto px-4 z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2
            className="text-center mb-16"
            style={{
              fontSize: 'clamp(2rem, 5vw, 3.5rem)',
              color: '#ff0000',
              textShadow: '0 0 10px #ff0000',
            }}
          >
            PROJECTS
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                className="rounded-lg overflow-hidden"
                style={{
                  background: 'rgba(10, 10, 10, 0.8)',
                  border: '2px solid #ff0000',
                  boxShadow: '0 0 20px rgba(255, 0, 0, 0.3)',
                }}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{
                  scale: 1.05,
                  boxShadow: '0 0 30px rgba(255, 0, 0, 0.6)',
                }}
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3
                    className="mb-3"
                    style={{ color: '#ff0000', fontSize: '1.5rem', fontWeight: '600' }}
                  >
                    {project.title}
                  </h3>
                  <p className="mb-4" style={{ color: '#00ff00' }}>
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 rounded text-sm"
                        style={{
                          background: 'rgba(0, 255, 0, 0.1)',
                          border: '1px solid #00ff00',
                          color: '#00ff00',
                        }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 rounded transition-all"
                      style={{
                        border: '1px solid #00ffff',
                        color: '#00ffff',
                      }}
                    >
                      <ExternalLink size={16} />
                      <span>Live Demo</span>
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 rounded transition-all"
                      style={{
                        border: '1px solid #00ff00',
                        color: '#00ff00',
                      }}
                    >
                      <Github size={16} />
                      <span>GitHub</span>
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
