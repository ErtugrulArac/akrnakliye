"use client";

import React from "react";
import { FaMapMarkedAlt, FaRobot, FaChartBar } from "react-icons/fa";

const ServicesSection = () => {
  const services = [
    {
      icon: <FaMapMarkedAlt className="text-4xl text-blue-600 mb-4" />,
      title: "Güvenli ve Hızlı Şehir İçi Taşımacılık",
      desc:
        "Akr Ticaret olarak şehir içi taşımacılıkta dakik ve güvenli hizmet sunuyoruz. Profesyonel ekibimiz ve özel araç filomuzla eşyalarınız zamanında ve sorunsuz şekilde taşınır.",
      gradient: "from-cyan-500 to-blue-600",
    },
    {
      icon: <FaRobot className="text-4xl text-indigo-600 mb-4" />,
      title: "Uygun Fiyatlı Uzun Mesafe Taşımacılık",
      desc:
        "Uzun mesafelerde de taşımacılık ihtiyaçlarınızı karşılıyoruz. Eşyalarınız özenle paketlenir, güvenle yeni adresinize ulaştırılır. Kaliteyi uygun fiyatla sunuyoruz.",
      gradient: "from-blue-600 to-indigo-600",
    },
    {
      icon: <FaChartBar className="text-4xl text-cyan-600 mb-4" />,
      title: "Evden Eve Taşımacılıkta Uzmanlık",
      desc:
        "Ev taşıma sürecinde planlı, dikkatli ve müşteri memnuniyeti odaklı çalışıyoruz. Eşyalarınızı en iyi şekilde koruyarak, hızlı ve sorunsuz bir taşınma deneyimi yaşatıyoruz.",
      gradient: "from-indigo-600 to-cyan-600",
    },
  ];

  return (
    <section className="w-full px-4 py-20 bg-gradient-to-b from-white via-slate-50 to-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-50 to-cyan-50 border border-blue-200 rounded-full px-6 py-2 mb-4">
            <svg className="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clipRule="evenodd" />
              <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z" />
            </svg>
            <span className="text-sm font-bold text-blue-900">HİZMETLERİMİZ</span>
          </div>
          <h3 className="text-4xl md:text-5xl font-black mb-4 text-slate-900">
            AKR Ticaret <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">Hizmetleri</span>
          </h3>
          <p className="text-slate-600 text-lg mb-6 max-w-3xl mx-auto leading-relaxed">
            AKR ticaret olarak, şehir içi ve şehirler arası taşımacılıkta güvenilir
            ve profesyonel çözümler sunuyoruz. Her aşamada müşteri memnuniyetini ön
            planda tutarak, eşyalarınızı güvenle yeni adresinize ulaştırıyoruz.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <div
              key={i}
              className="group bg-white border-2 border-slate-200 rounded-2xl p-8 hover:border-cyan-300 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-2"
            >
              <div className="mb-5 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3 leading-tight">
                {service.title}
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">{service.desc}</p>
              <div className={`mt-6 h-1 w-16 bg-gradient-to-r ${service.gradient} rounded-full group-hover:w-full transition-all duration-500`} />
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a href="/iletisim" className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white px-10 py-4 rounded-xl font-bold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
            <span>Tüm Hizmetleri Gör</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
