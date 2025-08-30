import serviceData from "@/data/serviceData.json";
import { questions } from "@/data/faqs.json";
import Link from "next/link";
import Header from "@/components/Header";
import { Divider } from "@heroui/react";

export default function ServicesPage() {
  const { services, serviceArea } = serviceData;

  return (
    <div className="container mx-auto px-4 py-10 space-y-10">
      {/* Header */}
      <Header
        title="Our Services"
        subtitle="Quality lawn care and maintenance."
      />

      {/* Main Content */}
      <div>
        {/* Services List */}
        <div className="space-y-4 mb-7">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-background-100 p-4 rounded shadow-sm hover:scale-105 transition-transform"
              >
                <h3 className="font-semibold">{service.title}</h3>
                <p className="font-light">
                  <span className="text-sm">{service.description}</span>
                </p>
              </div>
            ))}
          </div>
        </div>

        <Divider />

        <div className="space-y-4 mt-7">
          {/* Service Area / Map */}
          {serviceArea && (
            <div className="bg-background-50 p-4 rounded shadow-sm">
              <h2 className="text-2xl font-semibold mb-2">Where We Serve</h2>
              <p className="text-foreground font-medium">{serviceArea}</p>
            </div>
          )}
          <div className="bg-background-100 h-64 flex items-center justify-center rounded shadow-sm">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d771181.5313111485!2d-77.76038990000004!3d40.97211110000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89ce9afae03ba819%3A0xe9305b782a439601!2sCentre%20County%2C%20PA!5e0!3m2!1sen!2sus!4v1756487027910!5m2!1sen!2sus"
              className="w-full h-full"
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>

      <Divider />
      {/* FAQ Section */}
      <div className="container mx-auto ">
        <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {questions.map((item, index) => (
            <div className="bg-background-50 p-4 rounded shadow-sm" key={index}>
              <h3 className="font-semibold">{item.q}</h3>
              <p className="text-forground font-light">{item.a}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <Link href="/contact" className="block">
        <div className="bg-primary-100 p-6 rounded text-center space-y-2 cursor-pointer hover:bg-primary-50 transition-colors">
          <h2 className="text-2xl font-bold">Get in Touch</h2>
          <p className="text-foreground font-light">
            Contact us today to schedule your free quote!
          </p>
        </div>
      </Link>
    </div>
  );
}
