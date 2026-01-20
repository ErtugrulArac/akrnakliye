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
      className="w-full px-4 py-20 flex justify-center bg-gradient-to-b from-slate-50 to-white"
    >
      <div className="bg-white rounded-3xl border-2 border-slate-200 shadow-2xl px-8 py-12 md:px-12 md:py-14 max-w-5xl w-full flex flex-col md:flex-row items-center gap-10">

        <div className="w-full md:w-1/2 text-center md:text-left space-y-6">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-50 to-cyan-50 border border-blue-200 rounded-full px-5 py-2">
            <svg className="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span className="text-sm font-bold text-blue-900">GÜVENLİ TAŞIMACILIK</span>
          </div>

          <h4 className="text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 leading-tight">
            Eşyalarınız Güvende, <br className="hidden md:block" />
            <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
              AKR Nakliyat Yanınızda
            </span>
          </h4>

          <p className="text-slate-700 text-base md:text-lg leading-relaxed">
            Her taşıma süreci bizim için bir sorumluluk demektir. AKR Nakliyat
            olarak tüm araçlarımızı düzenli olarak kontrol eder, personelimizi
            titizlikle seçer ve eşyalarınızı en güvenli şekilde taşırız. Size
            sadece taşınmanın keyfini yaşamak kalır.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 pt-2">
            <Link
              title="ücretsiz teklif akrticaret"
              href="/iletisim"
              className="bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white font-semibold text-sm px-6 py-2.5 rounded-lg transition-all duration-300 inline-flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              <span className="whitespace-nowrap">Ücretsiz Fiyat Teklifi</span>
            </Link>
            <a
              href="tel:05491750025"
              className="border-2 border-slate-300 hover:border-blue-500 hover:bg-blue-50 text-slate-900 font-semibold text-sm px-6 py-2.5 rounded-lg transition-all duration-300 inline-flex items-center justify-center gap-2"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span className="whitespace-nowrap">Hemen Ara</span>
            </a>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="w-full md:w-1/2 flex justify-center md:justify-end"
        >
          <div className="relative">
            <div className="absolute -inset-6 bg-gradient-to-r from-blue-200 to-cyan-200 rounded-3xl blur-3xl opacity-30" />
            <img
              src="truckk.webp"
              alt="Nakliye Aracı"
              className="relative w-[250px] md:w-[350px] h-auto object-contain drop-shadow-2xl"
            />
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default FleetSafetyBox;
