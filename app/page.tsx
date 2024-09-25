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
  description: "King Surf Bali - Home",
  // openGraph: {
  //   type: "website",
  //   url: "https://github.com/nobruf/shadcn-landing-page.git",
  //   title: "King Surf Bali - Home",
  //   description: "King Surf Bali - Home",
  //   images: [
  //     {
  //       url: "https://res.cloudinary.com/dbzv9xfjp/image/upload/v1723499276/og-images/shadcn-vue.jpg",
  //       width: 1200,
  //       height: 630,
  //       alt: "Shadcn - Landing template",
  //     },
  //   ],
  // },
  // twitter: {
  //   card: "summary_large_image",
  //   site: "https://github.com/nobruf/shadcn-landing-page.git",
  //   title: "Shadcn - Landing template",
  //   description: "Free Shadcn landing page for developers",
  //   images: [
  //     "https://res.cloudinary.com/dbzv9xfjp/image/upload/v1723499276/og-images/shadcn-vue.jpg",
  //   ],
  // },
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
