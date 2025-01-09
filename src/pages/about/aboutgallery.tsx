import MainGallery from "@/components/gallery-main/gallery";
const pictures = [
    "https://images5.alphacoders.com/379/379348.jpg"
]

export default function AboutGallery() {
    return (
        <>
            <MainGallery title="About Us" subtitle="" images={pictures} />
        </>
    )
}