import * as React from "react"

import { Card, CardContent } from "@/components/ui/card"
import Autoplay from "embla-carousel-autoplay"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"

interface Props {
    pictures: string[]
}

export default function MainGallery({pictures} : Props) {
    return (
        <Carousel
            className="relative w-full -z-10 mb-10"
            plugins={[
                Autoplay({
                    delay: 2000,
                }),
            ]}
        >
            <CarouselContent>
                {pictures.map((link, index) => (
                    <CarouselItem key={index}>
                        <div className="">
                            <Card className="rounded-2xl">
                                <CardContent className="p-0 m-0">
                                    <img src={link} alt="" className="w-full object-cover h-[60vh] rounded-md " />
                                </CardContent>
                            </Card>
                        </div>
                    </CarouselItem>
                ))}
            </CarouselContent>
        </Carousel>
    )
}
