'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Home, User, FileText, Briefcase, Image as ImageIcon, Mail, X, Menu, Moon, Sun } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const { theme, toggleTheme } = useTheme();
  
  const isDarkTheme = theme === 'dark';

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const handleNavClick = (section: string) => {
    setActiveSection(section);
    closeMenu();
  };

  return (
    <header className="fixed top-0 left-0 w-full bg-white dark:bg-slate-800 z-50 shadow-sm md:bottom-auto md:top-0">
      <nav className="container mx-auto h-12 flex items-center justify-between px-4 md:h-16 max-w-6xl">
        <Link href="#" className="text-gray-800 dark:text-white font-medium text-lg">
          Fernando Castrejon
        </Link>

        <div className={`nav__menu ${isMenuOpen ? 'show-menu' : ''} md:block`}>
          <ul className="grid grid-cols-3 gap-8 md:flex md:gap-8">
            <li>
              <Link
                href="#home"
                className={`flex flex-col md:flex-row items-center text-sm font-medium transition-colors hover:text-blue-500 ${
                  activeSection === 'home' ? 'text-blue-500' : 'text-gray-600 dark:text-gray-300'
                }`}
                onClick={() => handleNavClick('home')}
              >
                <Home className="w-5 h-5 mb-1 md:mb-0 md:mr-1" />
                Home
              </Link>
            </li>
            <li>
              <Link
                href="#about"
                className={`flex flex-col md:flex-row items-center text-sm font-medium transition-colors hover:text-blue-500 ${
                  activeSection === 'about' ? 'text-blue-500' : 'text-gray-600 dark:text-gray-300'
                }`}
                onClick={() => handleNavClick('about')}
              >
                <User className="w-5 h-5 mb-1 md:mb-0 md:mr-1" />
                About
              </Link>
            </li>
            <li>
              <Link
                href="#skills"
                className={`flex flex-col md:flex-row items-center text-sm font-medium transition-colors hover:text-blue-500 ${
                  activeSection === 'skills' ? 'text-blue-500' : 'text-gray-600 dark:text-gray-300'
                }`}
                onClick={() => handleNavClick('skills')}
              >
                <FileText className="w-5 h-5 mb-1 md:mb-0 md:mr-1" />
                Skills
              </Link>
            </li>
            <li>
              <Link
                href="#services"
                className={`flex flex-col md:flex-row items-center text-sm font-medium transition-colors hover:text-blue-500 ${
                  activeSection === 'services' ? 'text-blue-500' : 'text-gray-600 dark:text-gray-300'
                }`}
                onClick={() => handleNavClick('services')}
              >
                <Briefcase className="w-5 h-5 mb-1 md:mb-0 md:mr-1" />
                Services
              </Link>
            </li>
            <li>
              <Link
                href="#portfolio"
                className={`flex flex-col md:flex-row items-center text-sm font-medium transition-colors hover:text-blue-500 ${
                  activeSection === 'portfolio' ? 'text-blue-500' : 'text-gray-600 dark:text-gray-300'
                }`}
                onClick={() => handleNavClick('portfolio')}
              >
                <ImageIcon className="w-5 h-5 mb-1 md:mb-0 md:mr-1" />
                Portfolio
              </Link>
            </li>
            <li>
              <Link
                href="#contact"
                className={`flex flex-col md:flex-row items-center text-sm font-medium transition-colors hover:text-blue-500 ${
                  activeSection === 'contact' ? 'text-blue-500' : 'text-gray-600 dark:text-gray-300'
                }`}
                onClick={() => handleNavClick('contact')}
              >
                <Mail className="w-5 h-5 mb-1 md:mb-0 md:mr-1" />
                Contact Me
              </Link>
            </li>
          </ul>
          <X
            className="absolute top-4 right-6 text-2xl cursor-pointer text-gray-400 md:hidden"
            onClick={closeMenu}
          />
        </div>

        <div className="flex items-center">
          <button
            className="text-xl text-gray-600 dark:text-gray-300 mr-4 cursor-pointer transition-colors hover:text-blue-500 p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700"
            onClick={() => {
              console.log('Theme button clicked!');
              toggleTheme();
            }}
            type="button"
            aria-label="Toggle theme"
          >
            {isDarkTheme ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>
          <div className="md:hidden" onClick={toggleMenu}>
            <Menu className="w-6 h-6 text-gray-600 dark:text-gray-300 cursor-pointer" />
          </div>
        </div>
      </nav>
    </header>
  );
}
