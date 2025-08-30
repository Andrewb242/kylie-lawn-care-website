import BeforeAfterSlider from "@/components/BeforeAfterSlider";
import Header from "@/components/Header";

const photos = [
  {
    before: "https://picsum.photos/500",
    after: "https://picsum.photos/500?random=1",
  },
  {
    before: "https://picsum.photos/500?random=2",
    after: "https://picsum.photos/500?random=3",
  },
  {
    before: "https://picsum.photos/500?random=4",
    after: "https://picsum.photos/500?random=5",
  },
  {
    before: "https://picsum.photos/500?random=6",
    after: "https://picsum.photos/500?random=7",
  },
  {
    before: "https://picsum.photos/500?random=8",
    after: "https://picsum.photos/500?random=9",
  },
  {
    before: "https://picsum.photos/500?random=10",
    after: "https://picsum.photos/500?random=11",
  },
];

export default function GalleryPage() {
  return (
    <div className="container mx-auto px-4 py-10 space-y-10">
      <Header title="Gallery" subtitle="See our work in action." />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {photos.map((photo, idx) => (
          <BeforeAfterSlider
            key={idx}
            before={photo.before}
            after={photo.after}
          />
        ))}
      </div>
    </div>
  );
}
