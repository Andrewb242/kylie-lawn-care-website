import { Divider } from "@heroui/react";
import { GrSchedules } from "react-icons/gr";
import { GoChecklist } from "react-icons/go";
import { PiHandshakeLight } from "react-icons/pi";
import { FiHeart } from "react-icons/fi";
import Header from "@/components/Header";

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 space-y-8 py-10">
      {/* Header */}
      <Header
        title="About Us"
        subtitle="Learn more about our mission and values."
      />

      {/* About Us Section */}
      <div>
        <h2 className="text-4xl font-bold mb-4">Our Story</h2>
        <p>
          At Auman's Landscaping and Services LLC, we believe the outside of
          your home should feel just as welcoming and cared for as the inside.
          That's why we focus on turning your yard into a space that brings
          pride, comfort, and beauty—helping transform a house into a home from
          the outside in.
        </p>
        <p>
          For over three years, we've proudly served Central Pennsylvania with
          reliable, year-round outdoor services. Whether it's routine mowing,
          seasonal cleanups, or snow removal, we approach every job with care,
          consistency, and a commitment to quality.
        </p>
        <p>
          Our journey began when our founder, Kylie Auman, was working for
          another lawn care company during college. Inspired by a desire to
          build something of her own, she launched S & A Lawn Care and Services
          LLC—balancing school and entrepreneurship along the way. What started
          as a one-woman operation has grown into a trusted, community-based
          business that continues to thrive after her college graduation. We
          specialize in dependable lawn care, maintenance, landscaping, and
          seasonal services. Our goal is simple: help homeowners feel proud of
          their outdoor spaces year-round.
        </p>
      </div>
      <Divider />
      {/* Team Section */}
      <div>
        <h2>Our Team</h2>
        <p>
          Auman's Landscaping and Services LLC is proudly family-run, and that
          spirit of connection is at the heart of everything we do. Kylie
          created the business and now leads a team of dedicated
          employees—including several family members—who share her values and
          work ethic. When you hire us, you’re not just hiring a company—you’re
          joining the Auman's Landscaping and Services LLC family.
        </p>
      </div>

      <Divider />

      {/* Image Transition */}

      <div className="relative h-[100px] md:h-[200px] my-8">
        <div
          className="absolute left-0 right-0 w-screen h-full"
          style={{ left: "50%", transform: "translateX(-50%)" }}
        >
          <img
            src="/about-us.jpg"
            alt="About Us"
            className="w-full h-full object-cover brightness-80"
          />
        </div>
      </div>

      <Divider />

      {/* Values List */}
      <div className="mt-7">
        <div className="mx-auto max-w-xl">
          <h2 className="text-center">Our Mission & Values</h2>
          <p className="text-center">
            We’re grounded in values that guide every job we take on.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 py-10">
            <ValueCard
              title="Reliability"
              icon={<GrSchedules height={28} width={28} />}
            >
              Showing up when we say we will and getting the job done right.
            </ValueCard>
            <ValueCard
              title="Quality"
              icon={<GoChecklist height={28} width={28} />}
            >
              Treating each yard like it’s our own, with attention to detail and
              pride in our work.
            </ValueCard>
            <ValueCard title="Care" icon={<FiHeart height={28} width={28} />}>
              We’re a family business, and we treat our clients like they’re
              part of that family.
            </ValueCard>
            <ValueCard
              title="Respect"
              icon={<PiHandshakeLight height={28} width={28} />}
            >
              For your time, your property, and your trust in us.
            </ValueCard>
          </div>
          <p className="mt-3 text-center">
            Whether we’re mowing your lawn or helping clean up after a storm,
            you can count on us to work hard, communicate clearly, and always
            put your satisfaction first.
          </p>
        </div>
      </div>
    </div>
  );
}

interface ValueCardProps {
  title: string;
  icon?: React.ReactNode;
  children: React.ReactNode;
}

function ValueCard({ title, icon, children }: ValueCardProps) {
  return (
    <div className="p-4 bg-background-50 rounded-xl shadow-sm ">
      <div className="flex justify-between">
        <h3>{title}</h3>
        {icon && (
          <div className="flex items-center justify-center h-7 w-7">{icon}</div>
        )}
      </div>
      <span className="text-sm font-medium">{children}</span>
    </div>
  );
}
