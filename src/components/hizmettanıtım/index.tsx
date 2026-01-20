'use client';
import React from 'react';
import { motion } from 'framer-motion';

const MovingServicesSection = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      viewport={{ once: true, amount: 0.3 }}
      className="bg-white w-full py-20 px-4 border-y border-slate-100"
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">

        {/* Yazı Alanı */}
        <motion.div
          className="md:w-1/2 text-left"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-50 to-cyan-50 border border-blue-200 rounded-full px-5 py-2 mb-6">
            <svg className="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
              <path d="M8 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
              <path d="M3 4a1 1 0 00-1 1v10a1 1 0 001 1h1.05a2.5 2.5 0 014.9 0H10a1 1 0 001-1V5a1 1 0 00-1-1H3zM14 7a1 1 0 00-1 1v6.05A2.5 2.5 0 0115.95 16H17a1 1 0 001-1v-5a1 1 0 00-.293-.707l-2-2A1 1 0 0015 7h-1z" />
            </svg>
            <span className="text-sm font-bold text-blue-900">TİCARİ TAŞIMACILIK</span>
          </div>

          <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-6 leading-tight">
            İstediğiniz Yerden Oraya <br />
            <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
              Ticari Taşımacılık
            </span>
          </h2>

          <div className="space-y-4 mb-8">
            <p className="text-slate-700 text-base md:text-lg leading-relaxed">
              Taşınmak zahmetli olmak zorunda değil. Akr Ticaret olarak hem fiziksel hem de planlama açısından tüm yükünüzü üstleniyoruz.
            </p>
            <p className="text-slate-600 leading-relaxed">
              Taşınma sürecinizi baştan sona organize ederek zaman, maliyet ve stres faktörlerini en aza indiriyoruz.
              AKR Nakliyat olarak, eşyalarınıza kendi eşyamız gibi özen gösteriyor; dikkatli, hızlı ve güvenli taşımacılık sunuyoruz.
            </p>
          </div>

          <div className="flex flex-wrap gap-4">
            <a
              href="tel:05491750025"
              className="bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white px-8 py-3.5 rounded-xl font-bold transition-all duration-300 inline-flex items-center gap-2 shadow-lg hover:shadow-xl transform hover:scale-105"
              title="Telefon ile ara"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Hemen Bizi Arayın
            </a>
            <a
              href="/iletisim"
              className="border-2 border-slate-300 hover:border-blue-500 text-slate-900 hover:bg-blue-50 px-8 py-3.5 rounded-xl font-bold transition-all duration-300 inline-block"
            >
              Teklif Al
            </a>
          </div>
        </motion.div>

        {/* Görsel Alanı */}
        <motion.div
          className="md:w-1/2 flex justify-center"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="relative">
            <div className="absolute -inset-6 bg-gradient-to-r from-blue-200 to-cyan-200 rounded-3xl blur-3xl opacity-20" />
            <img
              src="akarkamyonlar.webp"
              alt="AKR Nakliyat araçları"
              className="relative w-full max-w-md rounded-2xl shadow-2xl"
            />
          </div>
        </motion.div>

      </div>
    </motion.section>
  );
};

export default MovingServicesSection;
