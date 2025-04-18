import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-primary text-white p-8 mt-12 shadow-inner dark:bg-gray-900"> {/* Increased top margin, added dark mode background */}
      <div className="container mx-auto text-center">
        {/* Footer Navigation/Links */}
        <div className="mb-6"> {/* Increased bottom margin */}
          <ul className="flex justify-center space-x-6 text-lg"> {/* Increased space and font size */}
            <li><Link href="/about" className="hover:text-secondary transition-colors duration-200">About Us</Link></li> {/* Added transition */}
            <li><Link href="/contact" className="hover:text-secondary transition-colors duration-200">Contact</Link></li> {/* Added transition */}
            {/* Add other relevant footer links here */}
          </ul>
        </div>

        {/* Copyright Info */}
        <div className="text-sm text-gray-300 dark:text-gray-500"> {/* Added dark mode text color */}
          &copy; {new Date().getFullYear()} 777 F&F Ltd. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;