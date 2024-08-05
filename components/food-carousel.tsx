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

import entranaImg from "@/public/images/comida/chamana-entrana.png";
import chamanaCocktailImg from "@/public/images/comida/cocktail-chamana.png";
import tablaCarneImg from "@/public/images/comida/chamana-tabla-carne.png";
import gambasImg from "@/public/images/comida/chamana-gambas.png";
import pachamamaCocktailImg from "@/public/images/comida/cocktail-pachamama.png";
import empanadasImg from "@/public/images/comida/chamana-empanadas-2.png";
import caviarImg from "@/public/images/comida/chamana-caviar.png";
import curanderaCocktailImg from "@/public/images/comida/cocktail-curandera.png";
import ajiesImg from "@/public/images/comida/chamana-ajies.png";
import choripanImg from "@/public/images/comida/chamana-choripan.png";
import lomitoImg from "@/public/images/comida/chamana-lomito.png";
import clubMateImg from "@/public/images/comida/bebida-club-mate.png";
import clienteImg from "@/public/images/comida/chamana-cliente-1.png";
import cliente2Img from "@/public/images/comida/chamana-cliente-2.png";

export function FoodCarousel() {
  const images = [
    entranaImg,
    tablaCarneImg,
    chamanaCocktailImg,
    gambasImg,
    clubMateImg,
    empanadasImg,
    clienteImg,
    caviarImg,
    lomitoImg,
    pachamamaCocktailImg,
    cliente2Img,
    ajiesImg,
    choripanImg,
    curanderaCocktailImg,
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
      <CarouselContent className="sm:-ml-0">
        {images.map((img, i) => (
          <CarouselItem
            key={i}
            className="basis-full sm:pl-0 md:basis-1/2 lg:basis-1/3"
          >
            <Image
              src={img}
              quality={100}
              width={400}
              height={400}
              alt="Placeholder about"
              className="w-full object-cover"
            />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
