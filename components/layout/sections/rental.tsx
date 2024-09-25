import React from "react";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button, buttonVariants } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export default function RentalSection() {
  return (
    <section className="container flex flex-col space-y-10 my-20">
      <div className="flex items-center justify-center">
        <svg
          className="w-16 h-2 mr-4"
          viewBox="0 0 63 4"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M2 2H61"
            stroke="#EBBC6C"
            strokeWidth="3"
            strokeLinecap="round"
          ></path>
        </svg>
        <p className="text-xl font-bold">
          <span className="text-primary">BOARD</span> RENTAL
        </p>
        <svg
          className="w-16 h-2 ml-4"
          viewBox="0 0 63 4"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M2 2H61"
            stroke="black"
            strokeWidth="3"
            strokeLinecap="round"
          ></path>
        </svg>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 px-4 md:px-8 lg:px-20">
        <Card className="w-full">
          <CardHeader>
            <Image
              className="w-full h-48 object-cover"
              src="/board1.webp"
              alt="1 Hour Board Rental"
              width={400}
              height={200}
            />
          </CardHeader>
          <CardContent>
            <CardTitle className="text-lg font-extrabold text-center mb-2">
              1 HOUR BOARD RENTAL
            </CardTitle>
            <p className="text-sm text-center text-gray-700">
              One hour board rental. Discount available for multiple and daily
              rentals.
            </p>
          </CardContent>
          <CardFooter className="flex justify-center">
            <Link
              href="https://wa.me/6282292947707"
              className={cn(
                buttonVariants({ size: "lg", variant: "outline" }),
                "text-black group/arrow w-full sm:w-auto"
              )}
            >
              Book Now
              <ArrowRight className="size-5 ml-2 group-hover/arrow:translate-x-1 transition-transform" />
            </Link>
          </CardFooter>
        </Card>

        <Card className="w-full">
          <CardHeader>
            <Image
              className="w-full h-48 object-cover"
              src="/pic7.webp"
              alt="Rental Board"
              width={400}
              height={200}
            />
          </CardHeader>
          <CardContent>
            <CardTitle className="text-lg font-extrabold text-center mb-2">
              Rental Board
            </CardTitle>
            <p className="text-sm text-center text-gray-700">
              All Day board rental. Discount available for multiple and daily
              rentals. Include mineral water, locker, and sun block
            </p>
          </CardContent>
          <CardFooter className="flex justify-center">
            <Link
              href="https://wa.me/6282292947707"
              className={cn(
                buttonVariants({ size: "lg", variant: "outline" }),
                "text-black group/arrow w-full sm:w-auto"
              )}
            >
              Book Now
              <ArrowRight className="size-5 ml-2 group-hover/arrow:translate-x-1 transition-transform" />
            </Link>
          </CardFooter>
        </Card>
      </div>
    </section>
  );
}
