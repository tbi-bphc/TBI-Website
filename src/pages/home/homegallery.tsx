import MainGallery from "@/components/gallery-main/gallery";
const pictures = [
    "/gallery/audi.png",
    "/gallery/lawns.png",
    "/gallery/nabgate.png",
    "/gallery/classroom-1.jpg"
]

export default function HomeGallery() {
    return (
        <>
            <MainGallery pictures={pictures} />
        </>
    )
}