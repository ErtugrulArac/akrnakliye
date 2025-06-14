"use client";
import * as React from "react";
import Autoplay from "embla-carousel-autoplay";
import { logolar } from "./logolar";
import { motion } from "framer-motion";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

export default function CarouselSpacing() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.3 }}
      className="flex justify-center items-center w-full py-20 max-lg:py-10 bg-white"
    >
      <Carousel
        plugins={[
          Autoplay({
            delay: 2000,
            stopOnInteraction: false,
          }),
        ]}
        className="w-full max-w-6xl"
      >
        <CarouselContent className="-ml-1 flex justify-center">
          {logolar.map((item) => (
            <CarouselItem
              key={item.id}
              className="pl-1 basis-[60%] sm:basis-[40%] md:basis-[25%] lg:basis-[15%] flex justify-center items-center"
            >
              <div className="p-4 w-full h-full flex items-center justify-center">
                <img
                  src={item.logo}
                  alt={item.name}
                  className="object-contain max-h-[100px] sm:max-h-[120px] md:max-h-[140px] lg:max-h-[160px]"
                  style={{ width: "auto", height: "auto", maxWidth: "100%" }}
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </motion.div>
  );
}
