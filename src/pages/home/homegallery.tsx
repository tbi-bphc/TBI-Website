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
    "/homegallery/bits2.jpg", 
    "/homegallery/bits1.jpg",
];

export default function HomeGallery() {
    return (
        <>
            <MainGallery title="Technology Business Incubator" subtitle="BITS Pilani, Hyderabad Campus" images={images}/>
        </>
    )
}