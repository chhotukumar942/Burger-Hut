import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ShoppingCart, Calendar } from 'lucide-react';

export default function Hero() {
  const [translateY, setTranslateY] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setTranslateY((prev) => (prev === 0 ? -10 : 0));
    }, 1000); // Change position every second

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  return (
    <div className="h-screen select-none bg-gradient-to-br from-gray-900 via-slate-900 to-gray-900 flex items-center justify-center relative text-white">
      {/* Fixed Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-40"
        style={{
          backgroundImage:
            "url('https://img.freepik.com/free-photo/tasty-burger-isolated-white-background-fresh-hamburger-fastfood-with-beef-cheese_90220-1063.jpg?uid=R154481333&ga=GA1.1.779915797.1728132128&semt=ais_hybrid')",
        }}
      ></div>

      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-yellow-400/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-3/4 right-1/4 w-48 h-48 bg-orange-400/10 rounded-full blur-2xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 w-32 h-32 bg-green-400/10 rounded-full blur-xl animate-bounce"></div>
      </div>

      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-black/30 backdrop-blur-sm"></div>

      {/* Content */}
      <div className="relative text-center px-4 md:px-8 lg:px-16 z-10 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 hover:-translate-y-2 md:hover:-translate-y-6 transition duration-300">
          Welcome to <span className="bg-gradient-to-r from-yellow-400 via-orange-400 to-yellow-500 bg-clip-text text-transparent">Burger Hut!</span>
        </h1>
        <p
          style={{
            transform: `translateY(${translateY}px)`,
            transition: 'transform 0.3s ease-in-out',
          }}
          className="text-xl md:text-3xl lg:text-4xl mt-4 mb-8 opacity-90 font-medium"
        >
          The Best Burgers in Town!
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button 
            onClick={() => navigate('/cart')}
            className="group bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-400 hover:to-orange-400 px-8 md:px-12 py-3 md:py-4 rounded-2xl text-lg md:text-xl font-bold transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-yellow-500/25 active:scale-95"
          >
            <div className="flex items-center gap-3">
              <ShoppingCart className="w-6 h-6 group-hover:animate-bounce" />
              <span>Order Now</span>
            </div>
          </button>
          
          <button 
            onClick={() => navigate('/table-booking')}
            className="group bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 hover:border-white/40 px-8 md:px-12 py-3 md:py-4 rounded-2xl text-lg md:text-xl font-semibold transition-all duration-300 transform hover:scale-105 active:scale-95"
          >
            <div className="flex items-center gap-3">
              <Calendar className="w-6 h-6 group-hover:animate-pulse" />
              <span>Book Table</span>
            </div>
          </button>
        </div>
        
        <p className="mt-8 text-white/70 text-lg animate-fade-in-delay-1">
          Fresh ingredients • Fast delivery • Unforgettable taste
        </p>
      </div>
    </div>
  );
}
