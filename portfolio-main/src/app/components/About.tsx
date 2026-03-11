import { motion } from 'motion/react';
import { Shield, Code, Smartphone, Bug, Search, Lock } from 'lucide-react';

export function About() {
  const expertise = [
    { icon: Code, text: 'Web Design', color: '#ff0000' },
    { icon: Smartphone, text: 'Android Application Development', color: '#00ff00' },
    { icon: Shield, text: 'Web Application Penetration Testing', color: '#00ffff' },
    { icon: Lock, text: 'API Penetration Testing', color: '#ff0000' },
    { icon: Bug, text: 'Bug Bounty Hunting', color: '#00ff00' },
    { icon: Search, text: 'Cyber Security Research', color: '#00ffff' },
  ];

  return (
    <section className="min-h-screen flex items-center justify-center py-20 relative">
      <div className="container mx-auto px-4 z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <h2
            className="text-center mb-12"
            style={{
              fontSize: 'clamp(2rem, 5vw, 3.5rem)',
              color: '#ff0000',
              textShadow: '0 0 10px #ff0000',
            }}
          >
            ABOUT ME
          </h2>

          <motion.div
            className="p-8 rounded-lg mb-12"
            style={{
              background: 'rgba(10, 10, 10, 0.8)',
              border: '2px solid #ff0000',
              boxShadow: '0 0 20px rgba(255, 0, 0, 0.3)',
            }}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <p
              className="leading-relaxed text-center"
              style={{
                fontSize: 'clamp(1rem, 2vw, 1.25rem)',
                color: '#00ff00',
              }}
            >
              I am a passionate Ethical Hacker, Web Designer, and Android App Developer with expertise in
              identifying vulnerabilities and building secure digital solutions. My journey in cybersecurity
              has led me to specialize in Web Application Penetration Testing, API Security Testing, and Bug
              Bounty Hunting. I am committed to making the digital world safer through continuous research
              and responsible disclosure.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {expertise.map((item, index) => (
              <motion.div
                key={index}
                className="p-6 rounded-lg flex items-center gap-4"
                style={{
                  background: 'rgba(10, 10, 10, 0.8)',
                  border: `2px solid ${item.color}`,
                  boxShadow: `0 0 15px ${item.color}40`,
                }}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{
                  scale: 1.05,
                  boxShadow: `0 0 25px ${item.color}80`,
                }}
              >
                <item.icon size={32} style={{ color: item.color }} />
                <span style={{ color: item.color, fontWeight: '500' }}>{item.text}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
