'use client';

import React from 'react';
import Link from 'next/link';

const LogisticsCTA = () => {
  return (
    <section className="w-full px-4 py-12 flex justify-center bg-white">
      <div className="w-full max-w-6xl bg-[#f0f8ff] rounded-xl p-6 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6">


        <div className="w-full md:w-1/2 text-left">
          <h1 className="text-2xl md:text-3xl font-bold text-[#0a4f70] mb-4 leading-snug">
            AKR Nakliyat <br className="md:hidden" />
             Profesyonel Lojistik ve Nakliye Hizmetleri
          </h1>
          <p className="text-gray-700 mb-6 text-sm md:text-base">
            Yüzlerce memnun müşterimiz gibi siz de taşıma süreçlerinizi profesyonel ve güvenli çözümlerle kolaylaştırın.
            AKR Nakliyat, hızlı, ekonomik ve planlı lojistik için her zaman yanınızda.
          </p>
          <Link
          title='wp akr ticaret'
            href="https://api.whatsapp.com/send/?phone=9005491750025&text&type=phone_number&app_absent=0"
            className="bg-[#0a4f70] hover:bg-[#083d57] text-white font-medium px-6 py-2.5 rounded transition inline-block"
          >
            Hemen İletişime Geç
          </Link>
        </div>


        <div className="w-full md:w-1/2 flex justify-center md:justify-end">
          <img
            src="akrticaretbeyaztır.webp"
            alt="AKR Nakliyat Tırı"
            className="w-[280px] md:w-[420px] h-auto object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default LogisticsCTA;
