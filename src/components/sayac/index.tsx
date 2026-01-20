"use client";

import React, { useEffect, useState, useRef } from "react";

const data = [
  {
    percent: 87,
    label:
      "Kullanıcıların %87'si hizmet sonrası kişisel yaşamlarının iyileştiğini bildiriyor.",
  },
  {
    percent: 77,
    label:
      "Katılımcıların %77’si AKR sayesinde iş yerinde daha üretken olduklarını bildiriyor.",
  },
  {
    percent: 90,
    label:
      "AKR çözümleriyle açılan vakaların %90'ı başarıyla sonuçlanmıştır.",
  },
];

export default function PercentageCircles() {
  const [progress, setProgress] = useState<number[]>(data.map(() => 0));
  const containerRef = useRef<HTMLElement | null>(null);
  const [inView, setInView] = useState(false);

  // Görünür olduğunda sayacı başlatmak için basit observer
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          obs.disconnect();
        }
      },
      { threshold: 0.4 }
    );

    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  // Yüzde artışı (görünür olunca)
  useEffect(() => {
    if (!inView) return;

    let frame = 0;
    const targetMax = Math.max(...data.map((d) => d.percent));
    const timer = setInterval(() => {
      frame++;
      setProgress(data.map((d) => Math.min(frame, d.percent)));
      if (frame >= targetMax) clearInterval(timer);
    }, 20);

    return () => clearInterval(timer);
  }, [inView]);

  return (
    <section ref={containerRef} className="bg-gradient-to-b from-white via-slate-50 to-white py-24">
      <div className="text-center mb-16 px-4">
        <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-50 to-cyan-50 border border-blue-200 rounded-full px-6 py-2 mb-4">
          <svg className="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
            <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
          </svg>
          <span className="text-sm font-bold text-blue-900">İSTATİSTİKLER</span>
        </div>
        <h2 className="text-4xl sm:text-5xl font-black text-slate-900 mt-2 mb-4">
          Akr Ticaret Olarak <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">Etkimiz</span>
        </h2>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
          Hizmetlerimizin Ardından Katılımcı Görüşleri
        </p>
      </div>

      <div className="flex flex-col lg:flex-row justify-center items-center gap-16 px-4 max-w-[1200px] mx-auto">
        {data.map((item, index) => {
          const radius = 80;
          const circumference = 2 * Math.PI * radius;
          const dashOffset =
            circumference - (circumference * progress[index]) / 100;

          return (
            <div key={index} className="text-center w-[220px] group">
              <div className="relative mb-6">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-cyan-100 rounded-full blur-xl opacity-0 group-hover:opacity-60 transition-opacity duration-500" />
                <svg width="200" height="200" className="mx-auto">
                  <defs>
                    <linearGradient id={`grad-${index}`} x1="1" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#0ea5e9" />
                      <stop offset="100%" stopColor="#06b6d4" />
                    </linearGradient>
                  </defs>
                  <circle
                    cx="100"
                    cy="100"
                    r={radius}
                    stroke="#e2e8f0"
                    strokeWidth="18"
                    fill="none"
                  />
                  <circle
                    cx="100"
                    cy="100"
                    r={radius}
                    stroke={`url(#grad-${index})`}
                    strokeWidth="18"
                    fill="none"
                    strokeDasharray={circumference}
                    strokeDashoffset={dashOffset}
                    strokeLinecap="round"
                    transform="rotate(-90 100 100)"
                    className="drop-shadow-lg"
                  />
                  <text
                    x="100"
                    y="110"
                    textAnchor="middle"
                    className="font-black text-4xl fill-slate-900"
                  >
                    {progress[index]}%
                  </text>
                </svg>
              </div>
              <div className="bg-white border-2 border-slate-200 group-hover:border-cyan-300 rounded-2xl p-5 shadow-lg group-hover:shadow-xl transition-all duration-300">
                <p className="text-sm text-slate-700 leading-relaxed font-medium">
                  {item.label}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
