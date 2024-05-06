import MainGallery from "@/components/gallery-main/gallery";
const pictures = [
    "https://scontent.fbom19-1.fna.fbcdn.net/v/t39.30808-6/307559152_456647143159292_3134832321580569711_n.jpg?stp=dst-jpg_s960x960&_nc_cat=102&ccb=1-7&_nc_sid=5f2048&_nc_ohc=kGmwBbamGHgQ7kNvgG1yf92&_nc_ht=scontent.fbom19-1.fna&oh=00_AfBQKs8JebtOPsnb8wu5GrIWzq3E8oHCs2kzmLfN0PNtIA&oe=66388BC9",
    "https://qph.cf2.quoracdn.net/main-qimg-0052d1208cffaee2dce84b0ec33ae1a8",
    "https://qph.cf2.quoracdn.net/main-qimg-0052d1208cffaee2dce84b0ec33ae1a8"
]

export default function HomeGallery() {
    return (
        <>
            <MainGallery pictures={pictures} />
        </>
    )
}