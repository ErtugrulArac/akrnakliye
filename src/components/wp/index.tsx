"use client";

import React, { useState } from "react";
import { FaWhatsapp, FaPhoneAlt } from "react-icons/fa";

export default function FloatingContactButtons() {
  const phone = "05491750025";

  const handleConversion = (url: string) => {
    if (typeof window !== "undefined" && (window as any).gtag) {
      (window as any).gtag("event", "conversion", {
        send_to: "AW-17029946954/TTx4CKu94cEaEMq8wbg_",
        event_callback: () => {
          window.location.href = url;
        },
      });
    } else {
      window.location.href = url;
    }
  };
  

  return (
    <div className="fixed bottom-5 sm:bottom-6 right-4 sm:right-6 z-50 flex flex-col items-end space-y-2">
      {/* WhatsApp Button */}
      <div className="relative group">
        <button
          onClick={() => handleConversion(`https://wa.me/90${phone}`)}
          className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-gradient-to-br from-green-500 to-emerald-500 text-white shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center justify-center border border-white/20 hover:-translate-y-0.5"
          aria-label="WhatsApp ile mesaj gönder"
        >
          <FaWhatsapp className="text-xl sm:text-2xl" />
        </button>
        <span className="pointer-events-none absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-slate-900 text-white text-xs sm:text-sm font-medium px-3 py-1.5 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
          WhatsApp ile yazın
        </span>
      </div>

      {/* Phone Button */}
      <div className="relative group">
        <button
          onClick={() => handleConversion(`tel:${phone}`)}
          className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 text-white shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center justify-center border border-white/20 hover:-translate-y-0.5"
          aria-label="Telefonla ara"
        >
          <FaPhoneAlt className="text-lg sm:text-xl" />
        </button>
        <span className="pointer-events-none absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-slate-900 text-white text-xs sm:text-sm font-medium px-3 py-1.5 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
          Hemen ara
        </span>
      </div>
    </div>
  );
}