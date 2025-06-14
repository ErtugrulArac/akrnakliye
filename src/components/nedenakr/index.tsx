"use client";

import React from "react";
import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import { motion } from "framer-motion";

const testimonials = [
  {
    id: "t1",
    name: "Ahmet Yılmaz",
    title: "Lojistik Müdürü",
    text: "AKR Nakliyat ile birlikte çalışmak taşımacılık sürecimizi büyük ölçüde rahatlattı.",
    company: "Mahmutlar Tekstil",
    logo: "1.webp",
  },
  {
    id: "t2",
    name: "Zeynep Kara",
    title: "Operasyon Yöneticisi",
    text: "Taşınma sürecimizde gösterdikleri özen ve profesyonellik gerçekten takdire şayan.",
    company: "Tamara Walley",
    logo: "2.webp",
  },
  {
    id: "t3",
    name: "Murat Demir",
    title: "Depo Sorumlusu",
    text: "Zamanında teslimat ve eksiksiz hizmet ile harika bir deneyim yaşadık.",
    company: "Parla Gıda",
    logo: "3.webp",
  },
  {
    id: "t4",
    name: "Elif Şahin",
    title: "Ürün Müdürü",
    text: "Ambalajlamadan teslimata kadar her aşama sorunsuzdu.",
    company: "Mado Kozmetik",
    logo: "4.webp",
  },
  {
    id: "t5",
    name: "Ali Gökçe",
    title: "İş Geliştirme",
    text: "Profesyonellikleri sayesinde tüm taşınma sürecimiz keyifli geçti.",
    company: "Alev",
    logo: "5.webp",
  },
  {
    id: "t6",
    name: "Seda Yıldız",
    title: "Satın Alma Müdürü",
    text: "AKR Nakliyat sayesinde zamanında ve güvenli taşındık.",
    company: "Fabrika Mobilya",
    logo: "6.webp",
  },
  {
    id: "t7",
    name: "Yusuf Koç",
    title: "İK Sorumlusu",
    text: "Eşyalarımıza bizim kadar hassasiyet göstermeleri bizi çok memnun etti.",
    company: "Erdem Bilişim",
    logo: "7.webp",
  },
  {
    id: "t8",
    name: "Nalan Erdem",
    title: "Müşteri Temsilcisi",
    text: "Hizmet kalitesi ve iletişim becerileri üst düzeydi.",
    company: "Turna Spor Klübü",
    logo: "8.webp",
  },
  {
    id: "t9",
    name: "Kerem Alkan",
    title: "Planlama Uzmanı",
    text: "Planlamadan teslimata kadar kusursuzdu.",
    company: "Aura",
    logo: "9.webp",
  },
  {
    id: "t10",
    name: "İlayda Kılıç",
    title: "Editör",
    text: "Taşınırken kitaplarımızın hassasiyetine gösterdikleri özen bizi çok mutlu etti.",
    company: "OXW",
    logo: "10.webp",
  },
];

export default function TestimonialsCarousel() {
  const autoplayOptions = Autoplay({ delay: 3000, stopOnInteraction: false });

  const [emblaRef] = useEmblaCarousel(
    {
      loop: true,
      align: "start",
      skipSnaps: false,
      slidesToScroll: 1,
    },
    [autoplayOptions]
  );

  return (
    <motion.section
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.3 }}
      className="bg-white py-20 px-4"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
          Müşterilerimiz Ne Diyor?
        </h2>
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex gap-4 sm:gap-6">
            {testimonials.map((item, index) => (
              <motion.div
                key={item.id}
                className="min-w-[280px] sm:min-w-[320px] max-w-xs p-4 sm:p-6 border rounded-lg shadow hover:shadow-md transition-all duration-300 flex-shrink-0"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <img
                    src={item.logo}
                    alt={item.company}
                    className="h-10 w-10 object-contain"
                  />
                  <div>
                    <p className="font-semibold text-sm text-gray-800">
                      {item.company}
                    </p>
                  </div>
                </div>
                <p className="text-gray-700 text-sm mb-4">"{item.text}"</p>
                <p className="text-blue-600 font-medium text-sm">{item.name}</p>
                <p className="text-xs text-gray-500">{item.title}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
}
