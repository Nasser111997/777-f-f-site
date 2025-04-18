'use client'; // Add this directive

import React from 'react';
import { useTheme } from '@/lib/ThemeContext'; // Import useTheme hook

const DarkModeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-md bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors duration-200"
      aria-label="Toggle dark mode"
    >
      {theme === 'light' ? '🌙' : '☀️'} {/* Simple icon representation */}
    </button>
  );
};

export default DarkModeToggle;