import React from 'react';
import { useTheme } from '../context/ThemeContext';

const Footer: React.FC = () => {
  const { theme } = useTheme();
  
  return (
    <footer className={`py-6 ${theme === 'dark' ? 'bg-gray-800' : 'bg-gray-100'}`}>
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm">© {new Date().getFullYear()} F1 Race Predictor</p>
          <p className="text-sm mt-2 md:mt-0">
            This is a simulation and not affiliated with Formula 1®
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;