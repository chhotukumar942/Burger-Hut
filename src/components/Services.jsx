// src/components/Services.js
import React, { useEffect, useRef, useState } from 'react';

const services = [
  {
    id: 1,
    title: "Lightning Fast Delivery",
    description: "Premium burgers delivered to your doorstep in under 30 minutes with real-time tracking",
    icon: "�",
    gradient: "from-cyan-500 to-blue-600",
    iconBg: "from-cyan-500/20 to-blue-600/20",
    textColor: "text-cyan-600"
  },
  {
    id: 2,
    title: "Premium Fresh Ingredients",
    description: "Locally sourced, organic ingredients prepared daily for the ultimate taste experience",
    icon: "🌟",
    gradient: "from-emerald-500 to-teal-600",
    iconBg: "from-emerald-500/20 to-teal-600/20",
    textColor: "text-emerald-600"
  },
  {
    id: 3,
    title: "Expert Chef Service",
    description: "Award-winning chefs crafting each burger with precision and culinary excellence",
    icon: "👨‍🍳",
    gradient: "from-purple-500 to-indigo-600",
    iconBg: "from-purple-500/20 to-indigo-600/20",
    textColor: "text-purple-600"
  },
  {
    id: 4,
    title: "24/7 Customer Support",
    description: "Round-the-clock assistance ensuring your dining experience is always perfect",
    icon: "💬",
    gradient: "from-amber-500 to-orange-600",
    iconBg: "from-amber-500/20 to-orange-600/20",
    textColor: "text-amber-600"
  },
  {
    id: 5,
    title: "Mobile App Ordering",
    description: "Seamless ordering experience through our intuitive mobile app with exclusive deals",
    icon: "📱",
    gradient: "from-rose-500 to-pink-600",
    iconBg: "from-rose-500/20 to-pink-600/20",
    textColor: "text-rose-600"
  },
  {
    id: 6,
    title: "Quality Guarantee",
    description: "100% satisfaction guarantee with our premium quality assurance program",
    icon: "🏆",
    gradient: "from-blue-500 to-cyan-600",
    iconBg: "from-blue-500/20 to-cyan-600/20",
    textColor: "text-blue-600"
  }
];

