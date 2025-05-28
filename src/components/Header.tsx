import React from 'react';
import { Flag, Settings } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const Header: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  
  return (
    <header className={`py-4 px-6 shadow-md ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'}`}>
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <Flag className="h-8 w-8 text-[rgb(var(--f1-red))]" />
          <h1 className="text-2xl font-bold">F1 Race Predictor</h1>
        </div>
        
        <div className="flex items-center space-x-4">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
            aria-label="Toggle theme"
          >
            <Settings className="h-5 w-5" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;