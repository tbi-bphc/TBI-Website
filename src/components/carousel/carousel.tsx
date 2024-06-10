import * as React from "react"

import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

const pictures = [
  "/startups/abyom.png",
  "/startups/alfaleus.png",
  "/startups/anjamma.png",
  "/startups/Applied_Aero_Labs.png",
  "/startups/atreves.png",
  "/startups/cinnova.png",
  "/startups/cleome.png",
  "/startups/loka.png",
  "/startups/masuu.png",
  "/startups/pharmajen.png",
  "/startups/pyrome.png",
  "/startups/sensome.png",
  "/startups/tangerne.png",
]

export function MultiImageCarousel() {
  return (
    <Carousel className="w-full"
      opts={{
        align: "start",
        loop: true,
        slidesToScroll: 2,
      }}
    >
      <CarouselContent className="-ml-1">
        {pictures.map((link, index) => (
          <CarouselItem key={index} className=" md:basis-1/3 lg:basis-1/4">
            <div className="p-1">
              <Card>
                <CardContent className="p-0 m-0 w-full">
                  <img src={link} alt="index" className="h-56 object-contain p-4 flex m-auto" />
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <div className="hidden md:block">
        <CarouselPrevious />
        <CarouselNext />
      </div>
    </ Carousel>
  )
}
