'use client'
import { FaClipboardCheck, FaWarehouse, FaHeadset, FaHandshake } from 'react-icons/fa'
import React from 'react'
import { motion } from 'framer-motion'

export default function Hizmetlerimiz() {
  const hizmetler = [
    {
      ikon: <FaClipboardCheck size={40} className="text-yellow-500" />,
      baslik: 'Sözleşmeli Taşımacılık',
      aciklama:
        'İhtiyacınıza özel lojistik çözümleri sunuyoruz. Hızlı, güvenilir ve zamanında taşımacılığı garanti ediyoruz.',
    },
    {
      ikon: <FaHandshake size={40} className="text-yellow-500" />,
      baslik: 'Ticaret İlkelerimiz',
      aciklama:
        'Şeffaflık, güven ve süreklilik esasına dayalı ticaret anlayışımızla, her müşterimize uzun vadeli çözüm ortağı olmayı hedefliyoruz.',
    },
    {
      ikon: <FaWarehouse size={40} className="text-yellow-500" />,
      baslik: 'Depolama ve Stok Yönetimi',
      aciklama:
        'Modern ve akıllı depolarımız sayesinde stok maliyetlerinizi azaltırken verimliliğinizi artırıyoruz.',
    },
    {
      ikon: <FaHeadset size={40} className="text-yellow-500" />,
      baslik: 'Danışmanlık Hizmetleri',
      aciklama:
        'Taşımacılık türü seçimi veya tüm lojistik süreci yönetimi için uzman ekibimiz yanınızda.',
    },
  ]

  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      viewport={{ once: true, amount: 0.2 }}
      className="py-20 pb-5 bg-white text-center px-4"
    >
      <h2 className="text-3xl font-bold mb-2">Hizmetlerimiz</h2>
      <p className="text-yellow-500 font-medium mb-10">AKR TİCARET LOJİSTİK ÇÖZÜMLER</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {hizmetler.map((hizmet, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.15 }}
            viewport={{ once: true }}
            className="bg-gray-50 rounded-lg shadow-md p-6 flex flex-col items-start text-left hover:shadow-lg transition"
          >
            {hizmet.ikon}
            <h3 className="text-xl font-semibold mt-4 mb-2">{hizmet.baslik}</h3>
            <p className="text-gray-600">{hizmet.aciklama}</p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  )
}
