import { motion } from "framer-motion";
import { ImagesSlider } from "../ui/images-slider";
import { TextGenerateEffect } from "../ui/text-generate-effect";
interface Props {
    pictures: string[]
}

const images = [
    "https://c4.wallpaperflare.com/wallpaper/732/528/984/dark-abstract-grid-tech-hd-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/878/896/39/tech-technomancer-abstract-minimalism-futuristic-hd-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/876/999/720/minimalism-abstract-tech-futuristic-technomancer-hd-wallpaper-preview.jpg",
];

const words = `BITS Pilani Hyderabad Campus`;

export default function MainGallery({ pictures }: Props) {
    return (
        <ImagesSlider className="h-[40rem]" images={images}>
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
                    className="text-2xl px-4 md:text-4xl lg:text-5xl text-white max-w-4xl leading-relaxed lg:leading-snug text-center mx-auto opacity-80 "
                >
                    Technology and Business Incubator <br />
                    <TextGenerateEffect duration={1} className="text-white" words={words} />
                </motion.h1>
                <button className="px-4 py-2 backdrop-blur-sm border bg-emerald-300/10 border-emerald-500/20 text-white mx-auto text-center rounded-full relative mt-4">
                    <a href="/about">
                    <span>See more →</span>
                    </a>
                    <div className="absolute inset-x-0  h-px -bottom-px bg-gradient-to-r w-3/4 mx-auto from-transparent via-emerald-500 to-transparent" />
                </button>
            </motion.div>
        </ImagesSlider>
    );
}
