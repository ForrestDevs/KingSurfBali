import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export const HeroSection = () => {
  return (
    <section
      className="h-screen bg-no-repeat bg-[url(/bg2.jpg)] bg-background bg-blend-multiply"
      style={{
        backgroundSize: "cover",
        backgroundPosition: "top",
      }}
    >
      <div className="flex items-center justify-center h-full lg:max-w-screen-xl gap-8 mx-auto py-20 md:py-32 px-4">
        <div className="text-center space-y-8">
          <div className="max-w-screen-md mx-auto text-center text-4xl md:text-6xl font-bold">
            <h1>
              Catch the Waves of Your Life in Bali - Learn with{" "}
              <span className="text-primary px-2">King Surf!</span>
            </h1>
          </div>

          <p className="max-w-screen-sm mx-auto text-xl text-black bg-secondary/40 p-4 rounded-lg">
            Whether you&apos;re a beginner or seasoned surfer, at King Surf
            Bali, we turn every wave into an unforgettable adventure. Surf
            lessons, premium board rentals, and Bali&apos;s best beach vibes -
            it&apos;s all here!
          </p>

          <div className="space-y-4 md:space-y-0 md:space-x-4">
            <Button className="w-5/6 md:w-1/4 font-bold group/arrow text-black">
              Book Your Lesson!
              <ArrowRight className="size-5 ml-2 group-hover/arrow:translate-x-1 transition-transform" />
            </Button>

            <Button
              asChild
              variant="secondary"
              className="w-5/6 md:w-1/4 font-bold"
            >
              <Link
                href="https://github.com/nobruf/shadcn-landing-page.git"
                target="_blank"
                className="group/arrow text-black"
              >
                Rent Your Board!
                <ArrowRight className="size-5 ml-2 group-hover/arrow:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
