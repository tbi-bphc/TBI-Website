import MainGallery from "@/components/gallery-main/gallery";
const pictures = [
    "https://images5.alphacoders.com/379/379348.jpg"
]

export default function ContactGallery() {
    return (
        <>
            <MainGallery title="Contact Us" subtitle="" images={pictures} />
        </>
    )
}