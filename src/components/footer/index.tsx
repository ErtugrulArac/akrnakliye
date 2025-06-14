import React from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full bg-gradient-to-t from-[#c0e3f5] to-white text-sm text-gray-600 pt-14 pb-10">
      <div className="max-w-7xl mx-auto px-4 flex flex-col items-center gap-8">
        {/* Logo ve Buton */}
        <div className="w-full flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2">
            <img src="akrlogosiyah.webp" alt="Arlan Medya" className="w-24 h-24 object-contain" />
          </div>
          <a
          target="_blank"  rel="noopener noreferrer"
            href="/iletisim"
            className="bg-[#00a3e0] hover:bg-[#008cc7] text-white px-4 py-2 rounded-lg flex items-center gap-2 text-sm font-medium"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21.75 12a9.75 9.75 0 11-19.5 0 9.75 9.75 0 0119.5 0zm-9.75-3.75v3.75m0 0v3.75m0-3.75h3.75m-3.75 0H8.25"
              />
            </svg>
            Bilgi Al
          </a>
        </div>

        {/* İnce çizgi */}
        <div className="border-t border-gray-400 w-[95%]" />

        {/* Alt Bilgi */}
        <div className="w-full flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-center md:text-left text-base">
            © 2025 Arlan Medya. Tüm hakları saklıdır. Bu site Arlan Medya tarafından geliştirilmiştir.
          </p>
          <div className="flex flex-col md:flex-row items-center gap-4 text-base">
            <div className="flex gap-6">
              <a title="hakkımızda" href="/hakkimizda" target="_blank" rel="noopener noreferrer" className="hover:underline font-bold">
                Hakkımızda
              </a>
              <a title="iletişim" href="/iletisim" target="_blank" rel="noopener noreferrer" className="hover:underline font-bold">
                İletişim
              </a>
            </div>
            <div className="flex items-center gap-4 text-xl mt-2 md:mt-0">
              <a title="LinkedinIn" href="#"  target="_blank" rel="noopener noreferrer">
                <FaLinkedinIn />
              </a>
              <a title="Instagram" href="#" target="_blank" rel="noopener noreferrer">
                <FaInstagram />
              </a>
              <a title="facebook" href="#" target="_blank" rel="noopener noreferrer">
                <FaFacebookF />
              </a>
              <a title="youtube" href="#" target="_blank" rel="noopener noreferrer">
                <FaYoutube />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
