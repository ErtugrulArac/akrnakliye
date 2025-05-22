"use client";

import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@radix-ui/react-accordion";

export default function FAQSection() {
  return (
    <section className="bg-gray-50 py-16 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Sol taraf - Resim */}
        <div className="w-full aspect-square bg-gray-200 rounded-lg overflow-hidden shadow-sm">
          <img
            src="/faq-image.webp"
            alt="Sık Sorulan Sorular"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Sağ taraf - Accordion */}
        <div>
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            Sıkça Sorulan Sorular
          </h2>
          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="item-1">
              <AccordionTrigger className="font-medium text-left w-full">
                AKR Nakliyat hangi bölgelere hizmet veriyor?
              </AccordionTrigger>
              <AccordionContent className="mt-2 text-gray-600">
                Türkiye genelinde tüm şehirlere profesyonel nakliyat hizmeti sunmaktayız.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2">
              <AccordionTrigger className="font-medium text-left w-full">
                Taşınma süreci ne kadar sürer?
              </AccordionTrigger>
              <AccordionContent className="mt-2 text-gray-600">
                Mesafeye ve eşya miktarına bağlı olarak değişmekle birlikte genelde bir gün içinde tamamlanmaktadır.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3">
              <AccordionTrigger className="font-medium text-left w-full">
                Eşyalarım ambalajlanıyor mu?
              </AccordionTrigger>
              <AccordionContent className="mt-2 text-gray-600">
                Evet, tüm eşyalarınız özenle ambalajlanır ve taşımaya hazır hale getirilir.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4">
              <AccordionTrigger className="font-medium text-left w-full">
                Fiyat teklifi nasıl alabilirim?
              </AccordionTrigger>
              <AccordionContent className="mt-2 text-gray-600">
                Web sitemizden form doldurarak ya da bizi arayarak üzerine teklif alabilirsiniz.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  );
}
