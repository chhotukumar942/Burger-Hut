import React, { useEffect, useState } from 'react';

export default function Hero() {
  const [translateY, setTranslateY] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTranslateY((prev) => (prev === 0 ? -10 : 0));
    }, 1000); // Change position every second

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  return (
    <div className="h-screen select-none bg-gray-900 flex items-center justify-center relative text-white">
      {/* Fixed Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://img.freepik.com/free-photo/tasty-burger-isolated-white-background-fresh-hamburger-fastfood-with-beef-cheese_90220-1063.jpg?uid=R154481333&ga=GA1.1.779915797.1728132128&semt=ais_hybrid')",
        }}
      ></div>

      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-black opacity-30"></div>

      {/* Content */}
      <div className="relative text-center px-4 md:px-8 lg:px-16 z-10">
        <h2 className="text-3xl md:text-5xl font-bold hover:-translate-y-2 md:hover:-translate-y-6 transition duration-300">
          Welcome to <span className="text-yellow-500">Burger Hut!</span>
        </h2>
        <p
          style={{
            transform: `translateY(${translateY}px)`,
            transition: 'transform 0.3s ease-in-out',
          }}
          className="text-lg md:text-2xl mt-4 opacity-80"
        >
          The Best Burgers in Town!
        </p>
        <button className="mt-6 bg-yellow-500 px-6 md:px-8 py-2 md:py-3 rounded-full text-base md:text-lg font-semibold hover:translate-y-1 hover:bg-yellow-400 hover:-rotate-6 transition duration-300">
          Order Now
        </button>
      </div>
    </div>
  );
}
