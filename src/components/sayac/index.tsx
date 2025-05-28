'use client';

import React, { useEffect, useState, useRef } from "react";

const data = [
  {
    percent: 87,
    label: "Kullanıcıların %87'si hizmet sonrası kişisel yaşamlarının iyileştiğini bildiriyor.",
  },
  {
    percent: 77,
    label: "Katılımcıların %77’si AKR sayesinde iş yerinde daha üretken olduklarını bildiriyor.",
  },
  {
    percent: 90,
    label: "AKR çözümleriyle açılan vakaların %90'ı başarıyla sonuçlanmıştır.",
  },
];

export default function PercentageCircles() {
  const [progress, setProgress] = useState(data.map(() => 0));
  const containerRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
          setProgress(data.map(() => 0)); // Reset when not visible
        }
      },
      { threshold: 0.4 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let frame = 0;
    const newProgress = [...data.map(() => 0)];

    const animation = setInterval(() => {
      frame++;
      const updated = newProgress.map((_, i) =>
        frame <= data[i].percent ? frame : data[i].percent
      );
      setProgress(updated);

      if (frame >= Math.max(...data.map((d) => d.percent))) {
        clearInterval(animation);
      }
    }, 20);

    return () => clearInterval(animation);
  }, [isVisible]);

  return (
    <section className="bg-white py-20" ref={containerRef}>
      <div className="text-center mb-10">
        <p className="uppercase text-sm tracking-wide text-gray-600 font-semibold">
          Akr Ticaret Olarak Etkimiz
        </p>
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-2">
          Hizmetlerimizin Ardından Katılımcı Görüşleri
        </h2>
      </div>
      <div className="flex flex-col lg:flex-row justify-center items-center gap-16 px-4 max-w-[1200px] mx-auto">
        {data.map((item, index) => {
          const radius = 80;
          const circumference = 2 * Math.PI * radius;
          const dashOffset = circumference - (circumference * progress[index]) / 100;

          return (
            <div className="text-center w-[200px]" key={index}>
              <svg width="200" height="200">
                <defs>
                  <linearGradient id={`grad-${index}`} x1="1" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#1e3a8a" />
                    <stop offset="100%" stopColor="#60a5fa" />
                  </linearGradient>
                </defs>
                <circle
                  cx="100"
                  cy="100"
                  r={radius}
                  stroke="#e5e7eb"
                  strokeWidth="16"
                  fill="none"
                />
                <circle
                  cx="100"
                  cy="100"
                  r={radius}
                  stroke={`url(#grad-${index})`}
                  strokeWidth="16"
                  fill="none"
                  strokeDasharray={circumference}
                  strokeDashoffset={dashOffset}
                  transform="rotate(-90 100 100)"
                />
                <text
                  x="100"
                  y="110"
                  textAnchor="middle"
                  className="font-bold text-2xl fill-black"
                >
                  {progress[index]}%
                </text>
              </svg>
              <div className="text-sm text-gray-600 mt-4 leading-snug max-w-[250px] mx-auto">
                {item.label}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
