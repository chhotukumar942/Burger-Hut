import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Clock, Facebook, Twitter, Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-gray-900 via-slate-900 to-gray-900 border-t border-white/10">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 text-yellow-400"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 0C5.373 0 0 5.373 0 12c0 6.627 5.373 12 12 12s12-5.373 12-12C24 5.373 18.627 0 12 0zm0 22c-5.514 0-10-4.486-10-10S6.486 2 12 2s10 4.486 10 10-4.486 10-10 10z" />
              </svg>
              <h3 className="text-2xl font-bold text-white">Burger Hut</h3>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Serving the best burgers in town with fresh ingredients and unmatched flavor since 2020.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors duration-300">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors duration-300">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors duration-300">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-yellow-400 transition-colors duration-300">
                  Home
                </Link>
              </li>
              <li>
                <a href="#menu" className="text-gray-300 hover:text-yellow-400 transition-colors duration-300">
                  Menu
                </a>
              </li>
              <li>
                <Link to="/table-booking" className="text-gray-300 hover:text-yellow-400 transition-colors duration-300">
                  Book Table
                </Link>
              </li>
              <li>
                <a href="#contact" className="text-gray-300 hover:text-yellow-400 transition-colors duration-300">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Contact Info</h4>
            <ul className="space-y-3">
              <li className="flex items-center space-x-3 text-gray-300">
                <MapPin className="w-4 h-4 text-yellow-400 flex-shrink-0" />
                <span className="text-sm">123 Burger Street, Food City, FC 12345</span>
              </li>
              <li className="flex items-center space-x-3 text-gray-300">
                <Phone className="w-4 h-4 text-yellow-400 flex-shrink-0" />
                <span className="text-sm">(555) 123-BURGER</span>
              </li>
              <li className="flex items-center space-x-3 text-gray-300">
                <Mail className="w-4 h-4 text-yellow-400 flex-shrink-0" />
                <span className="text-sm">info@burgerhut.com</span>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Hours</h4>
            <div className="space-y-2">
              <div className="flex items-center space-x-3 text-gray-300">
                <Clock className="w-4 h-4 text-yellow-400 flex-shrink-0" />
                <div className="text-sm">
                  <p>Mon - Thu: 11:00 AM - 10:00 PM</p>
                  <p>Fri - Sat: 11:00 AM - 11:00 PM</p>
                  <p>Sunday: 12:00 PM - 9:00 PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © 2024 Burger Hut. All rights reserved.
            </p>
            <p className="text-gray-400 text-sm">
              Design & Developed By: <span className="text-yellow-400 font-semibold">Chhotu Kumar</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}


