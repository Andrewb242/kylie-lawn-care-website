import ContactForm from "@/components/ContactForm";
import Header from "@/components/Header";

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-10">
      {/* Header */}
      <Header
        title="Contact Us"
        subtitle="Submit an application and we will reach out to you to schedule a free quote!"
      />
      {/* Form */}
      <div className="max-w-lg mx-auto mb-10 bg-background-100 rounded-lg p-4 shadow-sm">
        <ContactForm />
      </div>
    </div>
  );
}
