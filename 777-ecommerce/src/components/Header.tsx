import React from 'react';
import Link from 'next/link';
import DarkModeToggle from './DarkModeToggle'; // Import DarkModeToggle component

const Header = () => {
  return (
    <header className="bg-primary text-white p-4 shadow-lg dark:bg-gray-900"> {/* Added dark mode background and stronger shadow */}
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo and Site Title */}
        <div className="flex items-center">
          {/* Logo Placeholder - Replace with actual logo */}
          <div className="h-10 w-10 bg-secondary rounded-full mr-3 flex items-center justify-center text-primary font-bold text-lg"> {/* Increased size and added text styling */}
            777
          </div>
          <Link href="/" className="text-xl font-bold text-white hover:text-secondary transition-colors duration-200"> {/* Added hover effect */}
            777 F&F Ltd
          </Link>
        </div>

        {/* Navigation */}
        <nav>
          <ul className="flex items-center space-x-6"> {/* Added items-center and increased space */}
            <li><Link href="/" className="hover:text-secondary transition-colors duration-200">Home</Link></li> {/* Added transition */}
            <li><Link href="/about" className="hover:text-secondary transition-colors duration-200">About Us</Link></li> {/* Added transition */}
            <li><Link href="/catalogue" className="hover:text-secondary transition-colors duration-200">Catalogue</Link></li> {/* Added transition */}
            <li><Link href="/membership" className="hover:text-secondary transition-colors duration-200">Membership</Link></li> {/* Added transition */}
            <li><Link href="/reseller" className="hover:text-secondary transition-colors duration-200">Reseller</Link></li> {/* Added transition */}
            <li><Link href="/investor" className="hover:text-secondary transition-colors duration-200">Investor</Link></li> {/* Added transition */}
            <li><Link href="/contact" className="hover:text-secondary transition-colors duration-200">Contact</Link></li> {/* Added transition */}
            {/* Dark Mode Toggle */}
            <li><DarkModeToggle /></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;