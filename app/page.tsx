import {
  CallToAction,
  CallToActionTwo,
} from "@/components/layout/sections/cta";
import { FAQSection } from "@/components/layout/sections/faq";
import { HeroSection } from "@/components/layout/sections/hero";
import LessonsSection from "@/components/layout/sections/lessons";
import RentalSection from "@/components/layout/sections/rental";
import { TestimonialSection } from "@/components/layout/sections/testimonial";

export const metadata = {
  title: "King Surf Bali - Home",
  description: "King Surf Bali offers the best surf lessons and surf rentals in Legian Beach Bali.",
};

export default function Home() {
  return (
    <main>
      <HeroSection />
      <LessonsSection />
      <RentalSection />
      <TestimonialSection />
      <CallToActionTwo />
      <FAQSection />
    </main>
  );
}
