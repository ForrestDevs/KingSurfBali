import React from "react";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

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
              src="https://selatarsurflessonbali.com/storage/app/uploads/public/64f/dcc/313/64fdcc3136852137121536.jpg"
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
            <Button
              variant="outline"
              className="mr-2 font-bold group/arrow text-black"
            >
              Book Now
              <ArrowRight className="size-5 ml-2 group-hover/arrow:translate-x-1 transition-transform" />
            </Button>
          </CardFooter>
        </Card>

        <Card className="w-full">
          <CardHeader>
            <Image
              className="w-full h-48 object-cover"
              src="https://selatarsurflessonbali.com/storage/app/uploads/public/64f/dcc/3ea/64fdcc3ead36a106946582.jpg"
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
            <Button
              variant="outline"
              className="mr-2 font-bold group/arrow text-black"
            >
              Book Now
              <ArrowRight className="size-5 ml-2 group-hover/arrow:translate-x-1 transition-transform" />
            </Button>
          </CardFooter>
        </Card>
      </div>
    </section>
  );
}
