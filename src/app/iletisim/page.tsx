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
    <section className="bg-white py-32 px-4">
      <div className="max-w-6xl mx-auto">
        {/* BAŞLIK */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-800 mb-2">Bizimle İletişime Geçin</h2>
          <p className="text-gray-600 text-lg">
            Sorularınız, önerileriniz veya işbirlikleriniz için aşağıdaki formu doldurabilirsiniz.
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
            className="space-y-6 bg-gray-50 p-8 rounded-xl shadow-lg"
          >
            <div>
              <label className="flex items-center gap-2 mb-1 text-gray-700 font-semibold">
                <FaUserAlt className="text-yellow-500" /> Ad Soyad
              </label>
              <input
                type="text"
                name="name"
                required
                className="w-full border px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
                placeholder="Adınızı girin"
              />
            </div>

            <div>
              <label className="flex items-center gap-2 mb-1 text-gray-700 font-semibold">
                <FaEnvelope className="text-yellow-500" /> E-posta
              </label>
              <input
                type="email"
                name="email"
                required
                className="w-full border px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
                placeholder="ornek@mail.com"
              />
            </div>

            <div>
              <label className="flex items-center gap-2 mb-1 text-gray-700 font-semibold">
                <FaCommentDots className="text-yellow-500" /> Mesajınız
              </label>
              <textarea
                name="message"
                required
                className="w-full border px-4 py-3 rounded-md h-40 resize-none focus:outline-none focus:ring-2 focus:ring-yellow-400"
                placeholder="Mesajınızı yazın..."
              />
            </div>

            <button
              type="submit"
              className="bg-yellow-500 text-white px-8 py-3 rounded-md hover:bg-yellow-600 font-semibold transition"
            >
              Gönder
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
            <div className="flex items-start gap-4">
              <FaPhoneAlt className="text-yellow-500 text-2xl mt-1" />
              <div>
                <h4 className="font-semibold text-lg text-gray-800">Telefon</h4>
                <p className="text-gray-600">0549 175 0025</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <FaMapMarkerAlt className="text-yellow-500 text-2xl mt-1" />
              <div>
                <h4 className="font-semibold text-lg text-gray-800">Adres</h4>
                <p className="text-gray-600">AKR Ticaret Merkezi, İstanbul</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <FaClock className="text-yellow-500 text-2xl mt-1" />
              <div>
                <h4 className="font-semibold text-lg text-gray-800">Çalışma Saatleri</h4>
                <p className="text-gray-600">Hafta içi 09:00 - 18:00</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
