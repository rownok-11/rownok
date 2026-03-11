import { motion } from 'motion/react';
import { useState, useEffect } from 'react';
import { Menu, X, Shield } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Blog', href: '#blog' },
    { name: 'Threat Map', href: '#threat-map' },
    { name: 'Contact', href: '#contact' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled ? 'rgba(0, 0, 0, 0.9)' : 'transparent',
        borderBottom: scrolled ? '1px solid #ff0000' : 'none',
        backdropFilter: scrolled ? 'blur(10px)' : 'none',
      }}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <motion.div
            className="cursor-pointer"
            style={{
              fontSize: '1.5rem',
              fontWeight: 'bold',
              color: '#ff0000',
              textShadow: '0 0 10px #ff0000',
            }}
            whileHover={{ scale: 1.1 }}
          >
            RIR
          </motion.div>

          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <motion.button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="transition-all"
                style={{ color: '#00ff00' }}
                whileHover={{
                  color: '#ff0000',
                  textShadow: '0 0 10px #ff0000',
                }}
              >
                {item.name}
              </motion.button>
            ))}
            <motion.button
              onClick={() => navigate('/admin')}
              className="flex items-center gap-2 px-4 py-2 rounded"
              style={{
                background: '#ff0000',
                color: '#000',
                fontWeight: 'bold',
                boxShadow: '0 0 15px rgba(255, 0, 0, 0.5)',
              }}
              whileHover={{
                scale: 1.05,
                boxShadow: '0 0 25px rgba(255, 0, 0, 0.8)',
              }}
            >
              <Shield size={18} />
              <span>ADMIN</span>
            </motion.button>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2"
            style={{ color: '#ff0000' }}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <motion.div
          className="md:hidden"
          style={{
            background: 'rgba(0, 0, 0, 0.95)',
            borderTop: '1px solid #ff0000',
          }}
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
        >
          <div className="container mx-auto px-4 py-6 space-y-4">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="block w-full text-left py-2 transition-all"
                style={{ color: '#00ff00' }}
              >
                {item.name}
              </button>
            ))}
            <button
              onClick={() => {
                navigate('/admin');
                setIsOpen(false);
              }}
              className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded mt-4"
              style={{
                background: '#ff0000',
                color: '#000',
                fontWeight: 'bold',
                boxShadow: '0 0 15px rgba(255, 0, 0, 0.5)',
              }}
            >
              <Shield size={18} />
              <span>ADMIN LOGIN</span>
            </button>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
}
