'use client'
import { FaBullseye } from 'react-icons/fa'
import React from 'react'
import { motion } from 'framer-motion'

export default function Misyonumuz() {
    return (
        <motion.section
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            viewport={{ once: true, amount: 0.3 }}
            className="pt-16 pb-2 bg-white px-4"
        >
            <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-start gap-6 md:gap-10">
                {/* İkon */}
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-yellow-500 text-6xl flex-shrink-0 md:mt-1"
                >
                    <FaBullseye />
                </motion.div>

                {/* Metin */}
                <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    viewport={{ once: true }}
                    className="text-left"
                >
                    <h2 className="text-3xl font-bold mb-4">Misyonumuz</h2>
                    <p className="text-gray-700 leading-relaxed">
                        AKR Ticaret olarak amacımız; sektörde güvenin, hızın ve kalite odaklı
                        yaklaşımın simgesi olmaktır. Müşterilerimizin ihtiyaçlarını en doğru
                        şekilde anlayıp, onlara sürdürülebilir ve pratik çözümler sunmayı ilke edindik.
                        Her sevkiyat, her iş birliği bizim için uzun vadeli bir güven ilişkisidir.
                    </p>
                </motion.div>
            </div>
        </motion.section>
    )
}
