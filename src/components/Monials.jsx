// src/components/Testimonials.js
import React from 'react';

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-12 bg-gray-200">
      <h3 className="text-3xl text-center font-bold mb-8">Customer Reviews</h3>
      <div className="container mx-auto px-4 md:px-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Example Testimonial 1 */}
        <div className="bg-white p-6 rounded-lg shadow-md hover:-translate-y-2 hover:shadow-lg transition-transform duration-300 flex items-center space-x-4">
          {/* Image Section */}
          <img
            src="https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="Customer Alex T."
            className="w-16 h-16 md:w-20 md:h-20 rounded-full object-cover"
          />
          {/* Text and Rating Section */}
          <div>
            <p className="text-sm md:text-base">“Best burger I’ve ever had! Will definitely order again!”</p>
            <p className="text-right mt-2 font-semibold text-sm md:text-base">- Alex T.</p>
            <div className="flex mt-2">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  className="w-4 h-4 md:w-5 md:h-5 text-yellow-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927a.25.25 0 01.451 0l2.618 5.29a.25.25 0 00.19.136l5.824.846a.25.25 0 01.138.426l-4.214 4.106a.25.25 0 00-.072.222l1 5.811a.25.25 0 01-.363.263L10 17.012l-5.217 2.74a.25.25 0 01-.363-.263l1-5.811a.25.25 0 00-.072-.222L1.134 9.625a.25.25 0 01.138-.426l5.824-.846a.25.25 0 00.19-.136l2.618-5.29z" />
                </svg>
              ))}
            </div>
          </div>
        </div>

        {/* Example Testimonial 2 */}
        <div className="bg-white p-6 rounded-lg shadow-md hover:-translate-y-2 hover:shadow-lg transition-transform duration-300 flex items-center space-x-4">
          <img
            src="https://images.pexels.com/photos/1043473/pexels-photo-1043473.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="Customer Sarah P."
            className="w-16 h-16 md:w-20 md:h-20 rounded-full object-cover"
          />
          <div>
            <p className="text-sm md:text-base">“Amazing service and delicious burgers. Highly recommend!”</p>
            <p className="text-right mt-2 font-semibold text-sm md:text-base">- Rakesh .</p>
            <div className="flex mt-2">
              {[...Array(4)].map((_, i) => (
                <svg
                  key={i}
                  className="w-4 h-4 md:w-5 md:h-5 text-yellow-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927a.25.25 0 01.451 0l2.618 5.29a.25.25 0 00.19.136l5.824.846a.25.25 0 01.138.426l-4.214 4.106a.25.25 0 00-.072.222l1 5.811a.25.25 0 01-.363.263L10 17.012l-5.217 2.74a.25.25 0 01-.363-.263l1-5.811a.25.25 0 00-.072-.222L1.134 9.625a.25.25 0 01.138-.426l5.824-.846a.25.25 0 00.19-.136l2.618-5.29z" />
                </svg>
              ))}
              <svg
                className="w-4 h-4 md:w-5 md:h-5 text-gray-300"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927a.25.25 0 01.451 0l2.618 5.29a.25.25 0 00.19.136l5.824.846a.25.25 0 01.138.426l-4.214 4.106a.25.25 0 00-.072.222l1 5.811a.25.25 0 01-.363.263L10 17.012l-5.217 2.74a.25.25 0 01-.363-.263l1-5.811a.25.25 0 00-.072-.222L1.134 9.625a.25.25 0 01.138-.426l5.824-.846a.25.25 0 00.19-.136l2.618-5.29z" />
              </svg>
            </div>
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md hover:-translate-y-2 hover:shadow-lg transition-transform duration-300 flex items-center space-x-4">
          <img
            src="https://images.unsplash.com/photo-1542190891-2093d38760f2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fG1hbGV8ZW58MHx8MHx8fDA%3D"
            alt="Customer Sarah P."
            className="w-16 h-16 md:w-20 md:h-20 rounded-full object-cover"
          />
          <div>
            <p className="text-sm md:text-base">“The burgers were absolutely phenomenal, and the service was top-notch!”</p>
            <p className="text-right mt-2 font-semibold text-sm md:text-base">- Sarah P.</p>
            <div className="flex mt-2">
              {[...Array(4)].map((_, i) => (
                <svg
                  key={i}
                  className="w-4 h-4 md:w-5 md:h-5 text-yellow-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927a.25.25 0 01.451 0l2.618 5.29a.25.25 0 00.19.136l5.824.846a.25.25 0 01.138.426l-4.214 4.106a.25.25 0 00-.072.222l1 5.811a.25.25 0 01-.363.263L10 17.012l-5.217 2.74a.25.25 0 01-.363-.263l1-5.811a.25.25 0 00-.072-.222L1.134 9.625a.25.25 0 01.138-.426l5.824-.846a.25.25 0 00.19-.136l2.618-5.29z" />
                </svg>
              ))}
              <svg
                className="w-4 h-4 md:w-5 md:h-5 text-gray-300"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927a.25.25 0 01.451 0l2.618 5.29a.25.25 0 00.19.136l5.824.846a.25.25 0 01.138.426l-4.214 4.106a.25.25 0 00-.072.222l1 5.811a.25.25 0 01-.363.263L10 17.012l-5.217 2.74a.25.25 0 01-.363-.263l1-5.811a.25.25 0 00-.072-.222L1.134 9.625a.25.25 0 01.138-.426l5.824-.846a.25.25 0 00.19-.136l2.618-5.29z" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}




