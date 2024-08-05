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
  const assets = [
    {
      src: boticaImg,
      alt: "Botica - Chamana Ibiza",
    },
    {
      src: terrazaImg,
      alt: "Terraza - Chamana Ibiza",
    },
    {
      src: clienteImg3,
      alt: "Cliente - Chamana Ibiza",
    },
    {
      src: clientesImg,
      alt: "Clientes - Chamana Ibiza",
    },
    {
      src: ambienteImg,
      alt: "Ambiente - Chamana Ibiza",
    },
    {
      src: clienteBoticaImg3,
      alt: "Cliente - Chamana Ibiza",
    },
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
        {assets.map((asset, i) => (
          <CarouselItem
            key={i}
            className="basis-full sm:pl-0 md:basis-1/2 lg:basis-1/3"
          >
            <Image
              src={asset.src}
              quality={100}
              width={400}
              height={400}
              alt={asset.alt}
              className="w-full object-cover"
              sizes="min-width(768px) 50vw, min-width(1024px) 33vw, 100vw"
              placeholder="blur"
            />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
