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
      className="bg-gradient-to-b from-white via-slate-50 to-white w-full py-20 px-4"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-50 to-blue-50 border border-cyan-200 rounded-full px-6 py-2 mb-4">
            <div className="w-2 h-2 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full animate-pulse" />
            <span className="text-sm font-bold text-cyan-900">ÖZELLİKLERİMİZ</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-3">Neden AKR Lojistik?</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">Profesyonel ekibimiz ve modern araç filomuzla güvenilir hizmet sunuyoruz</p>
        </motion.div>

        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Görsel */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            viewport={{ once: true }}
            className="w-full md:w-1/2 flex justify-center"
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-cyan-200 to-blue-200 rounded-3xl blur-2xl opacity-20" />
              <img
                src="akrticaretgif.gif"
                alt="AKR Nakliyat Tır"
                className="relative w-[300px] md:w-[400px] object-contain"
              />
            </div>
          </motion.div>

          {/* Özellikler */}
          <div className="w-full md:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {features.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                viewport={{ once: true }}
                whileHover={{ y: -8, boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }}
                className="bg-white border-2 border-slate-200 rounded-2xl p-6 hover:border-cyan-300 transition-all duration-300 group"
              >
                <div className="mb-3 group-hover:scale-110 transition-transform duration-300">{item.icon}</div>
                <h4 className="font-bold text-lg text-slate-900 mb-2">{item.title}</h4>
                <p className="text-sm text-slate-600 leading-relaxed">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default FeaturesSection;
