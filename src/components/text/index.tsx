import React from 'react';
import { FaMapMarkedAlt, FaRobot, FaChartBar } from 'react-icons/fa';

const ServicesSection = () => {
  const services = [
    {
      icon: <FaMapMarkedAlt className="text-3xl text-blue-600 mb-4" />,
      title: 'Güvenli ve Hızlı Şehir İçi Taşımacılık',
      desc:
        "Akr Ticaret olarak şehir içi taşımacılıkta dakik ve güvenli hizmet sunuyoruz. Profesyonel ekibimiz ve özel araç filomuzla eşyalarınız zamanında ve sorunsuz şekilde taşınır.",
    },
    {
      icon: <FaRobot className="text-3xl text-blue-600 mb-4" />,
      title: 'Uygun Fiyatlı Uzun Mesafe Taşımacılık',
      desc:
        "Uzun mesafelerde de taşımacılık ihtiyaçlarınızı karşılıyoruz. Eşyalarınız özenle paketlenir, güvenle yeni adresinize ulaştırılır. Kaliteyi uygun fiyatla sunuyoruz.",
    },
    {
      icon: <FaChartBar className="text-3xl text-blue-600 mb-4" />,
      title: 'Evden Eve Taşımacılıkta Uzmanlık',
      desc:
        "Ev taşıma sürecinde planlı, dikkatli ve müşteri memnuniyeti odaklı çalışıyoruz. Eşyalarınızı en iyi şekilde koruyarak, hızlı ve sorunsuz bir taşınma deneyimi yaşatıyoruz.",
    },
  ];

  return (
    <section className="w-full px-4 py-16 bg-white">
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">
          AKR Ticaret <span className="text-blue-600">Hizmetleri</span>
        </h1>
        <p className="text-gray-600 mb-12 max-w-3xl mx-auto">
          AKR ticaret olarak, şehir içi ve şehirler arası taşımacılıkta güvenilir ve profesyonel çözümler sunuyoruz. Her aşamada müşteri memnuniyetini ön planda tutarak, eşyalarınızı güvenle yeni adresinize ulaştırıyoruz.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <div
              key={i}
              className="border rounded-xl p-6 bg-white shadow-sm hover:shadow-lg transition-transform duration-300 transform hover:scale-105"
            >
              {service.icon}
              <h3 className="text-lg font-semibold text-blue-700 mb-2">
                {service.title}
              </h3>
              <p className="text-gray-600 text-sm">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
