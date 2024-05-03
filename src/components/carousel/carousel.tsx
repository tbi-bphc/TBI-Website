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
    "https://scontent.fbom19-1.fna.fbcdn.net/v/t39.30808-6/307559152_456647143159292_3134832321580569711_n.jpg?stp=dst-jpg_s960x960&_nc_cat=102&ccb=1-7&_nc_sid=5f2048&_nc_ohc=kGmwBbamGHgQ7kNvgG1yf92&_nc_ht=scontent.fbom19-1.fna&oh=00_AfBQKs8JebtOPsnb8wu5GrIWzq3E8oHCs2kzmLfN0PNtIA&oe=66388BC9",
    "https://qph.cf2.quoracdn.net/main-qimg-0052d1208cffaee2dce84b0ec33ae1a8",
    "https://qph.cf2.quoracdn.net/main-qimg-0052d1208cffaee2dce84b0ec33ae1a8",
    "https://scontent.fbom19-1.fna.fbcdn.net/v/t39.30808-6/307559152_456647143159292_3134832321580569711_n.jpg?stp=dst-jpg_s960x960&_nc_cat=102&ccb=1-7&_nc_sid=5f2048&_nc_ohc=kGmwBbamGHgQ7kNvgG1yf92&_nc_ht=scontent.fbom19-1.fna&oh=00_AfBQKs8JebtOPsnb8wu5GrIWzq3E8oHCs2kzmLfN0PNtIA&oe=66388BC9",
    "https://qph.cf2.quoracdn.net/main-qimg-0052d1208cffaee2dce84b0ec33ae1a8",
    "https://qph.cf2.quoracdn.net/main-qimg-0052d1208cffaee2dce84b0ec33ae1a8",
]
 
export function MultiImageCarousel() {
  return (
    <Carousel className="w-full mt-4 -z-10"
        opts={{
            align:"start",
            loop:true,
            slidesToScroll:2,
        }}
    >
      <CarouselContent className="-ml-1">
        {pictures.map((link, index) => (
          <CarouselItem key={index} className="pl-1 md:basis-1/3 lg:basis-1/4">
            <div className="p-1">
              <Card>
                {/* <CardContent className="flex aspect-square items-center justify-center p-6"> */}
                <CardContent className="p-0 m-0 w-full">
                    <img src={link} alt="index" className="h-56 " />
                </CardContent>

                {/* </CardContent> */}
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}