"use client";
import * as React from "react";
import Autoplay from "embla-carousel-autoplay";
import { logolar } from "./logolar";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

export default function CarouselSpacing() {
  return (
    <div className="flex justify-center items-center w-full py-20 max-lg:py-10 bg-white">
      <Carousel
        plugins={[
          Autoplay({
            delay: 1000,
          }),
        ]}
        className="w-full max-w-6xl"
      >
        <CarouselContent className="-ml-1 flex justify-center">
          {logolar.map((item) => (
            <CarouselItem
              key={item.id}
              className="pl-1 basis-[60%] sm:basis-[40%] md:basis-[25%] lg:basis-[15%] flex justify-center"
            >
              <div className="p-4 w-full h-full flex items-center justify-center">
                <img
                  src={item.logo}
                  alt={item.name}
                  className="max-h-24 sm:max-h-28 md:max-h-32 lg:max-h-36 object-contain transition-transform duration-300 hover:scale-105"
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
}
