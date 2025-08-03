'use client';

import { useState } from 'react';
import { ArrowRight, X, Check, Code, Palette, Zap } from 'lucide-react';

export default function Services() {
  const [activeModal, setActiveModal] = useState<number | null>(null);

  const openModal = (modalIndex: number) => {
    setActiveModal(modalIndex);
  };

  const closeModal = () => {
    setActiveModal(null);
  };

  return (
    <section className="py-12 bg-gray-50 dark:bg-slate-800" id="services">
      <div className="container mx-auto px-4 max-w-6xl">
        <h2 className="text-center text-3xl md:text-4xl font-semibold text-gray-800 dark:text-white mb-2">
          Services
        </h2>
        <span className="block text-center text-sm text-gray-600 dark:text-gray-400 mb-8">
          What I offer
        </span>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Web Development */}
          <div className="bg-white dark:bg-slate-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6 text-center transition-all hover:shadow-lg">
            <div className="mb-6">
              <Code className="w-12 h-12 text-blue-500 mx-auto mb-4" />
              <h3 className="text-xl font-medium text-gray-800 dark:text-white mb-4">
                Web Page <br /> Development
              </h3>
            </div>
            <button 
              className="inline-flex items-center text-blue-500 cursor-pointer transition-colors hover:text-blue-600"
              onClick={() => openModal(0)}
            >
              View More
              <ArrowRight className="ml-1 w-4 h-4" />
            </button>
          </div>

          {/* Web Design */}
          <div className="bg-white dark:bg-slate-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6 text-center transition-all hover:shadow-lg">
            <div className="mb-6">
              <Palette className="w-12 h-12 text-blue-500 mx-auto mb-4" />
              <h3 className="text-xl font-medium text-gray-800 dark:text-white mb-4">
                Web Page <br /> Design
              </h3>
            </div>
            <button 
              className="inline-flex items-center text-blue-500 cursor-pointer transition-colors hover:text-blue-600"
              onClick={() => openModal(1)}
            >
              View More
              <ArrowRight className="ml-1 w-4 h-4" />
            </button>
          </div>

          {/* Process Automation */}
          <div className="bg-white dark:bg-slate-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6 text-center transition-all hover:shadow-lg">
            <div className="mb-6">
              <Zap className="w-12 h-12 text-blue-500 mx-auto mb-4" />
              <h3 className="text-xl font-medium text-gray-800 dark:text-white mb-4">
                Process <br /> Automation
              </h3>
            </div>
            <button 
              className="inline-flex items-center text-blue-500 cursor-pointer transition-colors hover:text-blue-600"
              onClick={() => openModal(2)}
            >
              View More
              <ArrowRight className="ml-1 w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Modals */}
        {activeModal !== null && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white dark:bg-slate-800 p-8 rounded-lg max-w-md w-full relative">
              <h4 className="text-xl font-medium text-gray-800 dark:text-white mb-4">
                {activeModal === 0 && 'Web Page Development'}
                {activeModal === 1 && 'Web Page Design'}
                {activeModal === 2 && 'Process Automation'}
              </h4>
              <p className="text-sm text-gray-600 dark:text-gray-300 mb-6">
                {activeModal === 0 && 'Professional web development services with modern technologies. Get your business online with a fast, secure, and responsive website.'}
                {activeModal === 1 && 'Creative and user-friendly web design that converts visitors into customers. Beautiful designs that reflect your brand identity.'}
                {activeModal === 2 && 'Streamline your business operations with custom automation solutions. Save time and reduce errors with automated workflows.'}
              </p>
              
              <ul className="space-y-3">
                {activeModal === 0 && (
                  <>
                    <li className="flex items-start">
                      <Check className="w-4 h-4 text-blue-500 mr-2 mt-1 flex-shrink-0" />
                      <p className="text-sm text-gray-600 dark:text-gray-300">Custom website development</p>
                    </li>
                    <li className="flex items-start">
                      <Check className="w-4 h-4 text-blue-500 mr-2 mt-1 flex-shrink-0" />
                      <p className="text-sm text-gray-600 dark:text-gray-300">Responsive design for all devices</p>
                    </li>
                    <li className="flex items-start">
                      <Check className="w-4 h-4 text-blue-500 mr-2 mt-1 flex-shrink-0" />
                      <p className="text-sm text-gray-600 dark:text-gray-300">SEO optimization included</p>
                    </li>
                    <li className="flex items-start">
                      <Check className="w-4 h-4 text-blue-500 mr-2 mt-1 flex-shrink-0" />
                      <p className="text-sm text-gray-600 dark:text-gray-300">Fast loading and secure</p>
                    </li>
                  </>
                )}
                {activeModal === 1 && (
                  <>
                    <li className="flex items-start">
                      <Check className="w-4 h-4 text-blue-500 mr-2 mt-1 flex-shrink-0" />
                      <p className="text-sm text-gray-600 dark:text-gray-300">Modern and attractive design</p>
                    </li>
                    <li className="flex items-start">
                      <Check className="w-4 h-4 text-blue-500 mr-2 mt-1 flex-shrink-0" />
                      <p className="text-sm text-gray-600 dark:text-gray-300">User experience optimization</p>
                    </li>
                    <li className="flex items-start">
                      <Check className="w-4 h-4 text-blue-500 mr-2 mt-1 flex-shrink-0" />
                      <p className="text-sm text-gray-600 dark:text-gray-300">Brand identity integration</p>
                    </li>
                    <li className="flex items-start">
                      <Check className="w-4 h-4 text-blue-500 mr-2 mt-1 flex-shrink-0" />
                      <p className="text-sm text-gray-600 dark:text-gray-300">Conversion-focused design</p>
                    </li>
                  </>
                )}
                {activeModal === 2 && (
                  <>
                    <li className="flex items-start">
                      <Check className="w-4 h-4 text-blue-500 mr-2 mt-1 flex-shrink-0" />
                      <p className="text-sm text-gray-600 dark:text-gray-300">Custom automation solutions</p>
                    </li>
                    <li className="flex items-start">
                      <Check className="w-4 h-4 text-blue-500 mr-2 mt-1 flex-shrink-0" />
                      <p className="text-sm text-gray-600 dark:text-gray-300">Workflow optimization</p>
                    </li>
                    <li className="flex items-start">
                      <Check className="w-4 h-4 text-blue-500 mr-2 mt-1 flex-shrink-0" />
                      <p className="text-sm text-gray-600 dark:text-gray-300">Data processing automation</p>
                    </li>
                    <li className="flex items-start">
                      <Check className="w-4 h-4 text-blue-500 mr-2 mt-1 flex-shrink-0" />
                      <p className="text-sm text-gray-600 dark:text-gray-300">Integration with existing systems</p>
                    </li>
                  </>
                )}
              </ul>

              <X 
                className="absolute top-4 right-4 text-2xl text-blue-500 cursor-pointer hover:text-blue-600"
                onClick={closeModal}
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
