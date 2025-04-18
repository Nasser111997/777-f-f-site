'use client'; // Add this directive

import React, { useState } from 'react';

const StickyRoiCalculator: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [investment, setInvestment] = useState<number>(100); // Default investment
  const potentialReturn = investment * 0.77; // Simple 77% calculation for now

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-secondary text-primary rounded-full p-4 shadow-lg hover:bg-yellow-400 transition-colors duration-200"
          aria-label="Open ROI Calculator"
        >
          💰 Live ROI
        </button>
      )}

      {isOpen && (
        <div className="bg-white dark:bg-gray-800 text-gray-800 dark:text-white rounded-lg shadow-xl p-6 w-80">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-xl font-bold">Live ROI Calculator</h3>
            <button
              onClick={() => setIsOpen(false)}
              className="text-gray-500 hover:text-gray-700 dark:hover:text-gray-300"
              aria-label="Close ROI Calculator"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <div className="mb-4">
            <label htmlFor="investment" className="block text-sm font-semibold mb-2">Your Investment (£):</label>
            <input
              type="number"
              id="investment"
              value={investment}
              onChange={(e) => setInvestment(parseFloat(e.target.value) || 0)}
              min="0"
              className="w-full p-2 border rounded-md bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>

          <div className="text-lg font-bold text-green-600 dark:text-green-400">
            Potential Return: £{potentialReturn.toFixed(2)}
          </div>
        </div>
      )}
    </div>
  );
};

export default StickyRoiCalculator;