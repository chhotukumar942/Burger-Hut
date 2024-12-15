// src/components/Contact.js
import React from 'react';

export default function Contact() {
  return (
    <section id="contact" className="py-12 bg-gray-900 text-white">
      <h3 className="text-3xl text-center font-bold mb-8">
        Contact Us
      </h3>
      <div className="container mx-auto px-4 md:px-8 lg:px-16 max-w-md md:max-w-2xl lg:max-w-4xl">
        <form className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input 
              type="text" 
              placeholder="Name" 
              className="w-full p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
            />
            <input 
              type="email" 
              placeholder="Email" 
              className="w-full p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
            />
          </div>
          <textarea 
            placeholder="Message" 
            className="w-full p-3 rounded-lg h-32 focus:outline-none focus:ring-2 focus:ring-yellow-500"
          ></textarea>
          <div className="flex justify-center">
            <button 
              type="submit" 
              className="bg-yellow-500 px-8 py-3 rounded-full font-semibold hover:translate-y-1 hover:bg-yellow-300 hover:text-black transition duration-300"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
