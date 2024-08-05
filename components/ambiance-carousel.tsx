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

import clientesImg from "@/public/images/ambiente/chamana-clientes.png";
import terrazaImg from "@/public/images/ambiente/chamana-terraza.png";
import clienteBoticaImg3 from "@/public/images/ambiente/chamana-cliente-botica.png";
import ambienteImg from "@/public/images/ambiente/chamana-ambiente.png";
import boticaImg from "@/public/images/ambiente/chamana-botica.png";
import clienteImg3 from "@/public/images/ambiente/chamana-cliente-3.png";

export function AmbianceCarousel() {
  const images = [
    boticaImg,
    terrazaImg,
    clienteImg3,
    clientesImg,
    ambienteImg,
    clienteBoticaImg3,
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
