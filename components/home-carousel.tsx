"use client";

import * as React from "react";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import AndinaImage from "@/public/images/comida/chamana-cocktail-andina.png";
import ChorizoImage from "@/public/images/comida/chamana-chorizo.png";
import EmpanadasImage from "@/public/images/comida/chamana-empanadas.png";
import LomitoImage from "@/public/images/comida/chamana-lomito.png";
import CocktailImage from "@/public/images/comida/chamana-cocktail.png";
import CarnesImage from "@/public/images/comida/chamana-tabla-carne.png";

export function HomeCarousel() {
  const images = [
    ChorizoImage,
    AndinaImage,
    EmpanadasImage,
    LomitoImage,
    CocktailImage,
    CarnesImage,
  ];

  return (
    <Carousel
      className="w-full"
      opts={{
        align: "start",
        loop: true,
      }}
      plugins={[Autoplay()]}
    >
      <CarouselContent className="sm:-ml-2">
        {images.map((img, i) => (
          <CarouselItem
            key={i}
            className="basis-full sm:pl-2 md:basis-1/2 lg:basis-1/3"
          >
            <Image
              src={img}
              quality={100}
              width={400}
              height={400}
              alt="Placeholder about"
              className="w-full object-cover sm:aspect-square"
            />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
