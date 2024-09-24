import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
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
            <h1 className="mb-2 mt-10 sm:mt-20 text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold uppercase tracking-tight leading-tight text-white">
              Ride the Perfect Wave: Bali&apos;s Ultimate Surf Experience with{" "}
              <span className="text-primary px-2 inline-block">King Surf!</span>
            </h1>
          </div>

          <p className="max-w-screen-sm mx-auto text-base sm:text-lg md:text-xl lg:text-2xl text-white bg-black/70 p-3 sm:p-4 rounded-lg shadow-lg">
            Surf lessons, premium board rentals, and Bali&apos;s best beach
            vibes - it&apos;s all here at King Surf Bali!
          </p>

          <div className="space-y-4 md:space-y-0 md:space-x-4">
            <Link
              href="https://wa.me/6282292947707"
              className={cn(
                buttonVariants({ size: "lg", variant: "default" }),
                "text-black group/arrow w-full sm:w-auto"
              )}
            >
              Book Your Lesson!
              <ArrowRight className="size-5 ml-2 group-hover/arrow:translate-x-1 transition-transform" />
            </Link>

            <Link
              className={cn(
                buttonVariants({ size: "lg", variant: "secondary" }),
                "text-black group/arrow w-full sm:w-auto"
              )}
              href="https://wa.me/6282292947707"
            >
              Rent Your Board!
              <ArrowRight className="size-5 ml-2 group-hover/arrow:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
