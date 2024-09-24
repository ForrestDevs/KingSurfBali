import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";

export default function StorySection() {
  return (
    <div className="container-fluid bg-white flex items-center justify-center">
      <div className="container mx-auto my-10">
        <div className="max-w-[700px] mx-auto text-left">
          <h1 className="font-extrabold lg:text-[32px] text-xl leading-none lg:leading-[2.4rem]">
            Our Story: Riding the Waves of Passion
          </h1>
          <p className="text-[#222222] my-5">
            King Surf Bali was born from a deep love for the ocean and a desire to
            share the thrill of surfing with others. Founded by a group of local
            surf enthusiasts, we&apos;ve grown into a family of dedicated
            instructors and surf lovers committed to providing the best surfing
            experience in Bali.
          </p>
          <p className="text-[#222222] my-5">
            We offer a range of services tailored to all levels of surfers:
          </p>
          <ul className="text-[#222222] my-5 list-disc list-inside">
            <li>Beginner, intermediate, and advanced surf lessons</li>
            <li>Board rentals for those ready to catch waves on their own</li>
            <li>Guided surf tours to Bali&apos;s best spots</li>
            <li>Surf camps for immersive experiences</li>
          </ul>
          <p className="text-[#222222] my-5">
            At King Surf Bali, we&apos;re more than just a surf school -
            we&apos;re a community. We&apos;re dedicated to not only teaching
            surfing but also fostering a love for the ocean and promoting
            environmental awareness.
          </p>

          <div className="text-center">
            <Link
              href="https://wa.me/6282292947707"
              className={cn(
                buttonVariants({ size: "lg", variant: "default" }),
                "text-black"
              )}
            >
              <p>Join Our Community</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
