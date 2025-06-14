"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const FleetSafetyBox = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.3 }}
      className="w-full px-4 py-16 flex justify-center bg-white"
    >
      <div className="bg-white rounded-xl shadow-md px-6 py-8 md:px-10 md:py-10 max-w-5xl w-full flex flex-col md:flex-row items-center md:items-center gap-6">

        <div className="w-full md:w-1/2 text-center md:text-left">
          <h4 className="text-xl md:text-3xl lg:text-4xl font-semibold text-center md:text-left text-transparent bg-clip-text bg-gradient-to-r from-[#005388] to-[#00aaff] drop-shadow-sm mb-4">
            Eşyalarınız Güvende, <br className="hidden md:block" />
            <span className="text-[#005388]">AKR Nakliyat Yanınızda</span>
          </h4>

          <p className="text-gray-700 text-sm md:text-base mb-6">
            Her taşıma süreci bizim için bir sorumluluk demektir. AKR Nakliyat
            olarak tüm araçlarımızı düzenli olarak kontrol eder, personelimizi
            titizlikle seçer ve eşyalarınızı en güvenli şekilde taşırız. Size
            sadece taşınmanın keyfini yaşamak kalır.
          </p>

          <Link
            title="ücretsiz teklif akrticaret"
            href="/iletisim"
            className="bg-[#0066a1] hover:bg-[#005388] text-white font-medium text-sm md:text-base px-6 py-2.5 rounded transition inline-block"
          >
            Ücretsiz Fiyat Teklifi Al
          </Link>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="w-full md:w-1/2 flex justify-center md:justify-end"
        >
          <img
            src="truckk.webp"
            alt="Nakliye Aracı"
            className="w-[250px] md:w-[320px] h-auto object-contain"
          />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default FleetSafetyBox;
