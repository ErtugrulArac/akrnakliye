"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";

const desktopImages = [
  "/akrgif1.gif",
  "/main1.webp",
  "/main2.webp",
  "/main3.webp",
  "/main4.webp",
  "/akrgif2.gif",
];

const mobileImages = [
  "/akrgif1mobile.gif",
  "/main1mobile.webp",
  "/main2mobile.webp",
  "/main3mobile.webp",
  "/main4mobile.webp",
  "/akrgif2mobile.gif",
];

const LogisticsHero = () => {
  const [index, setIndex] = useState(0);
  const [images, setImages] = useState<string[]>(desktopImages);

  useEffect(() => {
    const handleResize = () => {
      setImages(window.innerWidth < 768 ? mobileImages : desktopImages);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [images]);

  return (
    <section className="relative w-full h-screen overflow-hidden bg-black">
      {images.map((src, i) => {
        const isMobileGif1 = src === "/akrgif1mobile.gif";

        return (
          <img
            key={src}
            src={src}
            alt={`Arka plan görseli ${i + 1}`}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === i ? "opacity-100 z-10" : "opacity-0 z-0"
            } ${
              isMobileGif1
                ? "w-[110%] h-[110%] object-contain sm:object-cover"
                : "w-full h-full object-cover"
            }`}
            draggable={false}
          />
        );
      })}


      <div className="absolute inset-0 bg-black/40 z-20" />

     
      <div className="relative z-30 h-full flex flex-col justify-center items-center px-6 sm:px-12 max-w-screen-xl mx-auto text-center gap-y-8">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight max-w-[700px] drop-shadow-md">
          <span className="block text-blue-800">Lojistikte Kolaylık,</span>
          <span className="block text-gray-200">Her Aşamada Yanınızdayız.</span>
        </h1>
        <p className="text-gray-100 text-lg sm:text-xl font-medium max-w-2xl">
          Güvenilir, hızlı ve profesyonel taşımacılık çözümleri ile her zaman yanınızdayız.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <Link
            href="/iletisim"
            title="İletişim Sayfasına Git"
            className="bg-white text-blue-900 font-semibold px-6 py-3 rounded-md shadow hover:bg-blue-100 transition text-base sm:text-lg text-center"
          >
            Ücretsiz Teklif Al
          </Link>
          <Link
            href="/hakkimizda"
            title="Hakkımızda Sayfası"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-white text-white px-6 py-3 rounded-md hover:bg-white hover:text-blue-900 transition text-base sm:text-lg text-center"
          >
            Hakkımızda
          </Link>
        </div>
      </div>
    </section>
  );
};

export default LogisticsHero;
