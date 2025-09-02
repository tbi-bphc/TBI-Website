import { motion } from "framer-motion";
import { ImagesSlider } from "../ui/images-slider";
import { TextGenerateEffect } from "../ui/text-generate-effect";




const words = `BITS Pilani Hyderabad Campus`;

interface GalleryProps {
    title: string;
    subtitle: string;
    images: string[];
}

export default function MainGallery({title, subtitle, images} : GalleryProps) {
    return (
        <ImagesSlider className="h-[25rem]" images={images}>
            <motion.div
                initial={{
                    opacity: 0,
                    y: -80,
                }}
                animate={{
                    opacity: 1,
                    y: 0,
                }}
                transition={{
                    duration: 1,
                }}
                className="z-50 flex flex-col justify-center items-center"
            >
                <motion.h1
                    className="text-2xl px-4 font-bold md:text-4xl lg:text-5xl text-white max-w-4xl leading-relaxed lg:leading-snug text-center mx-auto opacity-80 "
                >
                    {title} <br />
                    <TextGenerateEffect duration={1} className="text-white" words={subtitle} />
                </motion.h1>
            </motion.div>
        </ImagesSlider>
    );
}
