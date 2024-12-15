// src/components/Navbar.js
import React, { useState } from 'react';
import './Navbar.css'; // Optional: Include CSS file for custom styles

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-gray-900 cursor-pointer p-4 sticky top-0 z-50">
      <div className="container h-16 mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-10 w-10 hover:rotate-45 hover:text-white text-yellow-400"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M12 0C5.373 0 0 5.373 0 12c0 6.627 5.373 12 12 12s12-5.373 12-12C24 5.373 18.627 0 12 0zm0 22c-5.514 0-10-4.486-10-10S6.486 2 12 2s10 4.486 10 10-4.486 10-10 10z" />
            <path d="M12 5c-1.333 0-2.5 1.333-2.5 2.5S10.667 10 12 10s2.5-1.333 2.5-2.5S13.333 5 12 5zm0 12c-1.333 0-2.5 1.333-2.5 2.5S10.667 22 12 22s2.5-1.333 2.5-2.5S13.333 17 12 17z" />
          </svg>
          <h1 className="text-white text-3xl md:text-4xl select-none font-bold hover:-rotate-12 hover:text-yellow-400">
            Burger Hut
          </h1>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex select-none space-x-4 text-lg">
          <a href="#menu" className="nav-link hover:font-bold">
            Menu
          </a>
          <a href="#services" className="nav-link hover:font-bold">
            Services
          </a>
          <a href="#testimonials" className="nav-link hover:font-bold">
            Testimonials
          </a>
          <a href="#contact" className="nav-link hover:font-bold">
            Contact
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="block md:hidden text-yellow-400 hover:text-white focus:outline-none"
          onClick={toggleMobileMenu}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d={
                isMobileMenuOpen
                  ? 'M6 18L18 6M6 6l12 12' // X icon
                  : 'M4 6h16M4 12h16M4 18h16' // Hamburger icon
              }
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-gray-800 select-none text-white p-4 space-y-2">
          <a
            href="#menu"
            className="block nav-link text-lg hover:font-bold"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Menu
          </a>
          <a
            href="#services"
            className="block nav-link text-lg hover:font-bold"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Services
          </a>
          <a
            href="#testimonials"
            className="block nav-link text-lg hover:font-bold"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Testimonials
          </a>
          <a
            href="#contact"
            className="block nav-link text-lg hover:font-bold"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Contact
          </a>
        </div>
      )}
    </nav>
  );
}
