import { motion } from 'motion/react';
import { useState, useEffect } from 'react';

export function Skills() {
  const skills = [
    { name: 'Web Development', level: 90, color: '#ff0000' },
    { name: 'Android Development', level: 85, color: '#00ff00' },
    { name: 'Ethical Hacking', level: 95, color: '#00ffff' },
    { name: 'Web Penetration Testing', level: 92, color: '#ff0000' },
    { name: 'API Security Testing', level: 88, color: '#00ff00' },
    { name: 'Bug Bounty Hunting', level: 90, color: '#00ffff' },
    { name: 'Cyber Security', level: 93, color: '#ff0000' },
  ];

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
            SKILLS
          </h2>

          <div className="max-w-4xl mx-auto space-y-8">
            {skills.map((skill, index) => (
              <SkillBar key={index} skill={skill} index={index} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function SkillBar({ skill, index }: { skill: { name: string; level: number; color: string }; index: number }) {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setWidth(skill.level);
    }, index * 100);
    return () => clearTimeout(timer);
  }, [skill.level, index]);

  return (
    <motion.div
      initial={{ opacity: 0, x: -100 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
    >
      <div className="flex justify-between mb-2">
        <span style={{ color: skill.color, fontWeight: '500', fontSize: '1.1rem' }}>
          {skill.name}
        </span>
        <span style={{ color: skill.color, fontWeight: '500' }}>{skill.level}%</span>
      </div>
      <div
        className="h-4 rounded-full overflow-hidden"
        style={{
          background: 'rgba(10, 10, 10, 0.8)',
          border: `1px solid ${skill.color}`,
        }}
      >
        <motion.div
          className="h-full rounded-full"
          style={{
            background: `linear-gradient(90deg, ${skill.color}00, ${skill.color})`,
            boxShadow: `0 0 10px ${skill.color}`,
            width: `${width}%`,
          }}
          initial={{ width: 0 }}
          animate={{ width: `${width}%` }}
          transition={{ duration: 1.5, ease: 'easeOut' }}
        />
      </div>
    </motion.div>
  );
}
