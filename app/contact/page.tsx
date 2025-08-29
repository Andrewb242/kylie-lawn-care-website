import ContactForm from "@/components/ContactForm";

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-10">
      {/* Header */}
      <div className="text-center mb-10">
        <h1 className="font-bold text-secondary ">Contact Us</h1>
        <p className="w-xs mx-auto">
          Submit and application and we will reach out to you to schedule a free
          quote!
        </p>
      </div>
      {/* Form */}
      <div className="max-w-lg mx-auto mb-10">
        <ContactForm />
      </div>
    </div>
  );
}
