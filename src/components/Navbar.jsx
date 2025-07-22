// src/components/Navbar.js
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ShoppingCart, User } from 'lucide-react';
import { useSelector } from 'react-redux';
import './Navbar.css'; // Optional: Include CSS file for custom styles

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const { itemCount } = useSelector(state => state.cart);
  const { isAuthenticated, user } = useSelector(state => state.auth);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-gradient-to-r from-gray-900 via-slate-900 to-gray-900 backdrop-blur-lg cursor-pointer p-4 sticky top-0 z-50 border-b border-white/10">
      <div className="container h-16 mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2 transform hover:scale-105 transition-all duration-300">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-10 w-10 hover:rotate-45 hover:text-white text-yellow-400 transition-all duration-300"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M12 0C5.373 0 0 5.373 0 12c0 6.627 5.373 12 12 12s12-5.373 12-12C24 5.373 18.627 0 12 0zm0 22c-5.514 0-10-4.486-10-10S6.486 2 12 2s10 4.486 10 10-4.486 10-10 10z" />
            <path d="M12 5c-1.333 0-2.5 1.333-2.5 2.5S10.667 10 12 10s2.5-1.333 2.5-2.5S13.333 5 12 5zm0 12c-1.333 0-2.5 1.333-2.5 2.5S10.667 22 12 22s2.5-1.333 2.5-2.5S13.333 17 12 17z" />
          </svg>
          <h1 className="text-white text-3xl md:text-4xl select-none font-bold hover:-rotate-12 hover:text-yellow-400 transition-all duration-300">
            Burger Hut
          </h1>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex select-none space-x-6 text-lg">
          <a href="#menu" className="nav-link hover:font-bold text-white hover:text-yellow-400 transition-all duration-300">
            Menu
          </a>
          <a href="#services" className="nav-link hover:font-bold text-white hover:text-yellow-400 transition-all duration-300">
            Services
          </a>
          <a href="#testimonials" className="nav-link hover:font-bold text-white hover:text-yellow-400 transition-all duration-300">
            Testimonials
          </a>
          <a href="#contact" className="nav-link hover:font-bold text-white hover:text-yellow-400 transition-all duration-300">
            Contact
          </a>
          <Link to="/table-booking" className="nav-link hover:font-bold text-white hover:text-yellow-400 transition-all duration-300">
            Book Table
          </Link>
          <Link to="/order-history" className="nav-link hover:font-bold text-white hover:text-yellow-400 transition-all duration-300">
            Order History
          </Link>
        </div>

        {/* Right side menu */}
        <div className="hidden md:flex items-center space-x-4">
          {/* Cart */}
          <button
            onClick={() => navigate('/cart')}
            className="relative p-2 text-white hover:text-yellow-400 transition-all duration-300 hover:scale-110"
          >
            <ShoppingCart className="w-6 h-6" />
            {itemCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-yellow-500 text-black text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold">
                {itemCount}
              </span>
            )}
          </button>

          {/* User */}
          {isAuthenticated ? (
            <div className="flex items-center space-x-2 text-white">
              <User className="w-5 h-5" />
              <span className="text-sm">Hi, {user?.name}</span>
            </div>
          ) : (
            <button
              onClick={() => navigate('/login')}
              className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-4 py-2 rounded-lg hover:from-yellow-400 hover:to-orange-400 transition-all duration-300 transform hover:scale-105"
            >
              Login
            </button>
          )}
        </div>
        {/* Mobile Menu Toggle */}
        <button
          className="block md:hidden text-yellow-400 hover:text-white focus:outline-none transform hover:scale-110 transition-all duration-300"
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
        <div className="md:hidden bg-gradient-to-r from-gray-800 via-slate-800 to-gray-800 backdrop-blur-lg select-none text-white p-4 space-y-3 border-t border-white/10 animate-fade-in">
          <a
            href="#menu"
            className="block nav-link text-lg hover:font-bold hover:text-yellow-400 transition-all duration-300 p-2 rounded-lg hover:bg-white/10"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Menu
          </a>
          <a
            href="#services"
            className="block nav-link text-lg hover:font-bold hover:text-yellow-400 transition-all duration-300 p-2 rounded-lg hover:bg-white/10"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Services
          </a>
          <a
            href="#testimonials"
            className="block nav-link text-lg hover:font-bold hover:text-yellow-400 transition-all duration-300 p-2 rounded-lg hover:bg-white/10"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Testimonials
          </a>
          <a
            href="#contact"
            className="block nav-link text-lg hover:font-bold hover:text-yellow-400 transition-all duration-300 p-2 rounded-lg hover:bg-white/10"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Contact
          </a>
          <Link
            to="/table-booking"
            className="block nav-link text-lg hover:font-bold hover:text-yellow-400 transition-all duration-300 p-2 rounded-lg hover:bg-white/10"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Book Table
          </Link>
          <Link
            to="/order-history"
            className="block nav-link text-lg hover:font-bold hover:text-yellow-400 transition-all duration-300 p-2 rounded-lg hover:bg-white/10"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Order History
          </Link>
          <div className="flex items-center justify-between pt-3 border-t border-white/20">
            <button
              onClick={() => {
                navigate('/cart');
                setIsMobileMenuOpen(false);
              }}
              className="flex items-center space-x-2 text-white hover:text-yellow-400 transition-all duration-300"
            >
              <ShoppingCart className="w-5 h-5" />
              <span>Cart ({itemCount})</span>
            </button>
            {!isAuthenticated && (
              <button
                onClick={() => {
                  navigate('/login');
                  setIsMobileMenuOpen(false);
                }}
                className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-3 py-1 rounded-lg text-sm hover:from-yellow-400 hover:to-orange-400 transition-all duration-300"
              >
                Login
              </button>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}
