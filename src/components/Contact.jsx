// src/components/Contact.js
import React, { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      alert('Message sent successfully!');
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
    }, 2000);
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800 relative overflow-hidden">
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
            <span className="text-2xl">📞</span>
            <span className="text-lg font-black">GET IN TOUCH</span>
            <span className="text-2xl">✉️</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black bg-gradient-to-r from-white via-cyan-200 to-blue-200 bg-clip-text text-transparent mb-6">
            Contact Us
          </h2>
          
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed font-medium">
            Have questions, feedback, or want to place a special order? We'd love to hear from you!
          </p>
          
          <div className="flex justify-center items-center gap-4 mt-8">
            <div className="w-32 h-1 bg-gradient-to-r from-transparent via-cyan-500 to-transparent rounded-full"></div>
            <div className="w-3 h-3 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full animate-pulse"></div>
            <div className="w-32 h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent rounded-full"></div>
          </div>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Contact Form */}
          <div>
            <div className="bg-gradient-to-br from-white/10 to-cyan-50/5 backdrop-blur-xl rounded-3xl p-8 lg:p-10 shadow-2xl border border-white/20">
              <h3 className="text-2xl md:text-3xl font-black text-white mb-8">
                Send Us a Message
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name and Email Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="group">
                    <label className="block text-cyan-300 text-sm font-bold mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Enter your full name"
                      required
                      className="w-full p-4 bg-white/10 border-2 border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-4 focus:ring-cyan-500/30 focus:border-cyan-500 transition-all duration-300 group-hover:border-cyan-400"
                    />
                  </div>
                  
                  <div className="group">
                    <label className="block text-cyan-300 text-sm font-bold mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Enter your email"
                      required
                      className="w-full p-4 bg-white/10 border-2 border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-4 focus:ring-cyan-500/30 focus:border-cyan-500 transition-all duration-300 group-hover:border-cyan-400"
                    />
                  </div>
                </div>

                {/* Phone and Subject Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="group">
                    <label className="block text-emerald-300 text-sm font-bold mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Enter your phone number"
                      className="w-full p-4 bg-white/10 border-2 border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-4 focus:ring-emerald-500/30 focus:border-emerald-500 transition-all duration-300 group-hover:border-emerald-400"
                    />
                  </div>
                  
                  <div className="group">
                    <label className="block text-emerald-300 text-sm font-bold mb-2">
                      Subject
                    </label>
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full p-4 bg-white/10 border-2 border-white/20 rounded-xl text-white focus:outline-none focus:ring-4 focus:ring-emerald-500/30 focus:border-emerald-500 transition-all duration-300 group-hover:border-emerald-400"
                    >
                      <option value="" className="bg-gray-800">Select a subject</option>
                      <option value="general" className="bg-gray-800">General Inquiry</option>
                      <option value="order" className="bg-gray-800">Order Related</option>
                      <option value="feedback" className="bg-gray-800">Feedback</option>
                      <option value="complaint" className="bg-gray-800">Complaint</option>
                      <option value="catering" className="bg-gray-800">Catering Services</option>
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div className="group">
                  <label className="block text-purple-300 text-sm font-bold mb-2">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us what's on your mind..."
                    required
                    rows="6"
                    className="w-full p-4 bg-white/10 border-2 border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-4 focus:ring-purple-500/30 focus:border-purple-500 transition-all duration-300 resize-none group-hover:border-purple-400"
                  ></textarea>
                </div>

                {/* Submit Button */}
                <div className="text-center pt-4">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 hover:from-cyan-600 hover:via-blue-700 hover:to-purple-700 disabled:from-gray-500 disabled:to-gray-600 text-white font-black py-4 px-12 rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl text-lg disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <div className="flex items-center gap-3">
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                        Sending Message...
                      </div>
                    ) : (
                      <div className="flex items-center gap-3">
                        <span>Send Message</span>
                        <span className="text-xl">🚀</span>
                      </div>
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-br from-white/10 to-cyan-50/5 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-white/20 max-w-4xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-black bg-gradient-to-r from-white to-cyan-200 bg-clip-text text-transparent mb-4">
              Quick Response Guarantee
            </h3>
            <p className="text-lg text-gray-300 mb-6 font-medium">
              We typically respond to all inquiries within 24 hours. For urgent matters, please call us directly!
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 px-6 py-3 rounded-full border border-green-400/30">
                <span className="text-green-300 font-bold">✓ 24/7 Customer Support</span>
              </div>
              <div className="bg-gradient-to-r from-blue-500/20 to-cyan-500/20 px-6 py-3 rounded-full border border-blue-400/30">
                <span className="text-blue-300 font-bold">✓ Fast Response Time</span>
              </div>
              <div className="bg-gradient-to-r from-purple-500/20 to-indigo-500/20 px-6 py-3 rounded-full border border-purple-400/30">
                <span className="text-purple-300 font-bold">✓ Professional Service</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
