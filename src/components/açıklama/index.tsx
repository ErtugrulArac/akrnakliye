'use client';

import React from 'react';
import { motion } from 'framer-motion';

const features = [
  {
    title: 'Eksiksiz Teslimatlar',
    text: 'Tüm taşımacılık süreçlerinde tam zamanında ve sorunsuz teslimat garantisi sunuyoruz.',
    icon: (
      <svg className="w-12 h-12 mx-auto text-red-500" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path d="M9 12l2 2l4 -4" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M3 12a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: 'Mutlu Müşteriler',
    text: 'Yüksek memnuniyet oranımız ile müşterilerimizin güvenini kazanıyor, sürdürülebilir iş ilişkileri kuruyoruz.',
    icon: (
      <svg className="w-12 h-12 mx-auto text-red-500" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path d="M12 21c-4 -1 -7 -4 -7 -7v-2a5 5 0 0 1 10 0v2c0 3 -3 6 -7 7z" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="12" cy="7" r="3" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: 'Zamanında Hizmet',
    text: 'Gelişmiş rota ve takip sistemimiz ile tüm gönderileriniz tam zamanında teslim edilir.',
    icon: (
      <svg className="w-12 h-12 mx-auto text-red-500" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path d="M12 7v5l3 3" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="12" cy="12" r="9" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: 'Hızlı ve Güvenli Taşımacılık',
    text: 'Modern araç filomuzla hızlı, güvenli ve sigortalı taşımacılık çözümleri sunuyoruz.',
    icon: (
      <svg className="w-12 h-12 mx-auto text-red-500" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path d="M3 12h3m0 0h13a3 3 0 0 1 3 3v3h-3a3 3 0 0 1 -3 -3v-3z" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M3 9h6m-6 -3h9" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
];

const FeaturesSection = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      viewport={{ once: true, amount: 0.3 }}
      className="bg-white w-full py-16 px-4"
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">
        {/* Görsel */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          viewport={{ once: true }}
          className="w-full md:w-1/2 flex justify-center"
        >
          <img
            src="akrticaretgif.gif"
            alt="AKR Nakliyat Tır"
            className="w-[300px] md:w-[400px] object-contain"
          />
        </motion.div>

        {/* Özellikler */}
        <div className="w-full md:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-8 text-center">
          {features.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              viewport={{ once: true }}
            >
              <div>{item.icon}</div>
              <h4 className="mt-4 font-semibold text-lg">{item.title}</h4>
              <p className="text-sm text-gray-600 mt-2">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default FeaturesSection;
