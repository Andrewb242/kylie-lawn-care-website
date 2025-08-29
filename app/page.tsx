import testimonialData from "@/data/testimonialData.json";
import TestimonialCard from "@/components/TestimonialCard";

export default function HomePage() {
  const { testimonials } = testimonialData;

  return (
    <div className="space-y-16">
      {/* Cover Photo / Hero Section */}
      <div className="relative h-96 flex items-center justify-center overflow-hidden">
        {/* Blurred background */}
        <div className="absolute inset-0 bg-cover bg-center bg-[url('/hero-cover.jpg')] filter blur-sm scale-100" />

        {/* Content */}
        <h1 className="relative text-4xl md:text-5xl font-bold text-white text-center px-4">
          <span className="text-5xl md:text-5xl text-shadow-2xs">
            Precision Landscaping.
          </span>{" "}
          <span className="text-4xl md:text-5xl text-shadow-2xs">
            Lasting Beauty.
          </span>
        </h1>
      </div>

      {/* About Us Section */}
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-4">About Us</h2>
        <p className="text-gray-700">
          S&A Lawncare provides professional landscaping services to make your
          outdoor space beautiful and sustainable. From routine maintenance to
          large-scale projects, our team ensures quality and precision in every
          job.
        </p>
      </div>

      {/* Testimonials Section */}
      <div className="container mx-auto px-4 space-y-8">
        <h2 className="text-3xl font-bold text-center">What Our Clients Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index}>
              <p className="text-gray-800">"{testimonial.quote}"</p>
              <p className="mt-2 font-semibold text-gray-600">
                - {testimonial.author}
              </p>
            </TestimonialCard>
          ))}
        </div>
      </div>
    </div>
  );
}
