'use client';

import { useState } from 'react';
import { ChevronDown, ChevronUp, Code, Server } from 'lucide-react';

export default function Skills() {
  const [openSkill, setOpenSkill] = useState<string | null>('frontend');

  const toggleSkill = (skillType: string) => {
    setOpenSkill(openSkill === skillType ? null : skillType);
  };

  return (
    <section className="py-12 bg-white dark:bg-slate-900" id="skills">
      <div className="container mx-auto px-4 max-w-6xl">
        <h2 className="text-center text-3xl md:text-4xl font-semibold text-gray-800 dark:text-white mb-2">
          Skills
        </h2>
        <span className="block text-center text-sm text-gray-600 dark:text-gray-400 mb-8">
          My technical level
        </span>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Frontend Skills */}
          <div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-sm">
            <div 
              className="flex items-center mb-6 cursor-pointer"
              onClick={() => toggleSkill('frontend')}
            >
              <Code className="w-8 h-8 text-blue-500 mr-3" />
              <div className="flex-1">
                <h3 className="text-lg font-medium text-gray-800 dark:text-white">Frontend developer</h3>
                <span className="text-sm text-gray-500 dark:text-gray-400">More than 4 years</span>
              </div>
              {openSkill === 'frontend' ? (
                <ChevronUp className="text-blue-500 text-xl" />
              ) : (
                <ChevronDown className="text-blue-500 text-xl" />
              )}
            </div>

            {openSkill === 'frontend' && (
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-700 dark:text-gray-300 font-medium">HTML</span>
                    <span className="text-sm text-gray-500">90%</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                    <div className="bg-blue-500 h-2 rounded-full" style={{width: '90%'}}></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-700 dark:text-gray-300 font-medium">CSS</span>
                    <span className="text-sm text-gray-500">80%</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                    <div className="bg-blue-500 h-2 rounded-full" style={{width: '80%'}}></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-700 dark:text-gray-300 font-medium">JavaScript</span>
                    <span className="text-sm text-gray-500">60%</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                    <div className="bg-blue-500 h-2 rounded-full" style={{width: '60%'}}></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-700 dark:text-gray-300 font-medium">React</span>
                    <span className="text-sm text-gray-500">85%</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                    <div className="bg-blue-500 h-2 rounded-full" style={{width: '85%'}}></div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Backend Skills */}
          <div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-sm">
            <div 
              className="flex items-center mb-6 cursor-pointer"
              onClick={() => toggleSkill('backend')}
            >
              <Server className="w-8 h-8 text-blue-500 mr-3" />
              <div className="flex-1">
                <h3 className="text-lg font-medium text-gray-800 dark:text-white">Backend developer</h3>
                <span className="text-sm text-gray-500 dark:text-gray-400">More than 2 years</span>
              </div>
              {openSkill === 'backend' ? (
                <ChevronUp className="text-blue-500 text-xl" />
              ) : (
                <ChevronDown className="text-blue-500 text-xl" />
              )}
            </div>

            {openSkill === 'backend' && (
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-700 dark:text-gray-300 font-medium">PHP</span>
                    <span className="text-sm text-gray-500">80%</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                    <div className="bg-blue-500 h-2 rounded-full" style={{width: '80%'}}></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-700 dark:text-gray-300 font-medium">Node.js</span>
                    <span className="text-sm text-gray-500">70%</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                    <div className="bg-blue-500 h-2 rounded-full" style={{width: '70%'}}></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-700 dark:text-gray-300 font-medium">Firebase</span>
                    <span className="text-sm text-gray-500">90%</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                    <div className="bg-blue-500 h-2 rounded-full" style={{width: '90%'}}></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-700 dark:text-gray-300 font-medium">Python</span>
                    <span className="text-sm text-gray-500">55%</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                    <div className="bg-blue-500 h-2 rounded-full" style={{width: '55%'}}></div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
