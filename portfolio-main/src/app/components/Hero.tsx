import { motion } from 'motion/react';
import { Instagram, Mail } from 'lucide-react';
import { TypingText } from './TypingText';

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="container mx-auto px-4 z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center"
        >
          <motion.h1
            className="mb-6 glitch-text"
            style={{
              fontSize: 'clamp(2.5rem, 8vw, 6rem)',
              fontWeight: 'bold',
              color: '#ff0000',
              textShadow: '0 0 10px #ff0000, 0 0 20px #ff0000, 0 0 30px #ff0000',
            }}
            initial={{ scale: 0.5 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.8, type: 'spring' }}
          >
            RAISUL ISLAM ROWNOK
          </motion.h1>

          <motion.div
            className="mb-8"
            style={{
              fontSize: 'clamp(1.2rem, 3vw, 2rem)',
              color: '#00ff00',
              textShadow: '0 0 5px #00ff00',
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            <TypingText
              texts={[
                'Ethical Hacker',
                'Web Designer',
                'Android App Developer',
                'Bug Hunter',
                'Security Researcher',
              ]}
            />
          </motion.div>

          <motion.div
            className="flex gap-6 justify-center items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
          >
            <a
              href="https://www.instagram.com/ri_rownok?igsh=MXZ5Nmg5ZG8yN2tycQ=="
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 border-2 rounded-lg transition-all hover:scale-110"
              style={{
                borderColor: '#ff0000',
                color: '#ff0000',
                boxShadow: '0 0 10px #ff0000',
              }}
            >
              <Instagram size={24} />
              <span>Instagram</span>
            </a>

            <a
              href="mailto:raisulislamrownok7@gmail.com"
              className="flex items-center gap-2 px-6 py-3 border-2 rounded-lg transition-all hover:scale-110"
              style={{
                borderColor: '#00ff00',
                color: '#00ff00',
                boxShadow: '0 0 10px #00ff00',
              }}
            >
              <Mail size={24} />
              <span>Email</span>
            </a>
          </motion.div>
        </motion.div>
      </div>

      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full"
            style={{
              background: i % 2 === 0 ? '#ff0000' : '#00ff00',
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              boxShadow: `0 0 10px ${i % 2 === 0 ? '#ff0000' : '#00ff00'}`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.2, 1, 0.2],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>
    </section>
  );
}