export default function Services() {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredCard, setHoveredCard] = useState(null);
  const sectionRef = useRef(null);

  // Intersection Observer to trigger animation on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entries[0].target);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="services"
      className="py-20 bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800 relative overflow-hidden"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-cyan-500/10 to-blue-600/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-br from-purple-500/10 to-indigo-600/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-br from-emerald-500/5 to-teal-600/5 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Enhanced Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-cyan-600 to-blue-600 text-white px-8 py-3 rounded-full text-sm font-bold mb-6 animate-bounce shadow-lg">
            <span className="text-2xl">⚡</span>
            <span className="text-lg font-black">PREMIUM SERVICES</span>
            <span className="text-2xl">🎯</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black bg-gradient-to-r from-white via-cyan-200 to-blue-200 bg-clip-text text-transparent mb-6">
            Exceptional Service Excellence
          </h2>
          
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed font-medium">
            Experience world-class service with our comprehensive suite of premium offerings designed to exceed your expectations
          </p>
          
          <div className="flex justify-center items-center gap-4 mt-8">
            <div className="w-32 h-1 bg-gradient-to-r from-transparent via-cyan-500 to-transparent rounded-full"></div>
            <div className="w-3 h-3 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full animate-pulse"></div>
            <div className="w-32 h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent rounded-full"></div>
          </div>
        </div>
        
        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-16">
          {services.map((service, index) => (
            <div
              key={service.id}
              className={`group relative bg-gradient-to-br from-white/10 to-cyan-50/5 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/20 transition-all duration-700 transform hover:scale-105 hover:-rotate-1 ${
                isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-8'
              }`}
              style={{
                transitionDelay: `${index * 150}ms`
              }}
              onMouseEnter={() => setHoveredCard(service.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Glow Effect */}
              <div className={`absolute -inset-1 bg-gradient-to-br ${service.gradient} rounded-3xl opacity-0 group-hover:opacity-30 blur-xl transition-all duration-500`}></div>
              
              {/* Header Gradient */}
              <div className={`h-2 bg-gradient-to-r ${service.gradient} rounded-t-3xl`}></div>
              
              <div className="relative p-6 lg:p-8">
                {/* Icon Container */}
                <div className="flex justify-center mb-6">
                  <div className={`relative w-20 h-20 bg-gradient-to-br ${service.iconBg} backdrop-blur-sm rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-all duration-300`}>
                    <div className={`absolute -inset-1 bg-gradient-to-br ${service.gradient} rounded-2xl opacity-0 group-hover:opacity-20 blur-sm transition-opacity duration-300`}></div>
                    <span className="relative text-3xl transform group-hover:scale-110 transition-transform duration-300">
                      {service.icon}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="text-center">
                  <h4 className={`text-xl md:text-2xl font-black text-white mb-4 group-hover:${service.textColor} transition-colors duration-300`}>
                    {service.title}
                  </h4>
                  <p className="text-gray-300 text-base md:text-lg leading-relaxed mb-6 font-medium">
                    {service.description}
                  </p>

                  {/* Action Button */}
                  <button className={`bg-gradient-to-r ${service.gradient} hover:shadow-2xl text-white font-bold py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg text-sm md:text-base`}>
                    Explore More
                  </button>
                </div>

                {/* Decorative Elements */}
                <div className="absolute top-4 right-4">
                  <div className="flex gap-1">
                    <div className={`w-2 h-2 bg-gradient-to-r ${service.gradient} rounded-full animate-ping`}></div>
                    <div className={`w-1.5 h-1.5 bg-gradient-to-r ${service.gradient} rounded-full animate-ping delay-300`}></div>
                  </div>
                </div>

                {/* Shimmer Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 rounded-3xl"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Enhanced Statistics Section */}
        <div className="bg-gradient-to-br from-white/10 to-cyan-50/5 backdrop-blur-xl rounded-3xl shadow-2xl p-8 lg:p-12 border border-white/20">
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-black bg-gradient-to-r from-white to-cyan-200 bg-clip-text text-transparent mb-4">
              Why Choose Burger Hut?
            </h3>
            <p className="text-lg text-gray-300 font-medium">
              Trusted by thousands of satisfied customers worldwide
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {[
              {
                icon: "⭐",
                title: "4.9/5 Rating",
                subtitle: "15,000+ Reviews",
                gradient: "from-amber-500 to-yellow-600",
                bgGradient: "from-amber-500/20 to-yellow-600/20"
              },
              {
                icon: "🕒",
                title: "24/7 Service",
                subtitle: "Always Available",
                gradient: "from-blue-500 to-cyan-600",
                bgGradient: "from-blue-500/20 to-cyan-600/20"
              },
              {
                icon: "💎",
                title: "Premium Quality",
                subtitle: "Best Ingredients",
                gradient: "from-purple-500 to-indigo-600",
                bgGradient: "from-purple-500/20 to-indigo-600/20"
              },
              {
                icon: "🎯",
                title: "Fast Delivery",
                subtitle: "Under 30 Minutes",
                gradient: "from-emerald-500 to-teal-600",
                bgGradient: "from-emerald-500/20 to-teal-600/20"
              }
            ].map((stat, index) => (
              <div
                key={index}
                className="group text-center p-6 bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-white/30 transition-all duration-300 transform hover:scale-105"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${stat.bgGradient} backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <span className="text-2xl">{stat.icon}</span>
                </div>
                <h5 className="font-black text-lg md:text-xl text-white mb-2 group-hover:text-cyan-300 transition-colors duration-300">
                  {stat.title}
                </h5>
                <p className="text-gray-400 text-sm md:text-base font-medium">
                  {stat.subtitle}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
