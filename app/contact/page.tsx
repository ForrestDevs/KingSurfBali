import Instagram from "@/components/layout/instagram";
import { CallToActionTwo } from "@/components/layout/sections/cta";
import VisitSection from "@/components/layout/sections/visit";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Contact() {
  return (
    <div>
      <section
        className="h-screen bg-no-repeat bg-[url(/bg6.jpg)]"
        style={{
          backgroundSize: "cover",
          backgroundPosition: "top",
        }}
      >
        <div className="px-20 mx-auto text-center py-24 space-y-8">
          <h1 className="bebas-neue mb-2 mt-20 text-4xl font-[400] lg:tracking-[5px] lg:leading-[56px] text-white lg:text-[80px]">
            CONTACT US
          </h1>
          <p className="text-lg lg:font-bold text-primary lg:text-2xl">
            KING SURF BALI
          </p>
          <div className="flex gap-4 justify-center items-center mt-5 mx-auto">
            <Link
              href="https://wa.me/6282292947707"
              className={cn(buttonVariants(), "text-black group/arrow")}
            >
              WhatsApp
              <ArrowRight className="size-5 ml-2 group-hover/arrow:translate-x-1 transition-transform" />
            </Link>
            <Instagram color="white" />
          </div>
        </div>
      </section>
      <VisitSection />
      <CallToActionTwo />
    </div>
  );
}
