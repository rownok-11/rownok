import { motion } from 'motion/react';
import { Mail, Instagram, Send } from 'lucide-react';
import { useState } from 'react';
import { toast } from 'sonner';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('Message sent successfully!');
    setFormData({ name: '', email: '', message: '' });
  };

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
            CONTACT
          </h2>

          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <div className="space-y-6">
                <div
                  className="p-6 rounded-lg"
                  style={{
                    background: 'rgba(10, 10, 10, 0.8)',
                    border: '2px solid #ff0000',
                    boxShadow: '0 0 20px rgba(255, 0, 0, 0.3)',
                  }}
                >
                  <div className="flex items-center gap-4">
                    <Mail size={32} style={{ color: '#ff0000' }} />
                    <div>
                      <h3 style={{ color: '#ff0000', fontWeight: '600', marginBottom: '0.5rem' }}>
                        Email
                      </h3>
                      <a
                        href="mailto:raisulislamrownok7@gmail.com"
                        style={{ color: '#00ff00' }}
                        className="hover:underline"
                      >
                        raisulislamrownok7@gmail.com
                      </a>
                    </div>
                  </div>
                </div>

                <div
                  className="p-6 rounded-lg"
                  style={{
                    background: 'rgba(10, 10, 10, 0.8)',
                    border: '2px solid #00ff00',
                    boxShadow: '0 0 20px rgba(0, 255, 0, 0.3)',
                  }}
                >
                  <div className="flex items-center gap-4">
                    <Instagram size={32} style={{ color: '#00ff00' }} />
                    <div>
                      <h3 style={{ color: '#00ff00', fontWeight: '600', marginBottom: '0.5rem' }}>
                        Instagram
                      </h3>
                      <a
                        href="https://www.instagram.com/ri_rownok?igsh=MXZ5Nmg5ZG8yN2tycQ=="
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ color: '#00ffff' }}
                        className="hover:underline"
                      >
                        @ri_rownok
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              <form
                onSubmit={handleSubmit}
                className="p-6 rounded-lg space-y-4"
                style={{
                  background: 'rgba(10, 10, 10, 0.8)',
                  border: '2px solid #00ffff',
                  boxShadow: '0 0 20px rgba(0, 255, 255, 0.3)',
                }}
              >
                <div>
                  <label style={{ color: '#00ffff', display: 'block', marginBottom: '0.5rem' }}>
                    Name
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded"
                    style={{
                      background: 'rgba(0, 0, 0, 0.5)',
                      border: '1px solid #00ffff',
                      color: '#00ff00',
                      outline: 'none',
                    }}
                  />
                </div>
                <div>
                  <label style={{ color: '#00ffff', display: 'block', marginBottom: '0.5rem' }}>
                    Email
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded"
                    style={{
                      background: 'rgba(0, 0, 0, 0.5)',
                      border: '1px solid #00ffff',
                      color: '#00ff00',
                      outline: 'none',
                    }}
                  />
                </div>
                <div>
                  <label style={{ color: '#00ffff', display: 'block', marginBottom: '0.5rem' }}>
                    Message
                  </label>
                  <textarea
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded resize-none"
                    style={{
                      background: 'rgba(0, 0, 0, 0.5)',
                      border: '1px solid #00ffff',
                      color: '#00ff00',
                      outline: 'none',
                    }}
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-3 rounded flex items-center justify-center gap-2 transition-all hover:scale-105"
                  style={{
                    background: '#ff0000',
                    color: '#000',
                    fontWeight: '600',
                    boxShadow: '0 0 20px rgba(255, 0, 0, 0.5)',
                  }}
                >
                  <Send size={20} />
                  <span>Send Message</span>
                </button>
              </form>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
