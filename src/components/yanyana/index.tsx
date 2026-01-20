"use client";

import React from "react";
import { BsArrowRightSquareFill } from "react-icons/bs";
import { motion } from "framer-motion";

const NakliyeSteps = () => {
  return (
    <motion.section
      id="tasima-adimlari"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.2 }}
      className="scroll-mt-[100px] flex flex-col-reverse lg:flex-row items-center justify-center w-full lg:w-[90%] xl:w-[80%] m-auto py-20 gap-16 px-4 bg-white"
    >
      {/* Görsel Alanı */}
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: true }}
        className="w-full lg:w-1/2 flex justify-center"
      >
        <div className="relative">
          <div className="absolute -inset-8 bg-gradient-to-br from-blue-200 via-cyan-200 to-indigo-200 rounded-3xl blur-3xl opacity-25" />
          <img
            src="akryanfoto.webp"
            alt="Nakliyat Süreci"
            className="relative w-[550px] max-w-full rounded-3xl shadow-2xl object-contain"
          />
        </div>
      </motion.div>

      {/* Metin ve Adımlar */}
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        viewport={{ once: true }}
        className="w-full lg:w-1/2 text-gray-800 flex flex-col gap-8"
      >
        <div>
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-50 to-cyan-50 border border-blue-200 rounded-full px-5 py-2 mb-4">
            <svg className="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
            </svg>
            <span className="text-sm font-bold text-blue-900">SÜREÇ ADIMLARI</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 leading-tight">
            AKR Nakliyat ile Güvenli <br />
            <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
              Taşımacılık Sürecinin Adımları
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-2">
          {[
            { title: "Keşif & Analiz", text: "Ücretsiz keşif ile eşyalarınız ve rota analiz edilir.", icon: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" },
            { title: "Plan & Tarih", text: "Size özel plan ve uygun teslim tarihi netleştirilir.", icon: "M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" },
            { title: "Paketleme", text: "Eşyalarınız profesyonelce paketlenir, güvenliğe alınır.", icon: "M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" },
            { title: "Yükleme & Taşıma", text: "Araçlara güvenli yükleme ve zamanında teslimat yapılır.", icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" },
            { title: "Kurulum & Teslim", text: "Yeni adreste kurulum, yerleştirme ve teslim onayı alınır.", icon: "M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" },
            { title: "Son Kontrol & Rapor", text: "Teslim sonrası kontrol listesi ve müşteriye rapor sunulur.", icon: "M9 12l2 2 4-4m-6 8h6m-3-16v4m-7 6h.01M5 21h14a2 2 0 002-2v-5a2 2 0 00-2-2H5a2 2 0 00-2 2v5a2 2 0 002 2z" },
          ].map((item, index) => (
            <div key={index} className="flex items-start gap-4 border border-slate-200/70 rounded-2xl p-4 sm:p-5 hover:border-cyan-300 transition-all duration-300 group bg-white/40 backdrop-blur">
              <div className="flex-shrink-0 w-12 h-12 bg-white border border-slate-200 rounded-xl flex items-center justify-center group-hover:border-cyan-300 transition-colors duration-300">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={item.icon} />
                </svg>
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-xs font-black text-cyan-700 bg-cyan-50 border border-cyan-100 rounded-full px-3 py-1">ADIM {index + 1}</span>
                  <div className="h-px flex-1 bg-gradient-to-r from-cyan-300/70 to-transparent" />
                </div>
                <h4 className="text-lg font-bold text-slate-900 mb-1">{item.title}</h4>
                <p className="text-sm md:text-base text-slate-700 leading-relaxed">{item.text}</p>
              </div>
            </div>
          ))}
        </div>

        <a
          href="/iletisim"
          title="Nakliyat Teklif Formu"
          className="w-max px-10 py-4 rounded-xl font-bold bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white text-base xl:text-lg shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 inline-flex items-center gap-2"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
          Ücretsiz Teklif Alın
        </a>
      </motion.div>
    </motion.section>
  );
};

export default NakliyeSteps;
