// src/components/Testimonials.js
import React, { useState } from 'react';

export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: "Alex T.",
      image: "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=600",
      text: "Best burger I've ever had! The quality and taste exceeded all my expectations. Will definitely order again!",
      rating: 5,
      position: "Food Enthusiast"
    },
    {
      id: 2,
      name: "Rakesh K.",
      image: "https://images.pexels.com/photos/1043473/pexels-photo-1043473.jpeg?auto=compress&cs=tinysrgb&w=600",
      text: "Amazing service and absolutely delicious burgers. The staff was friendly and the delivery was super fast!",
      rating: 4,
      position: "Regular Customer"
    },
    {
      id: 3,
      name: "Sarah P.",
      image: "https://images.unsplash.com/photo-1542190891-2093d38760f2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fG1hbGV8ZW58MHx8MHx8fDA%3D",
      text: "The burgers were absolutely phenomenal, and the service was top-notch! Perfect combination of taste and quality.",
      rating: 5,
      position: "Food Blogger"
    },
    {
      id: 4,
      name: "Michael R.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bWFsZXxlbnwwfHwwfHx8MA%3D%3D",
      text: "Outstanding flavors and premium ingredients. This is what a perfect burger should taste like!",
      rating: 5,
      position: "Chef"
    },
    {
      id: 5,
      name: "Emma L.",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b5bc?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d29tYW58ZW58MHx8MHx8fDA%3D",
      text: "Fresh ingredients, amazing taste, and excellent presentation. Burger Hut never disappoints!",
      rating: 5,
      position: "Nutritionist"
    },
    {
      id: 6,
      name: "David M.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bWFsZXxlbnwwfHwwfHx8MA%3D%3D",
      text: "The best burger experience in town! Great atmosphere, friendly staff, and incredible food quality.",
      rating: 4,
      position: "Business Owner"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const testimonialsPerPage = 3;
  const totalPages = Math.ceil(testimonials.length / testimonialsPerPage);

  const showNextTestimonials = () => {
    setCurrentIndex((prev) => (prev + 1) % totalPages);
  };

  const getCurrentTestimonials = () => {
    const start = currentIndex * testimonialsPerPage;
    const end = start + testimonialsPerPage;
    return testimonials.slice(start, end);
  };

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-br from-slate-50 via-cyan-50 to-blue-50 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-cyan-400/20 to-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-br from-purple-400/20 to-indigo-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-br from-emerald-400/10 to-teal-500/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Enhanced Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-cyan-600 to-blue-600 text-white px-8 py-3 rounded-full text-sm font-bold mb-6 animate-bounce shadow-lg">
            <span className="text-2xl">💬</span>
            <span className="text-lg font-black">CUSTOMER REVIEWS</span>
            <span className="text-2xl">⭐</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black bg-gradient-to-r from-slate-900 via-cyan-800 to-blue-900 bg-clip-text text-transparent mb-6">
            What Our Customers Say
          </h2>
          
          <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed font-medium">
            Don't just take our word for it - hear from our satisfied customers who love our delicious burgers and exceptional service
          </p>
          
          <div className="flex justify-center items-center gap-4 mt-8">
            <div className="w-32 h-1 bg-gradient-to-r from-transparent via-cyan-500 to-transparent rounded-full"></div>
            <div className="w-3 h-3 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full animate-pulse"></div>
            <div className="w-32 h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent rounded-full"></div>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="relative">
          {/* Testimonials Container */}
          <div className="overflow-hidden">
            <div 
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 transition-all duration-500 ease-in-out"
              style={{ transform: `translateX(0%)` }}
            >
              {getCurrentTestimonials().map((testimonial, index) => (
            <div
              key={testimonial.id}
              className="group relative bg-white/80 backdrop-blur-xl rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-700 overflow-hidden border border-white/30 transform hover:scale-105 hover:-rotate-1"
              style={{ 
                animationDelay: `${index * 150}ms`,
                animation: 'fadeInUp 0.8s ease-out forwards'
              }}
            >
              {/* Glow Effect */}
              <div className="absolute -inset-1 bg-gradient-to-br from-cyan-500/30 via-blue-500/30 to-purple-500/30 rounded-3xl opacity-0 group-hover:opacity-100 blur-xl transition-all duration-500"></div>
              
              {/* Header Gradient */}
              <div className="h-2 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500"></div>
              
              <div className="relative p-6 lg:p-8">
                {/* Quote Icon */}
                <div className="absolute top-4 right-6">
                  <div className="w-8 h-8 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full flex items-center justify-center opacity-20 group-hover:opacity-40 transition-opacity duration-300">
                    <span className="text-white text-lg font-black">"</span>
                  </div>
                </div>

                {/* Customer Image */}
                <div className="flex items-start gap-4 mb-6">
                  <div className="relative">
                    <div className="absolute -inset-1 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full opacity-60 blur-sm group-hover:opacity-80 transition-opacity duration-300"></div>
                    <img
                      src={testimonial.image}
                      alt={`Customer ${testimonial.name}`}
                      className="relative w-16 h-16 md:w-18 md:h-18 lg:w-20 lg:h-20 rounded-full object-cover border-3 border-white shadow-lg transform group-hover:scale-110 transition-transform duration-300"
                      onError={(e) => {
                        e.target.src = 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bWFsZXxlbnwwfHwwfHx8MA%3D%3D';
                      }}
                    />
                  </div>
                  
                  <div className="flex-1">
                    <h4 className="text-lg md:text-xl font-black text-slate-800 group-hover:text-cyan-700 transition-colors duration-300">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm md:text-base text-slate-500 font-semibold">
                      {testimonial.position}
                    </p>
                  </div>
                </div>

                {/* Review Text */}
                <blockquote className="text-slate-700 text-base md:text-lg leading-relaxed mb-6 font-medium italic">
                  "{testimonial.text}"
                </blockquote>

                {/* Rating Stars */}
                <div className="flex items-center justify-between">
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <div
                        key={i}
                        className={`transition-all duration-300 transform hover:scale-125 ${
                          i < testimonial.rating 
                            ? 'text-amber-400 animate-pulse' 
                            : 'text-slate-300'
                        }`}
                      >
                        <svg
                          className="w-5 h-5 md:w-6 md:h-6"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927a.25.25 0 01.451 0l2.618 5.29a.25.25 0 00.19.136l5.824.846a.25.25 0 01.138.426l-4.214 4.106a.25.25 0 00-.072.222l1 5.811a.25.25 0 01-.363.263L10 17.012l-5.217 2.74a.25.25 0 01-.363-.263l1-5.811a.25.25 0 00-.072-.222L1.134 9.625a.25.25 0 01.138-.426l5.824-.846a.25.25 0 00.19-.136l2.618-5.29z" />
                        </svg>
                      </div>
                    ))}
                  </div>
                  
                  <div className="text-sm font-bold text-slate-600">
                    {testimonial.rating}/5 ⭐
                  </div>
                </div>

                {/* Decorative Elements */}
                <div className="absolute bottom-3 left-6">
                  <div className="flex gap-2">
                    <div className="w-2 h-2 bg-cyan-400/40 rounded-full animate-ping"></div>
                    <div className="w-1.5 h-1.5 bg-blue-400/40 rounded-full animate-ping delay-300"></div>
                    <div className="w-1 h-1 bg-purple-400/40 rounded-full animate-ping delay-600"></div>
                  </div>
                </div>

                {/* Shimmer Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 rounded-3xl"></div>
              </div>
            </div>
              ))}
            </div>
          </div>

          {/* Next Button */}
          <div className="flex justify-center mt-12">
            <button
              onClick={showNextTestimonials}
              className="group bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 hover:from-cyan-600 hover:via-blue-700 hover:to-purple-700 text-white font-black py-4 px-8 rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl text-lg flex items-center gap-3"
            >
              <span>View More Reviews</span>
              <svg className="w-6 h-6 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Progress Indicator */}
          <div className="flex justify-center items-center gap-2 mt-6">
            <span className="text-sm text-slate-600 font-medium">
              Showing {currentIndex + 1} of {totalPages} sets
            </span>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-br from-white/90 to-cyan-50/90 backdrop-blur-xl rounded-3xl p-8 lg:p-12 shadow-2xl border border-white/30 max-w-4xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-black bg-gradient-to-r from-slate-800 to-cyan-700 bg-clip-text text-transparent mb-4">
              Join Our Happy Customers!
            </h3>
            <p className="text-lg text-slate-600 mb-8 font-medium">
              Experience the taste that everyone's talking about. Order your perfect burger today!
            </p>
            <button className="bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 hover:from-cyan-600 hover:via-blue-700 hover:to-purple-700 text-white font-black py-4 px-10 rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl text-lg">
              Order Now & Leave Your Review! 🍔
            </button>
          </div>
        </div>
      </div>

      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
}
