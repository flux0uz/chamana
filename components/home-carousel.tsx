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
import { AspectRatio } from "@/components/ui/aspect-ratio";

import tapasImage from "@/public/images/tapas.jpg";
import tapas2Image from "@/public/images/tapas-2.jpg";
import cocktailsImage from "@/public/images/cocktails.jpg";
import vinosImage from "@/public/images/vinos.jpg";
import mateImage from "@/public/images/mate.jpg";

export function HomeCarousel() {
  const images = [
    tapasImage,
    cocktailsImage,
    vinosImage,
    mateImage,
    tapas2Image,
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
            <AspectRatio ratio={16 / 9}>
              <Image
                src={img}
                quality={100}
                alt="Placeholder about"
                className="object-cover"
                fill
              />
            </AspectRatio>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
