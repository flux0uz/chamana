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

import sistersImage from "@/public/images/sisters.png";
import boticaImage from "@/public/images/botica.png";
import tapasImage from "@/public/images/tapas.png";
import cocktailsImage from "@/public/images/cocktails.png";
import vinosImage from "@/public/images/wines.png";
import mateImage from "@/public/images/mate.png";

export function HomeCarousel() {
  const images = [
    sistersImage,
    boticaImage,
    tapasImage,
    cocktailsImage,
    vinosImage,
    mateImage,
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
      <CarouselContent className="-ml-2">
        {images.map((img, i) => (
          <CarouselItem
            key={i}
            className="basis-full pl-2 md:basis-1/2 lg:basis-1/3"
          >
            <Image
              src={img}
              quality={100}
              alt="Placeholder about"
              className="object-cover"
            />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
