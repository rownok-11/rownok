import { motion } from 'motion/react';
import { Globe, Shield, AlertTriangle } from 'lucide-react';

export function CyberThreatMap() {
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
            className="text-center mb-8"
            style={{
              fontSize: 'clamp(2rem, 5vw, 3.5rem)',
              color: '#ff0000',
              textShadow: '0 0 10px #ff0000',
              fontWeight: 'bold',
            }}
          >
            REAL-TIME CYBER THREAT MAP
          </h2>

          <p
            className="text-center mb-12 max-w-3xl mx-auto"
            style={{
              color: '#00ff00',
              fontSize: 'clamp(1rem, 2vw, 1.25rem)',
            }}
          >
            Live visualization of global cyber attacks happening right now around the world
          </p>

          <div
            className="relative rounded-lg overflow-hidden mx-auto"
            style={{
              maxWidth: '1400px',
              height: 'clamp(400px, 70vh, 800px)',
              background: 'rgba(10, 10, 10, 0.9)',
              border: '2px solid #ff0000',
              boxShadow: '0 0 30px rgba(255, 0, 0, 0.5)',
            }}
          >
            <iframe
              src="https://cybermap.kaspersky.com/en/widget/dynamic/dark"
              title="Kaspersky Cyberthreat Real-time Map"
              className="w-full h-full"
              style={{
                border: 'none',
                display: 'block',
              }}
              allowFullScreen
            />

            <div
              className="absolute top-4 left-4 right-4 flex flex-wrap gap-4 pointer-events-none"
              style={{
                zIndex: 10,
              }}
            >
              <div
                className="px-4 py-2 rounded flex items-center gap-2"
                style={{
                  background: 'rgba(0, 0, 0, 0.8)',
                  border: '1px solid #ff0000',
                  boxShadow: '0 0 10px rgba(255, 0, 0, 0.3)',
                }}
              >
                <Globe size={20} style={{ color: '#ff0000' }} />
                <span style={{ color: '#00ff00', fontWeight: 'bold' }}>LIVE DATA</span>
              </div>
              <div
                className="px-4 py-2 rounded flex items-center gap-2"
                style={{
                  background: 'rgba(0, 0, 0, 0.8)',
                  border: '1px solid #00ff00',
                  boxShadow: '0 0 10px rgba(0, 255, 0, 0.3)',
                }}
              >
                <Shield size={20} style={{ color: '#00ff00' }} />
                <span style={{ color: '#00ffff', fontWeight: 'bold' }}>KASPERSKY</span>
              </div>
            </div>
          </div>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <motion.div
              className="p-6 rounded-lg text-center"
              style={{
                background: 'rgba(10, 10, 10, 0.8)',
                border: '2px solid #ff0000',
                boxShadow: '0 0 20px rgba(255, 0, 0, 0.3)',
              }}
              whileHover={{ scale: 1.05 }}
            >
              <AlertTriangle size={40} style={{ color: '#ff0000', margin: '0 auto 1rem' }} />
              <h3 style={{ color: '#ff0000', fontWeight: 'bold', marginBottom: '0.5rem' }}>
                DDoS Attacks
              </h3>
              <p style={{ color: '#00ff00', fontSize: '0.875rem' }}>
                Distributed denial of service attacks visualized in real-time
              </p>
            </motion.div>

            <motion.div
              className="p-6 rounded-lg text-center"
              style={{
                background: 'rgba(10, 10, 10, 0.8)',
                border: '2px solid #00ff00',
                boxShadow: '0 0 20px rgba(0, 255, 0, 0.3)',
              }}
              whileHover={{ scale: 1.05 }}
            >
              <Shield size={40} style={{ color: '#00ff00', margin: '0 auto 1rem' }} />
              <h3 style={{ color: '#00ff00', fontWeight: 'bold', marginBottom: '0.5rem' }}>
                Malware Detection
              </h3>
              <p style={{ color: '#00ffff', fontSize: '0.875rem' }}>
                Global malware and virus distribution tracking
              </p>
            </motion.div>

            <motion.div
              className="p-6 rounded-lg text-center"
              style={{
                background: 'rgba(10, 10, 10, 0.8)',
                border: '2px solid #00ffff',
                boxShadow: '0 0 20px rgba(0, 255, 255, 0.3)',
              }}
              whileHover={{ scale: 1.05 }}
            >
              <Globe size={40} style={{ color: '#00ffff', margin: '0 auto 1rem' }} />
              <h3 style={{ color: '#00ffff', fontWeight: 'bold', marginBottom: '0.5rem' }}>
                Global Coverage
              </h3>
              <p style={{ color: '#00ff00', fontSize: '0.875rem' }}>
                Worldwide cyber threat monitoring and analysis
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
