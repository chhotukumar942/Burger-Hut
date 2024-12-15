// src/components/Services.js
import React, { useEffect, useRef, useState } from 'react';

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
      className="py-12 cursor-pointer bg-gray-100"
    >
      <h3 className="text-3xl text-center font-bold mb-8">Our Services</h3>
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4 sm:px-0">
        {/* Service 1 */}
        <div
          className={`bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-500 transform hover:-translate-y-6 ${
            isVisible
              ? 'opacity-100 translate-y-0 scale-100'
              : 'opacity-0 translate-y-4 scale-95'
          } flex flex-col items-center`}
        >
          <div className="text-yellow-500 text-5xl mb-4">
            {/* Home Delivery Icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
              className="w-12 h-12"
            >
              <path d="M9 3a1 1 0 1 1 2 0v1h2V3a1 1 0 1 1 2 0v1h.586A2.5 2.5 0 0 1 18 6.5v9.086A2.5 2.5 0 0 1 16.5 18H4a1 1 0 0 1-1-1V7.5A2.5 2.5 0 0 1 5.5 5H7V4a1 1 0 1 1 2 0v1h2V4zm6 6.5a1.5 1.5 0 0 1-3 0V9h-1.5a1 1 0 0 0 0 2H12v.5a1.5 1.5 0 0 1 3 0v2a1 1 0 0 0 2 0v-5a1 1 0 0 0-1-1h-1v1.5zm-8 1h1.5a1.5 1.5 0 1 1 0 3H7v-3zm6 7.5a3.5 3.5 0 1 0 7 0h-7z" />
            </svg>
          </div>
          <h4 className="text-xl font-semibold mb-2">Home Delivery</h4>
          <p className="text-center">
            We deliver fresh burgers right to your doorstep!
          </p>
        </div>

        {/* Service 2 */}
        <div
          className={`bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-500 transform hover:-translate-y-6 ${
            isVisible
              ? 'opacity-100 translate-y-0 scale-100'
              : 'opacity-0 translate-y-4 scale-95'
          } flex flex-col items-center`}
        >
          <div className="text-green-500 text-5xl mb-4">
            {/* Fresh Ingredients Icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
              className="w-12 h-12"
            >
              <path d="M4.5 6.5A1.5 1.5 0 0 1 6 5h5a3 3 0 1 1 0 6H6A1.5 1.5 0 0 1 4.5 9.5zm11 0A1.5 1.5 0 0 1 17 5h2.5a1.5 1.5 0 0 1 0 3H17a1.5 1.5 0 0 1-1.5-1.5zm.5 3h1.5a1.5 1.5 0 1 1 0 3H16a1.5 1.5 0 1 1 0-3z" />
            </svg>
          </div>
          <h4 className="text-xl font-semibold mb-2">Fresh Ingredients</h4>
          <p className="text-center">
            Only the freshest ingredients go into our burgers.
          </p>
        </div>

        {/* Service 3 */}
        <div
          className={`bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-500 transform hover:-translate-y-6 ${
            isVisible
              ? 'opacity-100 translate-y-0 scale-100'
              : 'opacity-0 translate-y-4 scale-95'
          } flex flex-col items-center`}
        >
          <div className="text-blue-500 text-5xl mb-4">
            {/* Fast Service Icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
              className="w-12 h-12"
            >
              <path d="M3 12a9 9 0 0 1 18 0 9 9 0 0 1-18 0zm6-1a1 1 0 1 1 2 0v2h2a1 1 0 1 1 0 2H9a1 1 0 0 1-1-1v-2z" />
            </svg>
          </div>
          <h4 className="text-xl font-semibold mb-2">Fast Service</h4>
          <p className="text-center">
            Enjoy quick and friendly service every time.
          </p>
        </div>
      </div>
    </section>
  );
}
