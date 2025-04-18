'use client'; // Add this directive

import React, { useState, useEffect } from 'react';

const SignupPopup: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hasSeenPopup, setHasSeenPopup] = useState(false);

  useEffect(() => {
    // Check if the user has seen the popup before (using localStorage)
    const seenPopup = localStorage.getItem('hasSeenSignupPopup');
    if (seenPopup) {
      setHasSeenPopup(true);
    } else {
      // Show the popup after a delay if they haven't seen it
      const timer = setTimeout(() => {
        setIsOpen(true);
      }, 5000); // Show after 5 seconds

      return () => clearTimeout(timer); // Clean up the timer
    }
  }, []);

  const closePopup = () => {
    setIsOpen(false);
    setHasSeenPopup(true);
    localStorage.setItem('hasSeenSignupPopup', 'true');
  };

  if (!isOpen || hasSeenPopup) {
    return null; // Don't render if not open or already seen
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white dark:bg-gray-800 text-gray-800 dark:text-white rounded-lg shadow-xl p-8 w-96 relative">
        <button
          onClick={closePopup}
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-700 dark:hover:text-gray-300"
          aria-label="Close popup"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <h3 className="text-2xl font-bold text-center mb-4">Join Now & Get £100 Bonus Credit!</h3>
        <p className="text-center text-gray-700 dark:text-gray-300 mb-6">Sign up today and receive a £100 bonus credit on your first order.</p>

        {/* Basic Sign-up Form Placeholder */}
        <div>
          <form>
            <div className="mb-4">
              <label htmlFor="popup-email" className="block text-sm font-bold mb-2">Email</label>
              <input type="email" id="popup-email" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
            </div>
            <div className="mb-6">
              <label htmlFor="popup-password" className="block text-sm font-bold mb-2">Password</label>
              <input type="password" id="popup-password" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" />
            </div>
            <div className="flex items-center justify-between">
              <button type="submit" className="bg-primary hover:bg-primary-light text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition-colors duration-200 w-full">
                Sign Up
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignupPopup;