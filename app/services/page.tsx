import serviceData from "@/data/serviceData.json";
import { questions } from "@/data/faqs.json";
import Link from "next/link";

export default function ServicesPage() {
  const { services, serviceArea } = serviceData;

  return (
    <div className="container mx-auto px-4 py-10 space-y-10">
      {/* Header */}
      <div className="text-center space-y-2">
        <h1 className="text-secondary font-bold">What We Do</h1>
        <p className="mx-auto w-xs">Many options available</p>
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Services List */}
        <div className="space-y-4">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-background-100 p-4 rounded shadow-sm"
              >
                <h3 className="font-semibold">{service.title}</h3>
                <p className="font-light">
                  <span className="text-sm">{service.description}</span>
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-4 ">
          {/* Service Area / Map */}
          {serviceArea && (
            <div className="bg-background-50 p-4 rounded shadow-sm">
              <h2 className="text-2xl font-semibold mb-2">Where We Serve</h2>
              <p className="text-foreground font-medium">{serviceArea}</p>
            </div>
          )}
          <div className="bg-gray-100 h-64 flex items-center justify-center rounded shadow-sm">
            <p className="text-gray-400">Map Placeholder</p>
          </div>
          {/* FAQ Section */}
          <div className="container mx-auto ">
            <h2 className="text-3xl font-bold mb-4">
              Frequently Asked Questions
            </h2>
            <div className="space-y-4">
              {questions.map((item, index) => (
                <div
                  className="bg-background-50 p-4 rounded shadow-sm"
                  key={index}
                >
                  <h3 className="font-semibold">{item.q}</h3>
                  <p className="text-forground font-medium">{item.a}</p>
                </div>
              ))}
            </div>
          </div>
          {/* CTA Section */}
          <Link href="/contact" className="block">
            <div className="bg-primary-50 p-6 rounded text-center space-y-2 cursor-pointer hover:bg-primary-100 transition-colors">
              <h2 className="text-2xl font-bold">Get in Touch</h2>
              <p className="text-foreground font-light">
                Contact us today to schedule your free quote!
              </p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
