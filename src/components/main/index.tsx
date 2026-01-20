"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const LogisticsHero = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 2 - 1,
        y: (e.clientY / window.innerHeight) * 2 - 1,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <>
      <style>{`
        @keyframes gradientShift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(60px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeInScale {
          from {
            opacity: 0;
            transform: scale(0.92);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-25px); }
        }

        @keyframes pulse-glow {
          0%, 100% { opacity: 0.6; }
          50% { opacity: 1; }
        }

        @keyframes shimmer {
          0% { background-position: -1000px 0; }
          100% { background-position: 1000px 0; }
        }

        @keyframes borderGlow {
          0%, 100% { border-color: rgba(34, 211, 238, 0.3); box-shadow: 0 0 20px rgba(34, 211, 238, 0.2); }
          50% { border-color: rgba(34, 211, 238, 0.8); box-shadow: 0 0 40px rgba(34, 211, 238, 0.4); }
        }

        body {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
        }

        .gradient-bg {
          background: linear-gradient(135deg, #030712 0%, #1a1f35 25%, #0f1729 50%, #1a2850 75%, #030712 100%);
          background-size: 400% 400%;
          animation: gradientShift 16s ease infinite;
          position: relative;
          overflow: hidden;
        }

        .gradient-bg::before {
          content: '';
          position: absolute;
          inset: 0;
          background: radial-gradient(circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(6, 182, 212, 0.08) 0%, transparent 50%);
          pointer-events: none;
          z-index: 2;
        }

        .animate-slide-up {
          animation: slideUp 1s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
        }

        .animate-fade-scale {
          animation: fadeInScale 0.9s ease-out forwards;
        }

        .delay-1 { animation-delay: 0.15s; }
        .delay-2 { animation-delay: 0.3s; }

        .floating {
          animation: float 5s ease-in-out infinite;
        }

        .decorative-orb {
          position: absolute;
          border-radius: 50%;
          filter: blur(50px);
          opacity: 0.5;
          animation: float 10s ease-in-out infinite;
        }

        .orb-1 {
          width: 500px;
          height: 500px;
          background: radial-gradient(circle, rgba(6, 182, 212, 0.25) 0%, transparent 70%);
          top: -15%;
          right: -10%;
          animation-delay: 0s;
        }

        .orb-2 {
          width: 600px;
          height: 600px;
          background: radial-gradient(circle, rgba(59, 130, 246, 0.2) 0%, transparent 70%);
          bottom: -20%;
          left: 0%;
          animation-delay: 3s;
        }

        .orb-3 {
          width: 400px;
          height: 400px;
          background: radial-gradient(circle, rgba(14, 165, 233, 0.15) 0%, transparent 70%);
          top: 20%;
          left: -10%;
          animation-delay: 6s;
        }

        .accent-line {
          width: 60px;
          height: 3px;
          background: linear-gradient(90deg, transparent, #06b6d4, transparent);
          margin: 0 auto;
        }

        .badge-premium {
          background: linear-gradient(135deg, rgba(6, 182, 212, 0.08) 0%, rgba(14, 165, 233, 0.05) 100%);
          border: 1px solid rgba(34, 211, 238, 0.3);
          backdrop-filter: blur(20px);
          transition: all 0.4s ease;
        }

        .badge-premium:hover {
          border-color: rgba(34, 211, 238, 0.6);
          background: linear-gradient(135deg, rgba(6, 182, 212, 0.15) 0%, rgba(14, 165, 233, 0.1) 100%);
          box-shadow: 0 0 30px rgba(34, 211, 238, 0.2);
        }

        .btn-primary {
          position: relative;
          background: linear-gradient(135deg, #06b6d4 0%, #0ea5e9 50%, #3b82f6 100%);
          background-size: 200% 200%;
          color: white;
          font-weight: 600;
          overflow: hidden;
          transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
          letter-spacing: 0.5px;
          box-shadow: 0 20px 50px rgba(6, 182, 212, 0.3);
          border: none;
        }

        .btn-primary::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent);
          animation: shimmer 3s infinite;
        }

        .btn-primary::after {
          content: '';
          position: absolute;
          inset: 0;
          background: radial-gradient(circle at center, rgba(255,255,255,0.1) 0%, transparent 70%);
          opacity: 0;
          transition: opacity 0.4s ease;
        }

        .btn-primary:hover {
          transform: translateY(-4px);
          box-shadow: 0 30px 70px rgba(6, 182, 212, 0.4);
          background-position: 100% 0;
        }

        .btn-primary:hover::after {
          opacity: 1;
        }

        .btn-secondary {
          position: relative;
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(20px);
          border: 1.5px solid rgba(255, 255, 255, 0.2);
          color: white;
          font-weight: 600;
          overflow: hidden;
          transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
          letter-spacing: 0.5px;
        }

        .btn-secondary::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, transparent, rgba(6, 182, 212, 0.2), transparent);
          opacity: 0;
          animation: shimmer 3s infinite;
          transition: opacity 0.4s ease;
        }

        .btn-secondary:hover {
          border-color: rgba(34, 211, 238, 0.8);
          background: rgba(6, 182, 212, 0.1);
          box-shadow: 0 0 30px rgba(34, 211, 238, 0.3), inset 0 0 20px rgba(34, 211, 238, 0.05);
          transform: translateY(-4px);
        }

        .btn-secondary:hover::before {
          opacity: 1;
        }

        .heading-premium {
          font-size: clamp(2.6rem, 8vw, 6rem);
          font-weight: 900;
          letter-spacing: -0.02em;
          line-height: 1.1;
          text-rendering: optimizeLegibility;
        }

        .gradient-text {
          background: linear-gradient(135deg, #06b6d4 0%, #22d3ee 25%, #06daea 50%, #0ea5e9 75%, #3b82f6 100%);
          background-size: 300% 300%;
          background-clip: text;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: gradientShift 8s ease infinite;
        }

        .subtitle-premium {
          font-size: clamp(1rem, 2.2vw, 1.3rem);
          font-weight: 300;
          letter-spacing: 0.3px;
          line-height: 1.6;
          color: rgba(255, 255, 255, 0.8);
        }

        .pulse-accent {
          animation: pulse-glow 2s ease-in-out infinite;
        }
      `}</style>

      <section 
        className="relative w-full min-h-screen overflow-hidden gradient-bg pt-28 sm:pt-32 md:pt-36 pb-16 sm:pb-20 md:pb-24"
        style={{
          "--mouse-x": `${(mousePosition.x + 1) * 50}%`,
          "--mouse-y": `${(mousePosition.y + 1) * 50}%`,
        } as React.CSSProperties}
      >
        {/* Decorative Orbs */}
        <div className="decorative-orb orb-1" />
        <div className="decorative-orb orb-2" />
        <div className="decorative-orb orb-3" />

        {/* Content */}
        <div className="relative z-10 h-full flex flex-col items-center justify-center px-4 sm:px-6 md:px-12">
          <div className="max-w-5xl w-full text-center space-y-10">
            {/* Premium Badge */}
            <div className={`inline-flex items-center gap-3 mx-auto ${isLoaded ? "animate-fade-scale" : "opacity-0"}`}>
              <div className="badge-premium flex items-center gap-3 px-6 py-3 rounded-full">
                <div className="w-2 h-2 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full pulse-accent" />
                <span className="text-xs sm:text-sm font-semibold text-cyan-300 tracking-widest uppercase">
                  Türkiye'nin Güvenilir Lojistik Ortağı
                </span>
                <div className="hidden sm:flex items-center gap-2 ml-3 pl-3 border-l border-cyan-400/30">
                  <svg className="w-4 h-4 text-cyan-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-xs text-cyan-300 font-medium">10+ Yıl Tecrübe</span>
                </div>
              </div>
            </div>

            {/* Main Content */}
            <div className={`space-y-8 ${isLoaded ? "animate-slide-up" : "opacity-0"}`}>
              {/* Accent Line */}
              <div className="accent-line opacity-60" />

              {/* Heading */}
              <h1 className="heading-premium text-white">
                Taşımacılıkta
                <br className="hidden sm:block" />
                <span className="gradient-text block">
                  Yeni Standart
                </span>
              </h1>

              {/* Subtitle */}
              <p className="subtitle-premium max-w-3xl mx-auto">
                Hızlı, güvenli ve ekonomik taşımacılık çözümleri ile işletmenizi büyütün.
                <br className="hidden sm:block" />
                24/7 müşteri desteği ve garantili teslimat hizmeti sunuyoruz.
              </p>

              {/* Trust Stats */}
              <div className={`grid grid-cols-3 gap-4 sm:gap-8 max-w-2xl mx-auto pt-6 ${isLoaded ? "animate-fade-scale delay-1" : "opacity-0"}`}>
                <div className="flex flex-col items-center gap-2 badge-premium px-4 py-5 rounded-2xl">
                  <div className="text-2xl sm:text-3xl font-black gradient-text">2500+</div>
                  <div className="text-xs sm:text-sm text-cyan-300/80 font-medium">Başarılı Teslimat</div>
                </div>
                <div className="flex flex-col items-center gap-2 badge-premium px-4 py-5 rounded-2xl">
                  <div className="text-2xl sm:text-3xl font-black gradient-text">81</div>
                  <div className="text-xs sm:text-sm text-cyan-300/80 font-medium">İl Kapsama</div>
                </div>
                <div className="flex flex-col items-center gap-2 badge-premium px-4 py-5 rounded-2xl">
                  <div className="text-2xl sm:text-3xl font-black gradient-text">%99.8</div>
                  <div className="text-xs sm:text-sm text-cyan-300/80 font-medium">Başarı Oranı</div>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div
              className={`flex flex-col sm:flex-row gap-6 justify-center items-center pt-8 ${
                isLoaded ? "animate-slide-up delay-2" : "opacity-0"
              }`}
            >
              <Link href="/iletisim" className="group w-full sm:w-auto">
                <button className="w-full sm:w-auto px-10 py-4 btn-primary text-white font-semibold text-sm sm:text-base rounded-xl flex items-center justify-center gap-3 group-hover:gap-4">
                  <span className="relative z-10">Hemen Teklif Al</span>
                  <ArrowRight className="w-5 h-5 transition-all duration-300 relative z-10 group-hover:translate-x-2" />
                </button>
              </Link>
              <Link href="/hakkimizda" className="group w-full sm:w-auto">
                <button className="w-full sm:w-auto px-10 py-4 btn-secondary text-white font-semibold text-sm sm:text-base rounded-xl transition-all duration-300">
                  Biz Kimiz?
                </button>
              </Link>
            </div>

            {/* Quick Features */}
            <div className={`flex flex-wrap justify-center gap-6 pt-8 ${isLoaded ? "animate-fade-scale delay-2" : "opacity-0"}`}>
              <div className="flex items-center gap-2 text-cyan-300/90 text-sm">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                <span className="font-medium">Güvenli Teslimat</span>
              </div>
              <div className="flex items-center gap-2 text-cyan-300/90 text-sm">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                <span className="font-medium">Hızlı Kargo</span>
              </div>
              <div className="flex items-center gap-2 text-cyan-300/90 text-sm">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="font-medium">24/7 Destek</span>
              </div>
              <div className="flex items-center gap-2 text-cyan-300/90 text-sm">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                <span className="font-medium">Uygun Fiyat</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Fade */}
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-black via-black/40 to-transparent z-5" />
      </section>
    </>
  );
};

export default LogisticsHero;
