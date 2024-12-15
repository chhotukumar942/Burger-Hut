import React from 'react';

export default function Footer() {
  return (
    <>
      <hr />
      <div className="bg-[#111827]">
        <footer className="bg-gray-900 text-white p-4 flex flex-col md:flex-row justify-center items-center h-auto md:h-28 text-center gap-4 md:gap-8 text-sm sm:text-base md:text-lg lg:text-xl font-bold ">
          {/* Copyright Section */}
          <p className="">
            © 2024 Burger Hut. All rights reserved.
          </p>

          {/* Developer Credit */}
          <p className="">
           Design & Developed By: <span className="text-yellow-400">Chhotu Kumar </span>
          </p>
        </footer>
      </div>
    </>
  );
}


