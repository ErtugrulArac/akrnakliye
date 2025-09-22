"use client";

import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import AutoScroll from "embla-carousel-auto-scroll";

const testimonials = [
  { id: "t1", name: "Ahmet Yılmaz", title: "Lojistik Müdürü", text: "AKR Nakliyat ile birlikte çalışmak taşımacılık sürecimizi büyük ölçüde rahatlattı.", company: "Mahmutlar Tekstil", logo: "1.webp" },
  { id: "t2", name: "Zeynep Kara", title: "Operasyon Yöneticisi", text: "Taşınma sürecimizde gösterdikleri özen ve profesyonellik gerçekten takdire şayan.", company: "Tamara Walley", logo: "2.webp" },
  { id: "t3", name: "Murat Demir", title: "Depo Sorumlusu", text: "Zamanında teslimat ve eksiksiz hizmet ile harika bir deneyim yaşadık.", company: "Parla Gıda", logo: "3.webp" },
  { id: "t4", name: "Elif Şahin", title: "Ürün Müdürü", text: "Ambalajlamadan teslimata kadar her aşama sorunsuzdu.", company: "Mado Kozmetik", logo: "4.webp" },
  { id: "t5", name: "Ali Gökçe", title: "İş Geliştirme", text: "Profesyonellikleri sayesinde tüm taşınma sürecimiz keyifli geçti.", company: "Alev", logo: "5.webp" },
  { id: "t6", name: "Seda Yıldız", title: "Satın Alma Müdürü", text: "AKR Nakliyat sayesinde zamanında ve güvenli taşındık.", company: "Fabrika Mobilya", logo: "6.webp" },
  { id: "t7", name: "Yusuf Koç", title: "İK Sorumlusu", text: "Eşyalarımıza bizim kadar hassasiyet göstermeleri bizi çok memnun etti.", company: "Erdem Bilişim", logo: "7.webp" },
  { id: "t8", name: "Nalan Erdem", title: "Müşteri Temsilcisi", text: "Hizmet kalitesi ve iletişim becerileri üst düzeydi.", company: "Turna Spor Klübü", logo: "8.webp" },
  { id: "t9", name: "Kerem Alkan", title: "Planlama Uzmanı", text: "Planlamadan teslimata kadar kusursuzdu.", company: "Aura", logo: "9.webp" },
  { id: "t10", name: "İlayda Kılıç", title: "Editör", text: "Taşınırken kitaplarımızın hassasiyetine gösterdikleri özen bizi çok mutlu etti.", company: "OXW", logo: "10.webp" },
];

export default function TestimonialsCarousel() {
  // dragFree = daha ipeksi akış
  const [emblaRef] = useEmblaCarousel(
    { loop: true, align: "start", dragFree: true },
    [
      AutoScroll({
        speed: 1.0,               // akış hızı (0.5–3 arası deneyebilirsin)
        stopOnInteraction: false, // kullanıcı sürüklese bile akışa geri dön
        stopOnMouseEnter: false,  // hover'da da dursun istersen true yap
        playOnInit: true,         // mount olur olmaz başlat
        direction: "forward",     // "backward" da olabilir
      }),
    ]
  );

  return (
    <section className="bg-white py-20 px-4">
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-12 text-center text-3xl font-bold text-gray-900">
          Müşterilerimiz Ne Diyor?
        </h2>

        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex gap-4 sm:gap-6">
            {testimonials.map((item) => (
              <div
                key={item.id}
                className="min-w-[280px] sm:min-w-[320px] max-w-xs flex-shrink-0 rounded-lg border p-4 sm:p-6 shadow transition-all duration-300 hover:shadow-md"
              >
                <div className="mb-4 flex items-center gap-3">
                  <img
                    src={item.logo}
                    alt={item.company}
                    className="h-10 w-10 object-contain"
                  />
                  <p className="text-sm font-semibold text-gray-800">{item.company}</p>
                </div>

                <p className="mb-4 text-sm text-gray-700">"{item.text}"</p>
                <p className="text-sm font-medium text-blue-600">{item.name}</p>
                <p className="text-xs text-gray-500">{item.title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
