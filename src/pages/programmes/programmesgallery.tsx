import MainGallery from "@/components/gallery-main/gallery";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { useEffect } from "react";

export function SecondaryProgrammesGallery({pictures}: {pictures: string[]}) {
    const autoplay = Autoplay({ delay: 5000, stopOnInteraction: false });
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [autoplay]);
  
    useEffect(() => {
      if (emblaApi) emblaApi.reInit();
    }, [emblaApi]);
  
    return (
      <div className="w-96 overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {pictures.map((picture, index) => (
            <div key={index} className="flex-[0_0_100%] min-w-0">
              <div className="p-0">
                <div className="flex items-center justify-center p-0">
                  <img
                    src={picture}
                    alt={`Slide ${index + 1}`}
                    className="rounded-xl object-cover w-full h-64"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
  
const pictures = ["https://images5.alphacoders.com/379/379348.jpg"];

export function ProgrammesGallery() {
  return (
    <>
      <MainGallery title="Programs" subtitle="" images={pictures} />
    </>
  );
}

