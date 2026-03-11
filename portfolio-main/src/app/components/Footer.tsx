import { motion } from 'motion/react';
import { Github, Instagram, Mail, Shield } from 'lucide-react';

export function Footer() {
  return (
    <footer
      className="relative py-12 border-t"
      style={{
        borderColor: '#ff0000',
        background: 'rgba(0, 0, 0, 0.9)',
      }}
    >
      <div className="container mx-auto px-4 z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-2 mb-4">
              <Shield size={32} style={{ color: '#ff0000' }} />
              <h3
                style={{
                  fontSize: '1.5rem',
                  color: '#ff0000',
                  fontWeight: 'bold',
                }}
              >
                RIR
              </h3>
            </div>
            <p style={{ color: '#00ff00', lineHeight: '1.6' }}>
              Ethical Hacker | Web Designer | Android App Developer | Bug Hunter
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h3
              className="mb-4"
              style={{
                fontSize: '1.25rem',
                color: '#00ff00',
                fontWeight: 'bold',
              }}
            >
              Quick Links
            </h3>
            <div className="space-y-2">
              {['About', 'Skills', 'Projects', 'Blog', 'Contact'].map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  className="block transition-all"
                  style={{ color: '#888888' }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = '#00ff00';
                    e.currentTarget.style.textShadow = '0 0 10px #00ff00';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = '#888888';
                    e.currentTarget.style.textShadow = 'none';
                  }}
                >
                  {link}
                </a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <h3
              className="mb-4"
              style={{
                fontSize: '1.25rem',
                color: '#00ff00',
                fontWeight: 'bold',
              }}
            >
              Connect With Me
            </h3>
            <div className="flex gap-4">
              <a
                href="mailto:raisulislamrownok7@gmail.com"
                className="p-3 rounded-lg transition-all hover:scale-110"
                style={{
                  border: '2px solid #ff0000',
                  color: '#ff0000',
                  boxShadow: '0 0 10px rgba(255, 0, 0, 0.3)',
                }}
              >
                <Mail size={24} />
              </a>
              <a
                href="https://www.instagram.com/ri_rownok?igsh=MXZ5Nmg5ZG8yN2tycQ=="
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-lg transition-all hover:scale-110"
                style={{
                  border: '2px solid #00ff00',
                  color: '#00ff00',
                  boxShadow: '0 0 10px rgba(0, 255, 0, 0.3)',
                }}
              >
                <Instagram size={24} />
              </a>
            </div>
          </motion.div>
        </div>

        <div
          className="pt-8 border-t text-center"
          style={{
            borderColor: 'rgba(255, 0, 0, 0.3)',
          }}
        >
          <p style={{ color: '#888888' }}>
            &copy; {new Date().getFullYear()} Raisul Islam Rownok. All rights reserved.
          </p>
          <p style={{ color: '#00ffff', marginTop: '0.5rem', fontSize: '0.875rem' }}>
            Built with React, TypeScript & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}
