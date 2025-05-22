'use client';

import React from 'react';

const LogisticsCTA = () => {
  return (
    <section className="w-full px-4 py-12 flex justify-center bg-white">
      <div className="w-full max-w-6xl bg-[#f0f8ff] rounded-xl p-6 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* SOL - METİN ALANI */}
        <div className="w-full md:w-1/2 text-left">
          <h2 className="text-2xl md:text-3xl font-bold text-[#0a4f70] mb-4 leading-snug">
            Ready to Revolutionize <br className="md:hidden" />
            Your Logistics Operations?
          </h2>
          <p className="text-gray-700 mb-6 text-sm md:text-base">
            Join countless other businesses that have streamlined their logistics
            with our cutting-edge solutions
          </p>
          <button className="bg-[#0a4f70] hover:bg-[#083d57] text-white font-medium px-6 py-2.5 rounded transition">
            Get a Free Quote
          </button>
        </div>

        {/* SAĞ - GÖRSEL ALANI */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-end">
          <img
            src="akrnakliyetır.png"
            alt="Truck"
            className="w-[280px] md:w-[420px] h-auto object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default LogisticsCTA;
