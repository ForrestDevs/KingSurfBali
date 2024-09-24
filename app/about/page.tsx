import { CallToActionTwo } from "@/components/layout/sections/cta";
import GallerySection from "@/components/layout/sections/gallery";
import { TestimonialSection } from "@/components/layout/sections/testimonial";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Instagram from "@/components/layout/instagram";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import StorySection from "@/components/layout/sections/story";

export default function About() {
  return (
    <div>
      <section
        className="h-screen bg-no-repeat bg-[url(/bg7.jpg)] flex items-center"
        style={{
          backgroundSize: "cover",
          backgroundPosition: "top",
        }}
      >
        <div className="px-20 mx-auto text-center py-24 space-y-8">
          <h1 className="mb-2 mt-10 sm:mt-20 text-3xl sm:text-3xl md:text-4xl font-[400] tracking-[2px] sm:tracking-[3px] md:tracking-[5px] leading-[40px] sm:leading-[46px] md:leading-[56px] text-white lg:text-[60px] xl:text-[80px] uppercase">
            About Us
          </h1>
          <p className="text-xl sm:text-lg md:text-xl lg:text-2xl font-semibold sm:font-bold text-primary">
            KING SURF BALI
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-5 mx-auto">
            <Link
              href="https://wa.me/6282292947707"
              className={cn(
                buttonVariants({ size: "lg" }),
                "text-black group/arrow w-full sm:w-auto"
              )}
            >
              WhatsApp
              <ArrowRight className="size-5 sm:size-5 ml-2 group-hover/arrow:translate-x-1 transition-transform" />
            </Link>
            <Instagram color="black" asButton />
          </div>
        </div>
      </section>
      <StorySection />
      <GallerySection />
      <CallToActionTwo />
      <TestimonialSection />
    </div>
  );
}
