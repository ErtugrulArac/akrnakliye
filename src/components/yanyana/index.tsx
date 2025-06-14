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
      className="scroll-mt-[100px] flex flex-col-reverse lg:flex-row items-center justify-center w-full lg:w-[90%] xl:w-[80%] m-auto mt-20 gap-60 max-md:gap-16 px-4 bg-white"
    >
      {/* Görsel Alanı */}
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: true }}
        className="w-full lg:w-1/2 flex justify-center"
      >
        <img
          src="akryanfoto.webp"
          alt="Nakliyat Süreci"
          className="w-[550px] max-w-full rounded-md object-contain"
        />
      </motion.div>

      {/* Metin ve Adımlar */}
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        viewport={{ once: true }}
        className="w-full lg:w-1/2 text-gray-800 flex flex-col gap-6"
      >
        <h2 className="text-4xl max-xl:text-3xl max-md:text-2xl font-extrabold font-fontpopins">
          AKR Nakliyat ile Güvenli <br /> Taşımacılık Sürecinin Adımları
        </h2>

        <ul className="flex flex-col gap-4 mt-4">
          {[
            "Ücretsiz keşif hizmetiyle eşyalarınız analiz edilir.",
            "Size özel taşıma planı hazırlanır ve tarih belirlenir.",
            "Eşyalarınız profesyonelce paketlenir ve hazırlanır.",
            "Güvenli şekilde yükleme yapılır ve yeni adrese taşınır.",
            "Kurulum ve yerleştirme işlemleri tamamlanır, işlem sonlandırılır.",
          ].map((item, index) => (
            <li key={index} className="flex items-start gap-3">
              <BsArrowRightSquareFill className="text-[#0a4f70] text-xl mt-1" />
              <p className="text-lg opacity-90">{item}</p>
            </li>
          ))}
        </ul>

        <a
          href="/iletisim"
          title="Nakliyat Teklif Formu"
          className="w-max px-7 py-2 rounded-xl font-semibold bg-[#0a4f70] hover:bg-[#083d57] text-white whitespace-nowrap text-base xl:text-lg mt-3"
        >
          Ücretsiz Teklif Alın
        </a>
      </motion.div>
    </motion.section>
  );
};

export default NakliyeSteps;
