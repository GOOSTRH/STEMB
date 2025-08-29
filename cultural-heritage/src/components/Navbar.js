import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
         <nav className="bg-[var(--primary-bg)] shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Navigation Row */}
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <i className="fas fa-globe-americas text-2xl text-[var(--accent-1)] mr-2"></i>
              <span className="text-xl font-bold text-[var(--accent-1)]">Beevengers' Page</span>
            </Link>
          </div>
          
          {/* Desktop Navigation - Home and UCSP */}
          <div className="hidden md:flex items-center space-x-8">
            <Link 
              to="/" 
              className={`font-medium transition-colors ${
                isActive('/') 
                  ? 'text-[var(--accent-1)] border-b-2 border-[var(--accent-1)]' 
                  : 'text-[var(--accent-3)] hover:text-[var(--accent-1)]'
              }`}
            >
              Home
            </Link>
            <Link 
              to="/ucsp" 
              className={`font-medium transition-colors ${
                isActive('/ucsp') 
                  ? 'text-[var(--accent-1)] border-b-2 border-[var(--accent-1)]' 
                  : 'text-[var(--accent-3)] hover:text-[var(--accent-1)]'
              }`}
            >
              UCSP
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-[var(--accent-3)] hover:text-[var(--accent-1)]"
            >
              <i className={`fas ${isMobileMenuOpen ? 'fa-times' : 'fa-bars'} text-xl`}></i>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col space-y-2">
              <Link 
                to="/" 
                className={`px-3 py-2 rounded-md text-sm font-medium ${
                  isActive('/') 
                    ? 'text-[var(--accent-1)] bg-[var(--secondary-bg)]' 
                    : 'text-[var(--accent-3)] hover:text-[var(--accent-1)] hover:bg-[var(--secondary-bg)]'
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                to="/ucsp" 
                className={`px-3 py-2 rounded-md text-sm font-medium ${
                  isActive('/ucsp') 
                    ? 'text-[var(--accent-1)] bg-[var(--secondary-bg)]' 
                    : 'text-[var(--accent-3)] hover:text-[var(--accent-1)] hover:bg-[var(--secondary-bg)]'
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                UCSP
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
