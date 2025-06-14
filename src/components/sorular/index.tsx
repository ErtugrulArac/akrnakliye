"use client";

import Faq from "@/components/sorular/faq";
import { motion } from "framer-motion";

export default function Sorular() {
  return (
    <section id="sorular" className="scroll-mt-32 bg-white py-12">
      <div className="flex w-[90%] max-xl:w-[90%] m-auto justify-center items-center max-md:gap-6 max-lg:flex-col">
        
        {/* Sol görsel ve başlık */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
          className="flex justify-center items-center flex-col max-xl:flex-1"
        >
          <img
            className="w-[30%] max-md:w-[60%]"
            src="akrticaretsoru.webp"
            alt="qr menü soru cevap"
          />
          <p className="text-4xl max-md:text-3xl max-lg:w-[90%] font-fontum font-black w-[40%] text-center tracking-wider max-md:w-full">
            Sıkça Sorulan Sorular (SSS)
          </p>
        </motion.div>

        {/* Sağdaki soru bileşeni */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true, amount: 0.3 }}
          className="w-[50%] max-lg:w-[95%]"
        >
          <Faq />
        </motion.div>
      </div>
    </section>
  );
}
