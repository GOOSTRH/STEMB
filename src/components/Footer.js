import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-[var(--accent-1)] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center mb-4">
              <i className="fas fa-globe-americas text-2xl text-[var(--secondary-bg)] mr-2"></i>
              <span className="text-xl font-bold">Beevengers' Page</span>
            </div>
            <p className="text-[var(--secondary-bg)] mb-4 max-w-md">
              This is a website made for STEMB 2024-26. Discover the rich traditions, customs, and histories that shape our diverse world.
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-[var(--secondary-bg)] hover:text-[var(--primary-bg)] transition-colors">
                <i className="fab fa-facebook text-xl"></i>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-[var(--secondary-bg)] hover:text-[var(--primary-bg)] transition-colors">
                <i className="fab fa-twitter text-xl"></i>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-[var(--secondary-bg)] hover:text-[var(--primary-bg)] transition-colors">
                <i className="fab fa-instagram text-xl"></i>
              </a>
            </div>
          </div>

          {/* UCSP Link */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-[var(--secondary-bg)]">UCSP</h3>
            <ul className="space-y-2">
              <li><Link to="/ucsp" className="text-[var(--secondary-bg)] hover:text-[var(--primary-bg)] transition-colors">View All Groups</Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-[var(--secondary-bg)]">Resources</h3>
            <ul className="space-y-2">
              <li><a href="/about" className="text-[var(--secondary-bg)] hover:text-[var(--primary-bg)] transition-colors">About Us</a></li>
              <li><a href="/contact" className="text-[var(--secondary-bg)] hover:text-[var(--primary-bg)] transition-colors">Contact</a></li>
              <li><a href="/privacy" className="text-[var(--secondary-bg)] hover:text-[var(--primary-bg)] transition-colors">Privacy Policy</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-[var(--accent-2)] mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-[var(--secondary-bg)] text-sm">
            © 2024 Beevengers' Page. All rights reserved.
          </p>
          <p className="text-[var(--secondary-bg)] text-sm mt-2 md:mt-0">
            Made with <i className="fas fa-heart text-[var(--primary-bg)]"></i> for STEMB 2024-26
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
