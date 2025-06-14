'use client'

import React from 'react'
import Devam from "@/app/hakkimizda/devam"
import Misyon from "@/app/hakkimizda/misyon"
import { motion } from 'framer-motion'

export default function Hakkimizda() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
      viewport={{ once: true, amount: 0.2 }}
      className="px-4 md:px-20 py-28 bg-white"
    >
      {/* Başlık */}
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="flex items-center justify-center mb-12 relative"
      >
        <div className="absolute left-0 top-1/2 w-[30%] border-t-2 border-black hidden md:block" />
        <h2 className="text-3xl md:text-4xl font-bold z-10 bg-white text-amber-400 px-4">HAKKIMIZDA</h2>
        <div className="absolute right-0 top-1/2 w-[30%] border-t-2 border-black hidden md:block" />
      </motion.div>

      {/* İçerik */}
      <div className="flex flex-col md:flex-row items-center md:gap-36 max-md:gap-10 max-w-6xl mx-auto">
        {/* Görsel */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <div className="w-64 h-64 rounded-full bg-black flex items-center justify-center overflow-hidden">
            <img
              src="akrlogobeyaz.webp"
              alt="AKR Ticaret Görsel"
              className="w-40 h-auto object-contain"
            />
          </div>
        </motion.div>

        {/* Metin */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="max-w-xl text-gray-800 text-base max-md:text-center leading-relaxed"
        >
          <p className="font-semibold mb-4">
            10 yılı aşkın sektörel tecrübemizle yola çıktık. Amacımız basit: Hızlı, güvenilir ve kaliteli ticaret çözümleri sunmak.
          </p>
          <p className="mb-4">
            Zamanla büyüyen müşteri portföyümüzle birlikte hizmet alanlarımızı da genişlettik. Artık sadece alım-satım değil, aynı zamanda nakliye desteği de sunuyoruz.
          </p>
          <p className="mb-4">
            Başarımızın temelinde güçlü müşteri ilişkileri yatıyor. Bu nedenle her projede beklentilerin ötesine geçmeyi hedefliyoruz.
          </p>
          <p>
            Güven, AKR Ticaret'in en önemli değeridir. Bu sayede müşterilerimizin büyük çoğunluğu bizi tekrar tercih etmektedir.
          </p>
        </motion.div>
      </div>

      {/* Diğer Alt Bileşenler */}
      <Devam />
      <Misyon />
    </motion.section>
  )
}
