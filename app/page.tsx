import testimonialData from "@/data/testimonialData.json";
import TestimonialCard from "@/components/TestimonialCard";
import Link from "next/link";
import { Button } from "@heroui/button";
import { Divider } from "@heroui/react";

export default function HomePage() {
  const { testimonials } = testimonialData;

  return (
    <div className="space-y-16">
      {/* Cover Photo / Hero Section */}
      <div className="relative h-56 md:h-96 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center bg-[url('/hero-cover.jpg')] filter blur-sm scale-100 brightness-80" />

        {/* Content */}
        <h1 className="relative font-bold text-white text-center px-4">
          <span className="text-lg md:text-5xl text-shadow-2xs">
            Auman's Landscaping and Services LLC
            <br />
          </span>{" "}
          <span className="text-sm md:text-4xl text-shadow-2xs">
            Precision Landscaping. Lasting Beauty.
          </span>
        </h1>
      </div>

      {/* About Us Section */}
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-4 text-center">
          Who We Are at a Glance
        </h2>
        <p className="text-foreground">
          At Auman's Landscaping and Services LLC, we’ve been proudly serving
          our community for over three years with reliable, year-round service.
          From mowing and maintenance to full yard cleanups and snow removal,
          we’re here to keep your outdoor space looking its best in every
          season.
        </p>
        <div className="space-x-4 text-center md:text-right">
          <Button
            as={Link}
            color="primary"
            variant="bordered"
            href="/about"
            className="mt-4"
          >
            Learn more about us
          </Button>
          <Button as={Link} color="primary" href="/contact" className="mt-4">
            Get in Touch
          </Button>
        </div>
        <Divider className="mt-5" />
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
