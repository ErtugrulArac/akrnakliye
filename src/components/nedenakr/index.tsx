"use client";

import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import AutoScroll from "embla-carousel-auto-scroll";

const logo = "akrlogobeyaz.webp";
const testimonials = [
  { id: "t1", name: "Ahmet Yılmaz", title: "Lojistik Müdürü", text: "AKR Nakliyat ile birlikte çalışmak taşımacılık sürecimizi büyük ölçüde rahatlattı.", company: "Mahmutlar Tekstil", logo },
  { id: "t2", name: "Zeynep Kara", title: "Operasyon Yöneticisi", text: "Taşınma sürecimizde gösterdikleri özen ve profesyonellik gerçekten takdire şayan.", company: "Tamara Walley", logo },
  { id: "t3", name: "Murat Demir", title: "Depo Sorumlusu", text: "Zamanında teslimat ve eksiksiz hizmet ile harika bir deneyim yaşadık.", company: "Parla Gıda", logo },
  { id: "t4", name: "Elif Şahin", title: "Ürün Müdürü", text: "Ambalajlamadan teslimata kadar her aşama sorunsuzdu.", company: "Mado Kozmetik", logo },
  { id: "t5", name: "Ali Gökçe", title: "İş Geliştirme", text: "Profesyonellikleri sayesinde tüm taşınma sürecimiz keyifli geçti.", company: "Alev", logo },
  { id: "t6", name: "Seda Yıldız", title: "Satın Alma Müdürü", text: "AKR Nakliyat sayesinde zamanında ve güvenli taşındık.", company: "Fabrika Mobilya", logo },
  { id: "t7", name: "Yusuf Koç", title: "İK Sorumlusu", text: "Eşyalarımıza bizim kadar hassasiyet göstermeleri bizi çok memnun etti.", company: "Erdem Bilişim", logo },
  { id: "t8", name: "Nalan Erdem", title: "Müşteri Temsilcisi", text: "Hizmet kalitesi ve iletişim becerileri üst düzeydi.", company: "Turna Spor Klübü", logo },
  { id: "t9", name: "Kerem Alkan", title: "Planlama Uzmanı", text: "Planlamadan teslimata kadar kusursuzdu.", company: "Aura", logo },
  { id: "t10", name: "İlayda Kılıç", title: "Editör", text: "Taşınırken kitaplarımızın hassasiyetine gösterdikleri özen bizi çok mutlu etti.", company: "OXW", logo },
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
    <section className="bg-gradient-to-b from-white via-slate-50 to-white py-24 px-4">
      <div className="mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-50 to-blue-50 border border-cyan-200 rounded-full px-6 py-2 mb-4">
            <svg className="w-4 h-4 text-cyan-600" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2 5a2 2 0 012-2h7a2 2 0 012 2v4a2 2 0 01-2 2H9l-3 3v-3H4a2 2 0 01-2-2V5z" />
              <path d="M15 7v2a4 4 0 01-4 4H9.828l-1.766 1.767c.28.149.599.233.938.233h2l3 3v-3h2a2 2 0 002-2V9a2 2 0 00-2-2h-1z" />
            </svg>
            <span className="text-sm font-bold text-cyan-900">MÜŞTERİ GÖRÜŞLERİ</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-4">
            Müşterilerimiz <span className="bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">Ne Diyor?</span>
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Binlerce mutlu müşterimizin deneyimleri bizim en büyük motivasyonumuz
          </p>
        </div>

        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex gap-6">
            {testimonials.map((item) => (
              <div
                key={item.id}
                className="min-w-[300px] sm:min-w-[340px] max-w-xs flex-shrink-0 bg-white border-2 border-slate-200 rounded-2xl p-6 shadow-lg hover:shadow-2xl hover:border-cyan-300 transition-all duration-300 group"
              >
                <div className="mb-5 flex items-center gap-4">
                  <div className="relative w-14 h-14 bg-gradient-to-br from-cyan-100 to-blue-100 rounded-xl flex items-center justify-center p-2 group-hover:scale-110 transition-transform duration-300">
                    <img
                      src={item.logo}
                      alt={item.company}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div>
                    <p className="text-base font-bold text-slate-900">{item.company}</p>
                    <div className="flex gap-0.5 mt-1">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                </div>

                <p className="text-slate-700 text-base mb-5 leading-relaxed italic">"{item.text}"</p>
                
                <div className="pt-4 border-t border-slate-200">
                  <p className="text-base font-bold text-blue-600">{item.name}</p>
                  <p className="text-sm text-slate-500">{item.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-12">
          <p className="text-slate-600 text-sm">
            <span className="font-bold text-cyan-600">2500+</span> mutlu müşterimiz bizimle çalışıyor
          </p>
        </div>
      </div>
    </section>
  );
}
