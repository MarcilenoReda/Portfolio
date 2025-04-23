import React from 'react';
import SectionTitle from '../ui/SectionTitle';
import { Code, Server, Database, Globe, Shield, Cpu } from 'lucide-react';

interface SkillCardProps {
  icon: React.ReactNode;
  title: string;
  skills: { name: string; experience: string }[];
  color: string;
}

const SkillCard: React.FC<SkillCardProps> = ({ icon, title, skills, color }) => {
  return (
    <div
      className="bg-[#1a1a1a] rounded-xl p-6 transition-all duration-300 hover:shadow-lg hover:shadow-[color]/10 hover:-translate-y-1"
      style={{ '--color': color } as React.CSSProperties}
    >
      <div className="inline-flex p-3 rounded-lg mb-4" style={{ backgroundColor: `${color}20` }}>
        <div style={{ color }}>{icon}</div>
      </div>
      <h3 className="text-xl font-semibold text-white mb-3">{title}</h3>
      <ul className="space-y-2">
        {skills.map((skill, index) => (
          <li key={index} className="flex justify-between items-center text-gray-300">
            <div className="flex items-center">
              <span
                className="w-1.5 h-1.5 rounded-full mr-2"
                style={{ backgroundColor: color }}
              ></span>
              <span>{skill.name}</span>
            </div>
            <span className="text-sm" style={{ color }}>{skill.experience}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

const SkillsSection: React.FC = () => {
  const skillsData = [
    {
      icon: <Code size={24} />,
      title: 'Frontend',
      skills: [
        { name: 'React', experience: '3+ years' },
        { name: 'Next.js', experience: '2+ years' },
        { name: 'TypeScript', experience: '3+ years' },
        { name: 'Tailwind CSS', experience: '2+ years' },
        { name: 'Redux', experience: '3+ years' }
      ],
      color: '#00ffcc'
    },
    {
      icon: <Server size={24} />,
      title: 'Backend',
      skills: [
        { name: 'Laravel', experience: '4+ years' },
        { name: 'PHP', experience: '5+ years' },
        { name: 'Node.js', experience: '3+ years' },
        { name: 'Express', experience: '3+ years' },
        { name: 'REST APIs', experience: '4+ years' }
      ],
      color: '#a855f7'
    },
    {
      icon: <Database size={24} />,
      title: 'Databases',
      skills: [
        { name: 'MySQL', experience: '5+ years' },
        { name: 'PostgreSQL', experience: '2+ years' },
        { name: 'MongoDB', experience: '3+ years' },
        { name: 'Redis', experience: '2+ years' },
        { name: 'Firebase', experience: '2+ years' }
      ],
      color: '#00bfff'
    },
    {
      icon: <Globe size={24} />,
      title: 'DevOps',
      skills: [
        { name: 'AWS', experience: '3+ years' },
        { name: 'Docker', experience: '3+ years' },
        { name: 'CI/CD', experience: '3+ years' },
        { name: 'Git', experience: '5+ years' },
        { name: 'Kubernetes', experience: '2+ years' }
      ],
      color: '#ff6b6b'
    },
    {
      icon: <Shield size={24} />,
      title: 'Security',
      skills: [
        { name: 'CEH', experience: 'Certified' },
        { name: 'CCNA', experience: 'Certified' },
        { name: 'OAuth', experience: '3+ years' },
        { name: 'JWT', experience: '3+ years' },
        { name: 'Penetration Testing', experience: '2+ years' }
      ],
      color: '#ffa116'
    },
    {
      icon: <Cpu size={24} />,
      title: 'Other',
      skills: [
        { name: 'System Design', experience: '3+ years' },
        { name: 'Performance Optimization', experience: '3+ years' },
        { name: 'Agile', experience: '4+ years' },
        { name: 'Scrum', experience: '4+ years' }
      ],
      color: '#ff85e4'
    }
  ];

  return (
    <section id="skills" className="py-20 bg-[#111]
 px-4">
      <div className="max-w-6xl mx-auto">
        <SectionTitle
          title="My Skills"
          subtitle="Technologies and frameworks I specialize in"
          className="text-center"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillsData.map((skill, index) => (
            <SkillCard
              key={index}
              icon={skill.icon}
              title={skill.title}
              skills={skill.skills}
              color={skill.color}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
