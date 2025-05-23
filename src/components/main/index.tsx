import React from 'react';

const LogisticsHero = () => {
  return (
    <div className="relative w-full min-h-[80vh] flex items-center justify-center bg-white overflow-hidden">
      {/* Sağdaki görsel ve maske */}
      <div className="absolute right-0 top-0 h-full w-[60%] z-0">
        <img
          src="main.webp"
          alt="Truck"
          className="h-full w-full object-cover"
          style={{
            maskImage: 'linear-gradient(to left, black 20%, transparent 100%)',
            WebkitMaskImage: 'linear-gradient(to left, black 40%, transparent 100%)',
          }}
        />
      </div>

      {/* Sol içerik */}
      <div className="mt-20 relative z-10 w-4/5 max-w-screen-xl flex flex-col gap-6 md:gap-8 py-12 text-left">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-blue-900 leading-tight max-w-xl">
          Lojistikte Kolaylık, <br className="hidden sm:block" /> Her Aşamada Yanınızdayız.
        </h1>
        <p className="text-gray-700 text-base sm:text-lg font-medium max-w-md">
          Her sevkiyatta taşıdığımız sadece yük değil; <br className="hidden sm:block" />
          aynı zamanda sizin güveniniz ve memnuniyetinizdir.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <button className="bg-blue-700 text-white px-5 py-3 rounded hover:bg-blue-800 transition text-sm sm:text-base">
            Ücretsiz Teklif Al
          </button>
          <button className="border border-blue-700 text-blue-700 px-5 py-3 rounded hover:bg-blue-50 transition text-sm sm:text-base">
            Detaylı Bilgi
          </button>
        </div>
      </div>
    </div>
  );
};

export default LogisticsHero;
