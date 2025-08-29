import BeforeAfterSlider from "@/components/BeforeAfterSlider";

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
      <div className="text-center mb-6">
        <h1 className="text-3xl font-bold">Gallery</h1>
        <p className="text-gray-600">
          Drag the slider to see before/after results
        </p>
      </div>

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
