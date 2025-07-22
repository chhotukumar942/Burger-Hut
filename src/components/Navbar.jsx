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
        {/* New Modern Logo */}
        <Link to="/" className="group flex items-center space-x-3 transform hover:scale-105 transition-all duration-300">
          <div className="relative">
            {/* Animated Background Rings */}
            <div className="absolute -inset-3 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 rounded-full opacity-0 group-hover:opacity-30 blur-lg transition-all duration-500 animate-pulse"></div>
            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full opacity-20 group-hover:opacity-40 transition-all duration-300"></div>
            
            {/* Main Logo Container */}
            <div className="relative w-14 h-14 bg-gradient-to-br from-slate-800 via-gray-900 to-slate-800 rounded-full flex items-center justify-center shadow-2xl border-2 border-white/20 group-hover:border-cyan-400/50 transition-all duration-300">
              {/* Inner Gradient Circle */}
              <div className="w-10 h-10 bg-gradient-to-br from-cyan-500 via-blue-600 to-purple-600 rounded-full flex items-center justify-center shadow-lg group-hover:rotate-12 transition-all duration-700">
                {/* Burger Icon */}
                <div className="text-white text-xl group-hover:scale-110 transition-all duration-300">
                  🍔
                </div>
              </div>
              
              {/* Decorative Dots */}
              <div className="absolute top-1 right-1 w-1.5 h-1.5 bg-cyan-400 rounded-full animate-ping"></div>
              <div className="absolute bottom-1 left-1 w-1 h-1 bg-blue-400 rounded-full animate-ping delay-500"></div>
            </div>
          </div>
          
          <div className="relative">
            <h1 className="text-white text-2xl md:text-3xl font-black tracking-tight">
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent group-hover:from-cyan-300 group-hover:via-blue-400 group-hover:to-purple-500 transition-all duration-500">
                Burger
              </span>
              <span className="text-white ml-1 group-hover:text-cyan-300 transition-colors duration-300">
                Hut
              </span>
            </h1>
            
            {/* Animated Underline */}
            <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 group-hover:w-full transition-all duration-500"></div>
            
            {/* Tagline */}
            <div className="absolute -bottom-5 left-0 text-xs text-gray-400 opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap">
              Premium Burgers
            </div>
          </div>
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
