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
function Gallery({pictures} : Props) {
    
    return (
        <Carousel
            className="relative -z-10 -mb-10 my-4"
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
                                <CardContent className="p-0 m-0 ">
                                    <img src={link} alt="index" className="w-full h-[20vh] md:h-[80vh] rounded-2xl " />
                                </CardContent>
                            </Card>
                        </div>
                    </CarouselItem>
                ))}
            </CarouselContent>
        </Carousel>
    )
}

const pictures = [
    "https://scontent.fbom19-1.fna.fbcdn.net/v/t39.30808-6/307559152_456647143159292_3134832321580569711_n.jpg?stp=dst-jpg_s960x960&_nc_cat=102&ccb=1-7&_nc_sid=5f2048&_nc_ohc=kGmwBbamGHgQ7kNvgG1yf92&_nc_ht=scontent.fbom19-1.fna&oh=00_AfBQKs8JebtOPsnb8wu5GrIWzq3E8oHCs2kzmLfN0PNtIA&oe=66388BC9",
    "https://qph.cf2.quoracdn.net/main-qimg-0052d1208cffaee2dce84b0ec33ae1a8",
    "https://qph.cf2.quoracdn.net/main-qimg-0052d1208cffaee2dce84b0ec33ae1a8"
]

export default function EventsGallery(){
    return(
        <div>
            <Gallery pictures={pictures}/>
        </div>
    )
}