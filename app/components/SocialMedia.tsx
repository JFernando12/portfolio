'use client';

import { ExternalLink } from 'lucide-react';
import { FaInstagram, FaYoutube, FaTiktok } from 'react-icons/fa';

export default function SocialMedia() {
  return (
    <section className="py-12 bg-gray-50 dark:bg-slate-800" id="social">
      <div className="container mx-auto px-4 max-w-6xl">
        <h2 className="text-center text-3xl md:text-4xl font-semibold text-gray-800 dark:text-white mb-2">
          Follow My Programming Content
        </h2>
        <span className="block text-center text-sm text-gray-600 dark:text-gray-400 mb-8">
          Tips, tutorials & courses across social platforms
        </span>

        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {/* Instagram */}
          <div className="bg-white dark:bg-slate-700 rounded-lg p-6 text-center hover:shadow-lg dark:hover:bg-slate-600 transition-all">
            <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center">
              <FaInstagram className="w-12 h-12 text-pink-500" />
            </div>
            <h3 className="text-lg font-medium text-gray-800 dark:text-white mb-2">Instagram</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">Programming tutorials & tips</p>
            <a 
              href="https://instagram.com/fernandocastrej" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center text-pink-500 hover:text-pink-400 transition-colors font-medium"
            >
              @fernandocastrej
              <ExternalLink className="ml-1 w-4 h-4" />
            </a>
          </div>

          {/* YouTube */}
          <div className="bg-white dark:bg-slate-700 rounded-lg p-6 text-center hover:shadow-lg dark:hover:bg-slate-600 transition-all">
            <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center">
              <FaYoutube className="w-12 h-12 text-red-500" />
            </div>
            <h3 className="text-lg font-medium text-gray-800 dark:text-white mb-2">YouTube</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">Full programming courses & tutorials</p>
            <a 
              href="https://youtube.com/@fernandocastrej" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center text-red-500 hover:text-red-400 transition-colors font-medium"
            >
              @fernandocastrej
              <ExternalLink className="ml-1 w-4 h-4" />
            </a>
          </div>

          {/* TikTok */}
          <div className="bg-white dark:bg-slate-700 rounded-lg p-6 text-center hover:shadow-lg dark:hover:bg-slate-600 transition-all">
            <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center">
              <FaTiktok className="w-12 h-12 text-gray-800 dark:text-white" />
            </div>
            <h3 className="text-lg font-medium text-gray-800 dark:text-white mb-2">TikTok</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">Quick programming tips & tricks</p>
            <a 
              href="https://tiktok.com/@fernandocastrej" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center text-gray-800 dark:text-white hover:text-blue-500 transition-colors font-medium"
            >
              @fernandocastrej
              <ExternalLink className="ml-1 w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
