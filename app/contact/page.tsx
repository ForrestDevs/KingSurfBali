import Instagram from "@/components/layout/instagram";
import { CallToActionTwo } from "@/components/layout/sections/cta";
import VisitSection from "@/components/layout/sections/visit";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata = {
  title: "King Surf Bali - Contact",
  description: "Contact King Surf Bali for the best surf lessons and surf rentals in Legian Beach Bali.",
};

export default function Contact() {
  return (
    <div>
      <section
        className="h-screen bg-no-repeat bg-[url(/bg6.jpg)] flex items-center"
        style={{
          backgroundSize: "cover",
          backgroundPosition: "top",
        }}
      >
        <div className="px-20 mx-auto text-center py-24 space-y-8">
          <h1 className="mb-2 mt-20 text-4xl font-[400] lg:tracking-[5px] lg:leading-[56px] text-white lg:text-[80px]">
            CONTACT US
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
      <VisitSection />
      <CallToActionTwo />
    </div>
  );
}
