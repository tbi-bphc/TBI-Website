import MainGallery from "@/components/gallery-main/gallery";
  
const pictures = ["https://images5.alphacoders.com/379/379348.jpg"];

export function SerpGallery() {
  return (
    <>
      <MainGallery title="Serp Project" subtitle="" images={pictures} />
    </>
  );
}
