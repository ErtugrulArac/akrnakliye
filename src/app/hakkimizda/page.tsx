'use client'
import React from 'react'
import Devam from "@/app/hakkimizda/devam"
import Misyon from "@/app/hakkimizda/misyon"

export default function Hakkimizda() {
  return (
    <section className="px-4 md:px-20 py-28 bg-white">
      {/* Başlık */}
      <div className="flex items-center justify-center mb-12 relative">
        <div className="absolute left-0 top-1/2 w-[30%] border-t-2 border-black hidden md:block" />
        <h2 className="text-3xl md:text-4xl font-bold z-10 bg-white text-amber-400 px-4">HAKKIMIZDA</h2>
        <div className="absolute right-0 top-1/2 w-[30%] border-t-2 border-black hidden md:block" />
      </div>

      {/* İçerik */}
      <div className="flex flex-col md:flex-row items-center md:gap-36 max-md:gap-10 max-w-6xl mx-auto">
        {/* Görsel */}
        <div className="flex justify-center">
          <div className="w-64 h-64 rounded-full bg-black flex items-center justify-center overflow-hidden">
            <img
              src="akrlogobeyaz.webp"
              alt="AKR Ticaret Görsel"
              className="w-40 h-auto object-contain"
            />
          </div>
        </div>

        {/* Metin */}
        <div className="max-w-xl text-gray-800 text-base max-md:text-center leading-relaxed">
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
        </div>
      </div>
      <Devam />
      <Misyon />
    </section>
  )
}
