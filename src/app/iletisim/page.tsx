'use client'

import {
  FaUserAlt,
  FaEnvelope,
  FaCommentDots,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaClock,
} from 'react-icons/fa'
import { motion } from 'framer-motion'
import React from 'react'

export default function IletisimPage() {
  return (
    <section className="bg-gradient-to-b from-white via-slate-50 to-white py-32 px-4 relative overflow-hidden">
      {/* Dekoratif Arka Plan Elementleri */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-cyan-200/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl"></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        {/* BAŞLIK */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-50 to-blue-50 border border-cyan-200 rounded-full px-6 py-2 mb-4">
            <svg className="w-4 h-4 text-cyan-600" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
              <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
            </svg>
            <span className="text-sm font-bold text-cyan-900">İLETİŞİM</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-4">
            Bizimle <span className="bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">İletişime Geçin</span>
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Sorularınız, önerileriniz veya işbirlikleriniz için bize ulaşın. Size en kısa sürede geri dönüş yapacağız.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* FORM */}
          <motion.form
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            action="https://formspree.io/f/xovdoywj"
            method="POST"
            className="space-y-6 bg-white border-2 border-slate-200 p-8 rounded-2xl shadow-xl hover:shadow-2xl hover:border-cyan-300 transition-all duration-300"
          >
            <div>
              <label className="flex items-center gap-2 mb-2 text-slate-700 font-bold text-sm">
                <FaUserAlt className="text-cyan-600" /> Ad Soyad
              </label>
              <input
                type="text"
                name="name"
                required
                className="w-full border-2 border-slate-200 px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-cyan-400 transition-all"
                placeholder="Adınızı ve soyadınızı girin"
              />
            </div>

            <div>
              <label className="flex items-center gap-2 mb-2 text-slate-700 font-bold text-sm">
                <FaEnvelope className="text-cyan-600" /> E-posta
              </label>
              <input
                type="email"
                name="email"
                required
                className="w-full border-2 border-slate-200 px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-cyan-400 transition-all"
                placeholder="ornek@mail.com"
              />
            </div>

            <div>
              <label className="flex items-center gap-2 mb-2 text-slate-700 font-bold text-sm">
                <FaCommentDots className="text-cyan-600" /> Mesajınız
              </label>
              <textarea
                name="message"
                required
                className="w-full border-2 border-slate-200 px-4 py-3 rounded-xl h-40 resize-none focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-cyan-400 transition-all"
                placeholder="Mesajınızı detaylı bir şekilde yazın..."
              />
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-cyan-600 to-blue-600 text-white px-8 py-4 rounded-xl hover:from-cyan-700 hover:to-blue-700 font-bold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-[1.02]"
            >
              Mesajı Gönder
            </button>
          </motion.form>

          {/* BİLGİ KUTULARI */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-col gap-6 justify-center"
          >
            <div className="group bg-white border-2 border-slate-200 rounded-2xl p-6 shadow-lg hover:shadow-xl hover:border-cyan-300 transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="bg-gradient-to-br from-cyan-400 to-blue-500 p-4 rounded-xl group-hover:scale-110 transition-transform duration-300">
                  <FaPhoneAlt className="text-white text-2xl" />
                </div>
                <div>
                  <h4 className="font-bold text-lg text-slate-900 mb-1">Telefon</h4>
                  <a href="tel:05491750025" className="text-cyan-600 font-semibold text-lg hover:text-cyan-700 transition-colors">
                    0549 175 0025
                  </a>
                  <p className="text-slate-500 text-sm mt-1">7/24 Müşteri Hattı</p>
                </div>
              </div>
            </div>

            <div className="group bg-white border-2 border-slate-200 rounded-2xl p-6 shadow-lg hover:shadow-xl hover:border-cyan-300 transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="bg-gradient-to-br from-cyan-400 to-blue-500 p-4 rounded-xl group-hover:scale-110 transition-transform duration-300">
                  <FaMapMarkerAlt className="text-white text-2xl" />
                </div>
                <div>
                  <h4 className="font-bold text-lg text-slate-900 mb-1">Adres</h4>
                  <p className="text-slate-600 font-medium">AKR Ticaret Merkezi</p>
                  <p className="text-slate-500 text-sm">İstanbul, Türkiye</p>
                </div>
              </div>
            </div>

            <div className="group bg-white border-2 border-slate-200 rounded-2xl p-6 shadow-lg hover:shadow-xl hover:border-cyan-300 transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="bg-gradient-to-br from-cyan-400 to-blue-500 p-4 rounded-xl group-hover:scale-110 transition-transform duration-300">
                  <FaClock className="text-white text-2xl" />
                </div>
                <div>
                  <h4 className="font-bold text-lg text-slate-900 mb-1">Çalışma Saatleri</h4>
                  <p className="text-slate-600 font-medium">Hafta içi: 09:00 - 18:00</p>
                  <p className="text-slate-500 text-sm">Hafta sonu: Kapalı</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
