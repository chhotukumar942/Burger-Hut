import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Clock, Facebook, Twitter, Instagram, ArrowUp, Heart } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-br from-cyan-500/10 to-blue-600/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-gradient-to-br from-purple-500/10 to-indigo-600/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-br from-emerald-500/5 to-teal-600/5 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      {/* Top Border */}
      <div className="h-1 bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600"></div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Enhanced Brand Section */}
          <div className="lg:col-span-1 space-y-6">
            <div className="group">
              <div className="flex items-center space-x-3 mb-4">
                <div className="relative">
                  <div className="absolute -inset-2 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full opacity-0 group-hover:opacity-20 blur-xl transition-all duration-300"></div>
                  <div className="relative w-12 h-12 bg-gradient-to-br from-cyan-500 via-blue-600 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:rotate-12 transition-all duration-300 border border-white/20">
                    <span className="text-white text-2xl">🍔</span>
                  </div>
                </div>
                <h3 className="text-2xl lg:text-3xl font-black bg-gradient-to-r from-white via-cyan-200 to-blue-200 bg-clip-text text-transparent">
                  Burger Hut
                </h3>
              </div>
              
              <p className="text-gray-300 text-base leading-relaxed font-medium mb-6">
                Crafting premium burgers with fresh ingredients and unmatched flavor since 2023. Your taste, our passion.
              </p>

              {/* Enhanced Social Links */}
              <div className="flex space-x-4">
                {[
                  { icon: Facebook, color: "from-blue-600 to-blue-700", hoverColor: "hover:text-blue-400" },
                  { icon: Twitter, color: "from-sky-500 to-blue-600", hoverColor: "hover:text-sky-400" },
                  { icon: Instagram, color: "from-pink-600 to-rose-700", hoverColor: "hover:text-pink-400" }
                ].map((social, index) => (
                  <a
                    key={index}
                    href="#"
                    className="group relative p-3 bg-white/5 hover:bg-white/10 backdrop-blur-sm rounded-xl border border-white/10 hover:border-cyan-400/30 transition-all duration-300 transform hover:scale-110"
                  >
                    <div className={`absolute -inset-1 bg-gradient-to-r ${social.color} rounded-xl opacity-0 group-hover:opacity-20 blur-sm transition-all duration-300`}></div>
                    <social.icon className={`relative w-5 h-5 text-gray-400 ${social.hoverColor} transition-colors duration-300`} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Enhanced Quick Links */}
          <div className="space-y-6">
            <h4 className="text-xl font-black text-white mb-6 relative">
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Quick Links</span>
              <div className="absolute -bottom-2 left-0 w-12 h-0.5 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full"></div>
            </h4>
            <ul className="-space-y-1">
              {[
                { to: "/", label: "Home", icon: "🏠" },
                { href: "#menu", label: "Menu", icon: "🍔" },
                { to: "/table-booking", label: "Book Table", icon: "📅" },
                { href: "#contact", label: "Contact", icon: "📞" },
                { href: "#services", label: "Services", icon: "⚡" },
                { href: "#testimonials", label: "Reviews", icon: "⭐" }
              ].map((link, index) => (
                <li key={index}>
                  {link.to ? (
                    <Link 
                      to={link.to} 
                      className="group flex items-center space-x-3 text-gray-300 hover:text-cyan-400 transition-all duration-300 p-2 rounded-lg hover:bg-white/5"
                    >
                      <span className="text-lg group-hover:scale-110 transition-transform duration-300">{link.icon}</span>
                      <span className="font-medium group-hover:translate-x-1 transition-transform duration-300">{link.label}</span>
                    </Link>
                  ) : (
                    <a 
                      href={link.href} 
                      className="group flex items-center space-x-3 text-gray-300 hover:text-cyan-400 transition-all duration-300 p-2 rounded-lg hover:bg-white/5"
                    >
                      <span className="text-lg group-hover:scale-110 transition-transform duration-300">{link.icon}</span>
                      <span className="font-medium group-hover:translate-x-1 transition-transform duration-300">{link.label}</span>
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Enhanced Contact Info */}
          <div className="space-y-6">
            <h4 className="text-xl font-black text-white mb-6 relative">
              <span className="bg-gradient-to-r from-emerald-400 to-teal-500 bg-clip-text text-transparent">Contact Info</span>
              <div className="absolute -bottom-2 left-0 w-12 h-0.5 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-full"></div>
            </h4>
            <ul className="space-y-2">
              {[
                { icon: MapPin, text: "Bhagalpur Burger Street, Food City, 853204", color: "text-cyan-400" },
                { icon: Phone, text: "91+ 9341568405", color: "text-blue-400" },
                { icon: Mail, text: "chhotumsd@gmail.com", color: "text-purple-400" }
              ].map((contact, index) => (
                <li key={index} className="group">
                  <div className="flex items-start space-x-4 p-3 rounded-xl hover:bg-white/5 transition-all duration-300">
                    <div className="flex-shrink-0 w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <contact.icon className={`w-5 h-5 ${contact.color}`} />
                    </div>
                    <span className="text-gray-300 text-sm font-medium leading-relaxed group-hover:text-white transition-colors duration-300">
                      {contact.text}
                    </span>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Enhanced Hours */}
          <div className="space-y-6">
            <h4 className="text-xl font-black text-white mb-6 relative">
              <span className="bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">Opening Hours</span>
              <div className="absolute -bottom-2 left-0 w-12 h-0.5 bg-gradient-to-r from-amber-500 to-orange-600 rounded-full"></div>
            </h4>
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-amber-400/30 transition-all duration-300">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-amber-500 to-orange-600 rounded-xl flex items-center justify-center">
                  <Clock className="w-5 h-5 text-white" />
                </div>
                <div className="space-y-2 text-sm font-medium">
                  <div className="flex justify-between items-center text-gray-300">
                    <span>Monday To Sunday</span>
                    <span className="text-amber-400"></span>
                  </div>
                  
                  <div className="flex justify-between items-center text-gray-300">
                    <span></span>
                    <span className="text-amber-400">10AM - 11PM</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Bottom Section */}
        <div className="mt-16 pt-8 border-t border-white/20">
          <div className="bg-gradient-to-br from-white/5 to-cyan-50/5 backdrop-blur-sm rounded-2xl p-6 lg:p-8 border border-white/10">
            <div className="flex flex-col lg:flex-row justify-between items-center space-y-6 lg:space-y-0">
              <div className="text-center lg:text-left">
                <p className="text-gray-300 text-base font-medium mb-2">
                  © 2025 Burger Hut. All rights reserved.
                </p>
                <p className="text-gray-400 text-sm">
                  Crafted with <Heart className="w-4 h-4 text-red-400 inline mx-1" /> for burger lovers worldwide
                </p>
              </div>
              
              <div className="flex items-center space-x-6">
                <p className="text-gray-400 text-sm">
                  Design & Development by{' '}
                  <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent font-bold">
                    Chhotu Kumar
                  </span>
                </p>
                
                <button
                  onClick={scrollToTop}
                  className="group relative bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 p-3 rounded-xl shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 transform hover:scale-110"
                >
                  <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl blur opacity-30 group-hover:opacity-50 transition duration-300"></div>
                  <ArrowUp className="relative w-5 h-5 text-white group-hover:animate-bounce" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}


