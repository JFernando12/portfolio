'use client';

import { createContext, useContext, useEffect, useState, ReactNode } from 'react';

type Theme = 'light' | 'dark';

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [theme, setTheme] = useState<Theme>('dark');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    
    // Immediately apply dark mode to prevent flash
    const root = document.documentElement;
    root.classList.add('dark');
    
    // Check for saved theme preference or default to dark mode
    const savedTheme = localStorage.getItem('theme') as Theme;
    if (savedTheme && (savedTheme === 'light' || savedTheme === 'dark')) {
      setTheme(savedTheme);
      applyTheme(savedTheme);
    } else {
      // Default to dark mode and save it
      setTheme('dark');
      applyTheme('dark');
      localStorage.setItem('theme', 'dark');
    }
  }, []);

  const applyTheme = (newTheme: Theme) => {
    const root = document.documentElement;
    
    // Remove both classes first
    root.classList.remove('light', 'dark');
    
    // Add the new theme class
    root.classList.add(newTheme);
    
    // Force a repaint
    root.style.display = 'none';
    void root.offsetHeight; // Trigger reflow
    root.style.display = '';
    
    console.log(`Applied theme: ${newTheme}, HTML classes: ${root.className}`);
  };

  const toggleTheme = () => {
    if (!mounted) return;
    
    const newTheme: Theme = theme === 'dark' ? 'light' : 'dark';
    console.log(`Toggling theme from ${theme} to ${newTheme}`);
    
    setTheme(newTheme);
    applyTheme(newTheme);
    localStorage.setItem('theme', newTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
