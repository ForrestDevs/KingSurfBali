import { CallToActionTwo } from "@/components/layout/sections/cta";
import LessonsSection from "@/components/layout/sections/lessons";
import RentalSection from "@/components/layout/sections/rental";
import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Instagram from "@/components/layout/instagram";

export default function Contact() {
  return (
    <div>
      <section
        className="h-screen bg-no-repeat bg-[url(/bg5.jpg)] flex items-center"
        style={{
          backgroundSize: "cover",
          backgroundPosition: "top",
        }}
      >
        <div className="px-20 mx-auto text-center py-24 space-y-8">
          <h1 className="mb-2 mt-20 text-4xl font-[400] lg:tracking-[5px] lg:leading-[56px] text-white lg:text-[80px] uppercase">
            Our Services
          </h1>
          <p className="text-xl sm:text-lg lg:text-xl font-semibold sm:font-bold text-primary">
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
      <LessonsSection />
      <RentalSection />
      <CallToActionTwo />
    </div>
  );
}
