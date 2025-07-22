import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ShoppingCart, Calendar, Star, Zap } from 'lucide-react';

export default function Hero() {
  const [translateY, setTranslateY] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const navigate = useNavigate();

  // Array of background images
  const backgroundImages = [
    'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1899&q=80',
    'https://images.unsplash.com/photo-1571091718767-18b5b1457add?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80',
    'https://images.unsplash.com/photo-1520072959219-c595dc870360?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2089&q=80',
    'https://images.unsplash.com/photo-1586190848861-99aa4a171e90?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2080&q=80',
    'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2081&q=80'
  ];

  useEffect(() => {
    // Floating animation
    const floatingInterval = setInterval(() => {
      setTranslateY((prev) => (prev === 0 ? -8 : 0));
    }, 2000);

    // Background image changer
    const imageInterval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % backgroundImages.length);
    }, 4000); // Change image every 4 seconds

    // Entrance animation
    setTimeout(() => setIsVisible(true), 100);

    return () => {
      clearInterval(floatingInterval);
      clearInterval(imageInterval);
    };
  }, [backgroundImages.length]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800 flex items-center justify-center relative text-white overflow-hidden">
      {/* Enhanced Background Images with Auto-change */}
      {backgroundImages.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${
            index === currentImageIndex ? 'opacity-20' : 'opacity-0'
          }`}
          style={{
            backgroundImage: `url('${image}')`,
          }}
        ></div>
      ))}

      {/* Image Transition Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-2 z-20">
        {backgroundImages.map((_, index) => (
          <div
            key={index}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentImageIndex
                ? 'bg-cyan-400 scale-125'
                : 'bg-white/40 hover:bg-white/60'
            }`}
          ></div>
        ))}
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-cyan-500/15 to-blue-600/15 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-br from-purple-500/15 to-indigo-600/15 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-br from-emerald-500/10 to-teal-600/10 rounded-full blur-3xl animate-pulse delay-500"></div>
        
        {/* Floating Particles */}
        <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-cyan-400/40 rounded-full animate-ping"></div>
        <div className="absolute top-3/4 right-1/4 w-3 h-3 bg-blue-400/40 rounded-full animate-ping delay-700"></div>
        <div className="absolute top-1/3 right-1/3 w-2 h-2 bg-purple-400/40 rounded-full animate-ping delay-1000"></div>
      </div>

      {/* Enhanced Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/5 via-slate-900/5 to-black/5 backdrop-blur-sm"></div>

      {/* Content */}
      <div className="relative text-center px-4 sm:px-6 lg:px-8 z-10 max-w-6xl mx-auto py-12 lg:py-20">
        {/* Hero Badge */}
        <div className={`inline-flex items-center gap-3 bg-gradient-to-r from-cyan-600 to-blue-600 text-white px-6 py-3 rounded-full text-sm font-bold mb-8 shadow-lg transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <Star className="w-5 h-5 animate-pulse" />
          <span className="text-base font-black">PREMIUM BURGER EXPERIENCE</span>
          <Zap className="w-5 h-5 animate-pulse" />
        </div>

        {/* Main Heading */}
        <h1 className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black mb-6 leading-tight transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          Welcome to{' '}
          <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent hover:from-cyan-300 hover:via-blue-400 hover:to-purple-500 transition-all duration-500">
            Burger Hut!
          </span>
        </h1>

        {/* Animated Subtitle */}
        <p
          style={{
            transform: `translateY(${translateY}px)`,
            transition: 'transform 0.6s ease-in-out',
          }}
          className={`text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl mt-4 mb-8 text-gray-200 font-semibold leading-relaxed transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
        >
          The Ultimate Burger Experience in Town!
        </p>

        {/* Description */}
        <p className={`text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-12 leading-relaxed font-medium transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          Crafted with premium ingredients, served with passion, and delivered with excellence
        </p>
        
        {/* Action Buttons */}
        <div className={`flex flex-col sm:flex-row gap-4 lg:gap-6 justify-center items-center mb-12 transition-all duration-1000 delay-900 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <button 
            onClick={() => navigate('/cart')}
            className="group relative bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 hover:from-cyan-600 hover:via-blue-700 hover:to-purple-700 px-8 sm:px-10 lg:px-12 py-4 lg:py-5 rounded-2xl text-lg lg:text-xl font-black transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/25 active:scale-95 shadow-xl w-full sm:w-auto"
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-2xl blur opacity-30 group-hover:opacity-50 transition duration-300"></div>
            <div className="relative flex items-center justify-center gap-3">
              <ShoppingCart className="w-6 h-6 group-hover:animate-bounce" />
              <span>Order Now</span>
              <div className="w-2 h-2 bg-white/60 rounded-full animate-ping"></div>
            </div>
          </button>
          
          <button 
            onClick={() => navigate('/table-booking')}
            className="group relative bg-white/10 hover:bg-white/20 backdrop-blur-md border-2 border-white/20 hover:border-cyan-400/50 px-8 sm:px-10 lg:px-12 py-4 lg:py-5 rounded-2xl text-lg lg:text-xl font-bold transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-xl w-full sm:w-auto"
          >
            <div className="flex items-center justify-center gap-3">
              <Calendar className="w-6 h-6 group-hover:animate-pulse group-hover:text-cyan-400 transition-colors duration-300" />
              <span className="group-hover:text-cyan-300 transition-colors duration-300">Book Table</span>
            </div>
          </button>
        </div>

        {/* Feature Highlights */}
        <div className={`grid grid-cols-1 sm:grid-cols-3 gap-4 lg:gap-6 max-w-4xl mx-auto transition-all duration-1000 delay-1100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          {[
            { icon: "🍔", text: "Premium Quality", gradient: "from-cyan-500 to-blue-600" },
            { icon: "⚡", text: "Lightning Fast", gradient: "from-blue-500 to-purple-600" },
            { icon: "🎯", text: "Always Fresh", gradient: "from-purple-500 to-indigo-600" }
          ].map((feature, index) => (
            <div 
              key={index}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl px-4 py-3 lg:px-6 lg:py-4 hover:bg-white/10 hover:border-cyan-400/30 transition-all duration-300 transform hover:scale-105"
              style={{ animationDelay: `${1200 + index * 200}ms` }}
            >
              <div className="flex items-center justify-center gap-3">
                <span className="text-2xl">{feature.icon}</span>
                <span className={`text-sm lg:text-base font-bold bg-gradient-to-r ${feature.gradient} bg-clip-text text-transparent`}>
                  {feature.text}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Tagline */}
        <div className={`mt-8 lg:mt-12 transition-all duration-1000 delay-1300 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          <p className="text-gray-400 text-base lg:text-lg font-medium">
            Trusted by <span className="text-cyan-400 font-bold">15,000+</span> satisfied customers
          </p>
          <div className="flex justify-center items-center gap-2 mt-3">
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 text-amber-400 fill-current animate-pulse" style={{ animationDelay: `${i * 100}ms` }} />
              ))}
            </div>
            <span className="text-gray-300 text-sm lg:text-base font-semibold ml-2">4.9/5 Average Rating</span>
          </div>
        </div>
      </div>
    </div>
  );
}
