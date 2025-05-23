import React from "react";

const FleetSafetyBox = () => {
  return (
    <div className="w-full px-4 py-16 flex justify-center bg-white">
      <div className="bg-white rounded-xl shadow-md px-6 py-8 md:px-10 md:py-10 max-w-5xl w-full flex flex-col md:flex-row items-center md:items-center gap-6">
        
        {/* METİN ALANI */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-4">
            Eşyalarınız Güvende, AKR Nakliyat Yanınızda
          </h3>
          <p className="text-gray-700 text-sm md:text-base mb-6">
            Her taşıma süreci bizim için bir sorumluluk demektir. AKR Nakliyat olarak tüm araçlarımızı düzenli olarak kontrol eder, personelimizi titizlikle seçer ve eşyalarınızı en güvenli şekilde taşırız. Size sadece taşınmanın keyfini yaşamak kalır.
          </p>
          <button className="bg-[#0066a1] hover:bg-[#005388] text-white font-medium text-sm md:text-base px-6 py-2.5 rounded transition">
            Ücretsiz Fiyat Teklifi Al
          </button>
        </div>

        {/* GÖRSEL ALANI */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-end">
          <img
            src="truckk.webp"
            alt="Nakliye Aracı"
            className="w-[250px] md:w-[320px] h-auto object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default FleetSafetyBox;
