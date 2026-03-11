import { motion } from 'motion/react';
import { useState } from 'react';
import { Lock, User } from 'lucide-react';
import { toast } from 'sonner';

interface AdminLoginProps {
  onLogin: (username: string, password: string) => void;
}

export function AdminLogin({ onLogin }: AdminLoginProps) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onLogin(username, password);
  };

  return (
    <div className="min-h-screen flex items-center justify-center relative">
      <div className="container mx-auto px-4 z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="max-w-md mx-auto"
        >
          <div
            className="p-8 rounded-lg"
            style={{
              background: 'rgba(10, 10, 10, 0.9)',
              border: '2px solid #ff0000',
              boxShadow: '0 0 30px rgba(255, 0, 0, 0.5)',
            }}
          >
            <h2
              className="text-center mb-8"
              style={{
                fontSize: '2.5rem',
                color: '#ff0000',
                textShadow: '0 0 10px #ff0000',
              }}
            >
              ADMIN LOGIN
            </h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  className="flex items-center gap-2 mb-2"
                  style={{ color: '#00ff00' }}
                >
                  <User size={20} />
                  <span>Username</span>
                </label>
                <input
                  type="text"
                  required
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="w-full px-4 py-3 rounded"
                  style={{
                    background: 'rgba(0, 0, 0, 0.5)',
                    border: '1px solid #00ff00',
                    color: '#00ff00',
                    outline: 'none',
                  }}
                />
              </div>

              <div>
                <label
                  className="flex items-center gap-2 mb-2"
                  style={{ color: '#00ff00' }}
                >
                  <Lock size={20} />
                  <span>Password</span>
                </label>
                <input
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-3 rounded"
                  style={{
                    background: 'rgba(0, 0, 0, 0.5)',
                    border: '1px solid #00ff00',
                    color: '#00ff00',
                    outline: 'none',
                  }}
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 rounded transition-all hover:scale-105"
                style={{
                  background: '#ff0000',
                  color: '#000',
                  fontWeight: '600',
                  boxShadow: '0 0 20px rgba(255, 0, 0, 0.5)',
                }}
              >
                LOGIN
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
