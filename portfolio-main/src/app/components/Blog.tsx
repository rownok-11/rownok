import { motion } from 'motion/react';
import { Calendar, ArrowRight } from 'lucide-react';

interface BlogPost {
  id: number;
  title: string;
  description: string;
  image: string;
  date: string;
  content?: string;
}

interface BlogProps {
  posts: BlogPost[];
}

export function Blog({ posts }: BlogProps) {
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
            BLOG
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post, index) => (
              <motion.div
                key={post.id}
                className="rounded-lg overflow-hidden cursor-pointer"
                style={{
                  background: 'rgba(10, 10, 10, 0.8)',
                  border: '2px solid #00ff00',
                  boxShadow: '0 0 20px rgba(0, 255, 0, 0.3)',
                }}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{
                  scale: 1.05,
                  boxShadow: '0 0 30px rgba(0, 255, 0, 0.6)',
                }}
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3" style={{ color: '#00ffff' }}>
                    <Calendar size={16} />
                    <span className="text-sm">{post.date}</span>
                  </div>
                  <h3
                    className="mb-3"
                    style={{ color: '#00ff00', fontSize: '1.5rem', fontWeight: '600' }}
                  >
                    {post.title}
                  </h3>
                  <p className="mb-4" style={{ color: '#888888' }}>
                    {post.description}
                  </p>
                  <button
                    className="flex items-center gap-2 px-4 py-2 rounded transition-all"
                    style={{
                      border: '1px solid #ff0000',
                      color: '#ff0000',
                    }}
                  >
                    <span>Read More</span>
                    <ArrowRight size={16} />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
