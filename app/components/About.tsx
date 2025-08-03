import Image from 'next/image';
import Link from 'next/link';
import { Download } from 'lucide-react';

export default function About() {
  return (
    <section className="py-12 bg-gray-50 dark:bg-slate-800" id="about">
      <div className="container mx-auto px-4 max-w-6xl">
        <h2 className="text-center text-3xl md:text-4xl font-semibold text-gray-800 dark:text-white mb-2">
          About Me
        </h2>
        <span className="block text-center text-sm text-gray-600 dark:text-gray-400 mb-8">
          My introduction
        </span>
        
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <div className="flex justify-center">
            <Image 
              src="/about.png" 
              alt="About Fernando" 
              className="rounded-lg max-w-sm w-full"
              width={350}
              height={350}
            />
          </div>

          <div>
            <p className="text-gray-600 dark:text-gray-300 mb-8 leading-7">
              Experienced Backend developer with over 3 years of professional experience in web development. 
              Proficient in creating efficient backend systems and skilled in frontend development using React 
              and Next.js. Certified AWS Developer Associate with a strong dedication to delivering high-quality 
              software solutions.
            </p>
            
            <div className="grid grid-cols-3 gap-4 mb-8">
              <div className="text-center">
                <span className="block text-2xl font-semibold text-gray-800 dark:text-white">08+</span>
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  Years <br />
                  experience
                </span>
              </div>
              <div className="text-center">
                <span className="block text-2xl font-semibold text-gray-800 dark:text-white">20+</span>
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  Completed <br />
                  project
                </span>
              </div>
              <div className="text-center">
                <span className="block text-2xl font-semibold text-gray-800 dark:text-white">05+</span>
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  Companies <br />
                  worked
                </span>
              </div>
            </div>
            
            <div>
              <Link
                href="https://s3.amazonaws.com/fernandocastrejon.com/assets/pdf/Fernando-CV.pdf"
                target="_blank"
                className="inline-flex items-center bg-blue-500 text-white px-6 py-3 rounded-lg font-medium transition-all hover:bg-blue-600"
              >
                Download CV 
                <Download className="ml-2 w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
