import React from 'react';
import { FaMapMarkedAlt, FaRobot, FaChartBar } from 'react-icons/fa';

const ServicesSection = () => {
  const services = [
    {
      icon: <FaMapMarkedAlt className="text-3xl text-blue-600 mb-4" />,
      title: 'Track Every Shipment in Real Time',
      desc:
        "Stay updated on your cargo’s exact location with instant tracking notifications. Stay updated on your cargo’s exact location with instant tracking notifications.",
    },
    {
      icon: <FaRobot className="text-3xl text-blue-600 mb-4" />,
      title: 'Automate Route Optimization',
      desc:
        'Cut costs and time by letting our AI-driven system optimize delivery routes.',
    },
    {
      icon: <FaChartBar className="text-3xl text-blue-600 mb-4" />,
      title: 'Detailed Analytics and Reporting',
      desc:
        'Make data-driven decisions with comprehensive logistics reports at your fingertips.',
    },
  ];

  return (
    <section className="w-full px-4 py-16 bg-white">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Three main <span className="text-blue-600">services</span>
        </h2>
        <p className="text-gray-600 mb-12 max-w-3xl mx-auto">
          Our app gives you unparalleled visibility into your entire logistics network. Whether you’re
          managing a single delivery or overseeing thousands, you can track the exact location of every
          shipment in real time.
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
