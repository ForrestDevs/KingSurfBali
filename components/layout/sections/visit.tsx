import Map from "@/components/layout/map";
import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";

export default function VisitSection() {
  return (
    <div className="flex justify-center items-center py-24 sm:py-32">
      <section className="w-full px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="font-extrabold text-2xl sm:text-3xl lg:text-4xl leading-tight mb-4">
            Visit
            <span className="text-primary"> Us</span>
          </h1>
          <p className="text-base sm:text-lg lg:text-xl font-medium mb-6">
            If there is further information you can visit our office at the link
            below.
          </p>
          <Link
            href="https://g.co/kgs/hA7jzET"
            className={cn(buttonVariants({ size: "lg" }), "text-black")}
          >
            Open Map
          </Link>
        </div>
      </section>
    </div>
  );
}
