'use client';

import { useState } from 'react';
import { ChevronDown, Code, Server, LucideIcon } from 'lucide-react';

interface Skill {
  id: string;
  title: string;
  subtitle: string;
  icon: LucideIcon;
  skills: string[];
}

export default function Skills() {
  const [openSkill, setOpenSkill] = useState<string | null>(null);

  const skillsData: Skill[] = [
    {
      id: 'backend',
      title: 'Backend developer',
      subtitle: 'More than 5 years',
      icon: Server,
      skills: [
        'Python',
        'FastAPI',
        'Node.js',
        'Express.js',
        'Typescript',
        'REST APIs',
        'RAG AI',
        'MySQL',
        'MongoDB',
        'PostgreSQL',
        'Docker',
        'AWS',
      ],
    },
    {
      id: 'frontend',
      title: 'Frontend developer',
      subtitle: 'More than 4 years',
      icon: Code,
      skills: ['JavaScript', 'React', 'Next.js', 'TypeScript', 'Tailwind CSS'],
    },
  ];

  const toggleSkill = (skillType: string) => {
    setOpenSkill(openSkill === skillType ? null : skillType);
  };

  return (
    <section
      className="py-16 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-slate-900 dark:to-slate-800"
      id="skills"
    >
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-4">
            Skills & Expertise
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {skillsData.map((skillCategory, categoryIndex) => {
            const IconComponent = skillCategory.icon;
            const isOpen = openSkill === skillCategory.id;

            return (
              <div
                key={skillCategory.id}
                className="group bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100 dark:border-slate-700"
                style={{
                  animationDelay: `${categoryIndex * 0.2}s`,
                  animation: 'fadeInUp 0.6s ease-out forwards',
                }}
              >
                <div
                  className="flex items-center mb-6 cursor-pointer select-none"
                  onClick={() => toggleSkill(skillCategory.id)}
                >
                  <div className="relative p-3 bg-blue-50 dark:bg-blue-900/20 rounded-xl mr-4 group-hover:bg-blue-100 dark:group-hover:bg-blue-900/40 transition-colors duration-300">
                    <IconComponent className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-1">
                      {skillCategory.title}
                    </h3>
                    <span className="text-sm text-gray-500 dark:text-gray-400 font-medium">
                      {skillCategory.subtitle}
                    </span>
                  </div>
                  <div
                    className={`transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
                  >
                    <ChevronDown className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                  </div>
                </div>

                <div
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${
                    isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-4">
                    {skillCategory.skills.map((skill, index) => (
                      <div
                        key={index}
                        className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 p-4 rounded-xl border border-blue-100 dark:border-blue-800/30 hover:border-blue-300 dark:hover:border-blue-600/50 transition-all duration-300 transform hover:scale-105 hover:shadow-md group/skill"
                        style={{
                          animationDelay: `${index * 0.1}s`,
                          animation: isOpen
                            ? 'fadeInScale 0.5s ease-out forwards'
                            : 'none',
                        }}
                      >
                        <div className="text-center">
                          <span className="text-sm font-medium text-gray-700 dark:text-gray-300 group-hover/skill:text-blue-600 dark:group-hover/skill:text-blue-400 transition-colors duration-200 block leading-tight">
                            {skill}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeInScale {
          from {
            opacity: 0;
            transform: scale(0.8) translateY(20px);
          }
          to {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }
      `}</style>
    </section>
  );
}
