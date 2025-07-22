// src/components/Services.js
import React, { useEffect, useRef, useState } from 'react';

const services = [
  {
    id: 1,
    title: "Home Delivery",
    description: "Get your favorite burgers delivered fresh to your doorstep within 30 minutes",
    icon: "🚗",
    color: "text-yellow-500"
  },
  {
    id: 2,
    title: "Fresh Ingredients",
    description: "We use only the freshest ingredients sourced locally for the best taste",
    icon: "🥬",
    color: "text-green-500"
  },
  {
    id: 3,
    title: "Fast Service",
    description: "Quick preparation without compromising on quality. Your time matters to us",
    icon: "⏰",
    color: "text-blue-500"
  },
 
  
];

export default function Services() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  // Intersection Observer to trigger animation on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entries[0].target); // Stop observing once it's in view
        }
      },
      { threshold: 0.3 } // Trigger when 30% of the element is visible
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
  }, []);

  return (
    <section
      ref={sectionRef}
      id="services"
      className="py-16 select-none cursor-pointer bg-gradient-to-br from-gray-50 to-gray-100"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h3 className="text-4xl font-bold mb-4 text-gray-800">Our Premium Services</h3>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Experience the best dining service with our comprehensive range of offerings designed for your convenience
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={service.id}
              className={`bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-700 transform hover:-translate-y-4 hover:scale-105 ${
                isVisible
                  ? 'opacity-100 translate-y-0 scale-100'
                  : 'opacity-0 translate-y-8 scale-95'
              } flex flex-col items-center border border-gray-100 hover:border-orange-200`}
              style={{
                transitionDelay: `${index * 100}ms`
              }}
            >
              <div className={`text-6xl mb-6 ${service.color} transform hover:scale-110 transition-transform duration-300`}>
                {service.icon}
              </div>
              <h4 className="text-xl font-bold mb-4 text-gray-800 text-center">{service.title}</h4>
              <p className="text-gray-600 text-center leading-relaxed">{service.description}</p>
              
              {/* Call to action button */}
              <button className="mt-6 px-6 py-2 bg-gradient-to-r from-orange-400 to-red-500 text-white rounded-full hover:from-orange-500 hover:to-red-600 transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg">
                Learn More
              </button>
            </div>
          ))}
        </div>

        {/* Additional service highlights */}
        <div className="mt-16 bg-white rounded-xl shadow-lg p-8 border border-gray-100">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="flex flex-col items-center">
              <div className="text-4xl mb-3">⭐</div>
              <h5 className="font-bold text-lg mb-2">4.9/5 Rating</h5>
              <p className="text-gray-600">Over 10,000 satisfied customers</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-4xl mb-3">🕒</div>
              <h5 className="font-bold text-lg mb-2">24/7 Service</h5>
              <p className="text-gray-600">We're always here when you need us</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-4xl mb-3">💰</div>
              <h5 className="font-bold text-lg mb-2">Best Prices</h5>
              <p className="text-gray-600">Quality food at affordable prices</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
