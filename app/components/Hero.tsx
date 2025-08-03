'use client';

import Link from 'next/link';
import { Mail, MousePointer, ArrowDown } from 'lucide-react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

export default function Hero() {
  return (
    <section className="py-16 pt-32 md:pt-20 bg-white dark:bg-slate-900" id="home">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="order-2 md:order-1">
            <div className="flex gap-4 mb-8">
              <Link
                href="https://www.linkedin.com/in/fernando-castrej%C3%B3n-hdez-08520223b/"
                target="_blank"
                className="inline-flex justify-center items-center bg-blue-500 text-white text-xl rounded-md w-12 h-12 transition-all hover:bg-blue-600"
              >
                <FaLinkedin className="w-5 h-5" />
              </Link>
              <Link
                href="https://github.com/JFernando12/"
                target="_blank"
                className="inline-flex justify-center items-center bg-blue-500 text-white text-xl rounded-md w-12 h-12 transition-all hover:bg-blue-600"
              >
                <FaGithub className="w-5 h-5" />
              </Link>
            </div>
            
            <h1 className="text-3xl md:text-5xl font-semibold text-gray-800 dark:text-white mb-2">
              Hi, I&apos;m Fernando
            </h1>
            <h3 className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 font-medium mb-4">
              Software Developer
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-lg leading-relaxed">
              I specialize in backend development. From architecting scalable web services to optimizing performance, 
              I leverage AWS services to deliver robust solutions. My expertise lies in creating seamless backend 
              systems for exceptional user experiences.
            </p>
            <Link 
              href="#contact" 
              className="inline-flex items-center bg-blue-500 text-white px-6 py-3 rounded-lg font-medium transition-all hover:bg-blue-600"
            >
              Contact Me 
              <Mail className="ml-2 w-5 h-5" />
            </Link>
          </div>
          
          <div className="order-1 md:order-2 flex justify-center">
            <div className="relative">
              <svg
                className="w-64 h-64 md:w-80 md:h-80 fill-blue-500"
                viewBox="0 0 200 187"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  <mask id="mask0">
                    <path
                      fill="white"
                      d="M190.312 36.4879C206.582 62.1187 201.309 102.826 182.328 134.186C163.346 165.547 
                        130.807 187.559 100.226 186.353C69.6454 185.297 41.0228 161.023 21.7403 129.362C2.45775 
                        97.8511 -7.48481 59.1033 6.67581 34.5279C20.9871 10.1032 59.7028 -0.149132 97.9666 
                        0.00163737C136.23 0.303176 174.193 10.857 190.312 36.4879Z"
                    />
                  </mask>
                </defs>
                <g mask="url(#mask0)">
                  <path
                    d="M190.312 36.4879C206.582 62.1187 201.309 102.826 182.328 134.186C163.346 
                      165.547 130.807 187.559 100.226 186.353C69.6454 185.297 41.0228 161.023 21.7403 
                      129.362C2.45775 97.8511 -7.48481 59.1033 6.67581 34.5279C20.9871 10.1032 59.7028 
                      -0.149132 97.9666 0.00163737C136.23 0.303176 174.193 10.857 190.312 36.4879Z"
                  />
                  <image
                    x="12"
                    y="18"
                    href="/perfil.png"
                    width="170"
                    height="170"
                  />
                </g>
              </svg>
            </div>
          </div>
        </div>
        
        <div className="hidden md:flex justify-center mt-12">
          <Link 
            href="#about" 
            className="flex items-center text-blue-500 font-medium hover:transform hover:translate-y-1 transition-transform"
          >
            <MousePointer className="text-2xl mr-2" />
            <span className="text-sm mr-2">Scroll down</span>
            <ArrowDown className="text-xl" />
          </Link>
        </div>
      </div>
    </section>
  );
}
