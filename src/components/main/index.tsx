"use client"
import React, { useEffect, useState } from 'react';
import Link from 'next/link';

const images = [
  '/main.gif',
  '/akrmain2.webp',
  '/main1.webp',
  '/main2.webp',
  '/main3.webp',
  '/akrmain1.webp',
  '/lokasyon.gif',
];

const LogisticsHero = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const isFirstImage = currentImage === 0;

  return (
    <div className="relative w-full min-h-[80vh] flex items-center justify-center bg-white overflow-hidden pt-24 sm:pt-32">
      {/* Arka Plan Görseli */}
      <div className="absolute right-0 top-0 h-full w-full sm:w-[60%] z-0 overflow-hidden">
        <img
          src={images[currentImage]}
          alt="Hero Arkaplan"
          className={`h-full ${isFirstImage ? 'w-full object-contain' : 'w-[140%] object-cover'} transition-opacity duration-1000`}
          style={{
            opacity: 0.4, // sadece hafif opacity
            maskImage: 'linear-gradient(to left, black 40%, transparent 100%)',
            WebkitMaskImage: 'linear-gradient(to left, black 40%, transparent 100%)',
          }}
        />
      </div>

      {/* Sol İçerik */}
      <div className="relative z-10 w-4/5 max-w-screen-xl flex flex-col gap-6 md:gap-8 py-12 text-left">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-blue-900 leading-tight max-w-xl">
          Lojistikte Kolaylık, <br className="hidden sm:block" /> Her Aşamada Yanınızdayız.
        </h1>
        <p className="text-gray-700 text-base sm:text-lg font-medium max-w-md">
          Her sevkiyatta taşıdığımız sadece yük değil; <br className="hidden sm:block" />
          aynı zamanda sizin güveniniz ve memnuniyetinizdir.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Link href="/iletisim" passHref legacyBehavior>
            <a className="bg-blue-700 text-white px-5 py-3 rounded hover:bg-blue-800 transition text-sm sm:text-base inline-block">
              Ücretsiz Teklif Al
            </a>
          </Link>
          <Link
            href="/hakkimizda"
            className="border border-blue-700 text-blue-700 px-5 py-3 rounded hover:bg-blue-50 transition text-sm sm:text-base inline-block"
          >
            Detaylı Bilgi
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LogisticsHero;
