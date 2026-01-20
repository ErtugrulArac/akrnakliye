'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, CheckCircle, Users, Zap, Shield } from 'lucide-react'
import Devam from "@/app/hakkimizda/devam"
import Misyon from "@/app/hakkimizda/misyon"

export default function Hakkimizda() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 px-4 md:px-12 overflow-hidden bg-gradient-to-br from-white via-slate-50 to-blue-50">
        {/* Decorative Elements */}
        <div className="absolute top-10 right-0 w-96 h-96 bg-cyan-500/8 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/8 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/3 w-80 h-80 bg-indigo-500/5 rounded-full blur-3xl" />

        <div className="relative z-10 max-w-6xl mx-auto">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-3 mb-10 bg-cyan-50 border border-cyan-200 rounded-full px-6 py-3 hover:border-cyan-300 transition"
          >
            <div className="w-2.5 h-2.5 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full animate-pulse" />
            <span className="text-sm font-semibold text-cyan-900">HAKKIMIZDA / KİMİZ / NİYETİMİZ</span>
          </motion.div>

          {/* Main Title */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="space-y-8 mb-24"
          >
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-black text-slate-900 leading-tight">
              AKR Lojistik
              <br />
              <span className="bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-600 bg-clip-text text-transparent">
                10+ Yıl Güvenin İşareti
              </span>
            </h1>
            <p className="text-lg md:text-xl text-slate-600 font-medium max-w-4xl leading-relaxed">
              Türkiye'nin dört bir yanında, güvenilir ve yenilikçi lojistik çözümleri sunarak işletmelerin büyümesine katkıda bulunuyoruz. Hız, kalite ve müşteri memnuniyeti bizim kimliyetimiz.
            </p>
          </motion.div>

          {/* Stats */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6"
          >
            {[
              { number: '2500+', label: 'Başarılı Teslimat', icon: '📦' },
              { number: '81', label: 'İl Kapsama', icon: '🗺️' },
              { number: '%99.8', label: 'Başarı Oranı', icon: '⭐' },
              { number: '24/7', label: 'Müşteri Desteği', icon: '📞' },
            ].map((stat, i) => (
              <motion.div
                key={i}
                variants={itemVariants}
                className="bg-white border border-slate-200 rounded-2xl p-6 hover:border-cyan-300 hover:shadow-lg transition duration-300 group"
              >
                <div className="text-4xl mb-3 group-hover:scale-110 transition duration-300">{stat.icon}</div>
                <div className="text-2xl md:text-3xl font-black text-slate-900 mb-1">
                  {stat.number}
                </div>
                <p className="text-sm md:text-base text-slate-600 font-medium">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* About Company Section */}
      <section className="relative py-24 px-4 md:px-12 bg-white border-t border-slate-100">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-16 items-center"
          >
            {/* Visual */}
            <motion.div
              initial={{ opacity: 0, scale: 0.92 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="flex justify-center order-2 md:order-1"
            >
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-br from-cyan-200 via-blue-200 to-indigo-200 rounded-3xl blur-2xl opacity-30 group-hover:opacity-50 transition" />
                <div className="relative bg-gradient-to-br from-cyan-50 to-blue-50 border-2 border-cyan-200 rounded-3xl p-12 flex items-center justify-center">
                  <div className="text-center space-y-4">
                    <div className="text-8xl font-black bg-gradient-to-r from-cyan-600 to-indigo-600 bg-clip-text text-transparent">
                      AKR
                    </div>
                    <div className="space-y-1">
                      <p className="text-slate-900 font-bold text-lg">Premium Lojistik</p>
                      <p className="text-slate-600 text-sm">Güvenilir İş Ortağı</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-8 order-1 md:order-2"
            >
              <div>
                <h2 className="text-5xl font-black text-slate-900 mb-2">Biz Kimiz?</h2>
                <div className="w-16 h-1 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full" />
              </div>
              
              <div className="space-y-5 text-slate-700 leading-relaxed">
                <p className="text-lg font-medium">
                  AKR Lojistik, 10 yılı aşkın deneyimle kurulmuş, türkiye'nin en güvenilir taşımacılık ve lojistik şirketlerindendir.
                </p>
                <p>
                  Sadece kargo taşımacılığı değil; depolama, envanter yönetimi, lojistik danışmanlığı ve tedarik zinciri optimizasyonu sunuyoruz.
                </p>
                <p>
                  Her müşterimizi uzun vadeli iş ortağı olarak görüyor, onların başarısını kendi başarımız sayıyoruz.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4 pt-4">
                {[
                  { title: 'Şeffaf İletişim', icon: Users },
                  { title: 'Yüksek Kalite', icon: CheckCircle },
                  { title: 'Hızlı Teslimat', icon: Zap },
                  { title: 'Tam Güvenlik', icon: Shield },
                ].map((item, i) => {
                  const Icon = item.icon
                  return (
                    <motion.div 
                      key={i} 
                      whileHover={{ y: -4 }}
                      className="bg-gradient-to-br from-cyan-50 to-blue-50 border border-cyan-200 rounded-xl p-5 hover:border-cyan-400 hover:shadow-lg transition group"
                    >
                      <Icon className="w-6 h-6 text-cyan-600 mb-2 group-hover:scale-110 transition" />
                      <p className="font-bold text-slate-900 text-sm">{item.title}</p>
                    </motion.div>
                  )
                })}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="relative py-24 px-4 md:px-12 bg-gradient-to-b from-white to-slate-50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center space-y-6 mb-16"
          >
            <h2 className="text-5xl font-black text-slate-900">Değerlerimiz</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Her kararımız ve hareketimizin temelinde bu ilkeler vardır
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-8"
          >
            {[
              {
                title: 'Güvenilirlik',
                desc: 'Verdiğimiz sözü tutarız ve beklentilerin üzerinde hizmet sunuz.',
                color: 'cyan',
              },
              {
                title: 'İnovasyon',
                desc: 'Teknoloji ve akıl kullanarak sürekli iyileştirilme çalışması yaparız.',
                color: 'blue',
              },
              {
                title: 'Müşteri Odaklılık',
                desc: 'Her müşterinin ihtiyaçlarını anlayıp, özel çözümler sunuyoruz.',
                color: 'indigo',
              },
            ].map((value, i) => (
              <motion.div
                key={i}
                variants={itemVariants}
                whileHover={{ y: -8, boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }}
                className={`bg-white border-2 border-${value.color}-200 rounded-2xl p-8 hover:border-${value.color}-400 transition group`}
              >
                <div className={`w-14 h-14 bg-gradient-to-br from-${value.color}-100 to-${value.color}-200 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition`}>
                  <div className={`w-8 h-8 bg-gradient-to-r from-${value.color}-500 to-${value.color}-600 rounded-lg`} />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-3">{value.title}</h3>
                <p className="text-slate-600 leading-relaxed">{value.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Services & Mission Components */}
      <div className="bg-white">
        <Devam />
        <Misyon />
      </div>

      {/* CTA Section */}
      <section className="relative py-24 px-4 md:px-12 bg-gradient-to-b from-slate-50 to-white">
        <div className="relative z-10 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative bg-white border-2 border-slate-200 rounded-3xl shadow-2xl p-12 md:p-16 overflow-hidden"
          >
            {/* Decorative Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-50/50 via-white to-blue-50/50" />
            <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />

            <div className="relative z-10 text-center space-y-12">
            {/* Title Section */}
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-50 to-blue-50 border border-cyan-200 rounded-full px-6 py-2.5 mb-4"
              >
                <div className="w-2 h-2 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full animate-pulse" />
                <span className="text-sm font-bold text-cyan-900">HEMEN BAŞLAYALIM</span>
              </motion.div>
              
              <h2 className="text-4xl md:text-6xl font-black text-slate-900 leading-tight">
                Birlikte Büyüyelim
              </h2>
              <p className="text-xl md:text-2xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
                Lojistik ihtiyaçlarınız için güvenilir ve yenilikçi bir iş ortağı arıyorsanız, doğru yerdesiniz.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col gap-3 sm:gap-4 justify-center items-center pt-4">
              <a href="/iletisim" className="group w-full max-w-xs sm:max-w-sm">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                  className="relative w-full px-8 sm:px-10 py-4 bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-600 text-white font-semibold text-sm sm:text-base rounded-xl shadow-xl hover:shadow-2xl flex items-center justify-center gap-3 overflow-hidden transition-all duration-300 group-hover:gap-4"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <span className="relative z-10">İletişime Geç</span>
                  <ArrowRight className="relative z-10 w-5 h-5 sm:w-6 sm:h-6 group-hover:translate-x-1 transition-transform duration-300" />
                </motion.button>
              </a>
              
              <a href="tel:05491750025" className="group w-full max-w-xs sm:max-w-sm">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                  className="relative w-full px-8 sm:px-10 py-4 bg-white border-2 border-slate-300 text-slate-900 font-semibold text-sm sm:text-base rounded-xl hover:border-cyan-500 hover:bg-gradient-to-r hover:from-cyan-50 hover:to-blue-50 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
                >
                  <span className="flex items-center justify-center gap-3">
                    <span className="text-xl sm:text-2xl">📞</span>
                    <span className="text-sm sm:text-base">0549 175 0025</span>
                  </span>
                </motion.button>
              </a>
            </div>

            {/* Trust Indicators */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="pt-8 flex flex-wrap items-center justify-center gap-8 text-slate-600"
            >
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 bg-gradient-to-r from-green-400 to-green-600 rounded-full flex items-center justify-center">
                  <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="font-semibold">2500+ Teslimat</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full flex items-center justify-center">
                  <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="font-semibold">%99.8 Başarı</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 bg-gradient-to-r from-cyan-400 to-cyan-600 rounded-full flex items-center justify-center">
                  <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="font-semibold">24/7 Destek</span>
              </div>
            </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
