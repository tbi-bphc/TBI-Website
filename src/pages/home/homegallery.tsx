import MainGallery from "@/components/gallery-main/gallery";
// const pictures = [
//     "/gallery/audi.png",
//     "/gallery/lawns.png",
//     "/gallery/nabgate.png",
//     "/gallery/classroom-1.jpg",
//     "/HomeBackground.png"
// ]
const pictures = [
     "https://images5.alphacoders.com/379/379348.jpg"
]

const images = [
    "https://c4.wallpaperflare.com/wallpaper/732/528/984/dark-abstract-grid-tech-hd-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/878/896/39/tech-technomancer-abstract-minimalism-futuristic-hd-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/876/999/720/minimalism-abstract-tech-futuristic-technomancer-hd-wallpaper-preview.jpg",
];

export default function HomeGallery() {
    return (
        <>
            <MainGallery title="Technology and Business Incubator" subtitle="BITS Pilani Hyderabad Campus" images={images}/>
        </>
    )
}