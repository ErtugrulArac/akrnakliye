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
      className="bg-white w-full py-16 px-4"
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">

        {/* Yazı Alanı */}
        <motion.div
          className="md:w-1/2 text-left"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-6 leading-tight">
            İstediğiniz Yerden Oraya <br />
            <span className="bg-gradient-to-r from-blue-600 to-cyan-400 bg-clip-text text-transparent">
              Ticari Taşımacılık
            </span>
          </h2>

          <p className="text-gray-600 mb-6 text-sm md:text-base leading-relaxed">
            Taşınmak zahmetli olmak zorunda değil. Akr Ticaret olarak hem fiziksel hem de planlama açısından tüm yükünüzü üstleniyoruz.
            Taşınma sürecinizi baştan sona organize ederek zaman, maliyet ve stres faktörlerini en aza indiriyoruz.
            AKR Nakliyat olarak, eşyalarınıza kendi eşyamız gibi özen gösteriyor; dikkatli, hızlı ve güvenli taşımacılık sunuyoruz.
          </p>

          <a
            href="tel:05491750025"
            className="bg-gradient-to-r from-blue-900 to-cyan-400 text-white px-6 py-2 rounded-md transition inline-block"
            title="Telefon ile ara"
          >
            Hemen Bizi Arayın
          </a>
        </motion.div>

        {/* Görsel Alanı */}
        <motion.div
          className="md:w-1/2 flex justify-center"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <img
            src="akarkamyonlar.webp"
            alt="AKR Nakliyat araçları"
            className="w-full max-w-md"
          />
        </motion.div>

      </div>
    </motion.section>
  );
};

export default MovingServicesSection;
