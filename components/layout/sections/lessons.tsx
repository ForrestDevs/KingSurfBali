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
import { cn } from "@/lib/utils";
import Link from "next/link";

const lessons = [
  {
    title: "GROUP INTERMEDIATE LESSON",
    image:
      "/pic4.webp",
    description:
      "Class included, equipment surfing, experience instructor, locker, 2 hours surfing. Discount available for multiple lessons.",
    price: "IDR 400.000/Person",
  },
  {
    title: "PRIVATE BEGINNER CLASS",
    image:
      "/pic2.jpg",
    description:
      "Enjoy a private surfing experience at an affordable price! Private surfing only 300K per session. Include mineral water, locker, and sun block",
    price: "IDR 300.000/Person",
  },
  {
    title: "SEMI PRIVATE",
    image:
      "/pic3.jpg",
    description:
      "Equipment surf, experienced private 1 instructor for 2 students, 2 hours surf lessons, free mineral water, zinc, locker, suncream locker and feedback after surf. Discount available ...",
    price: "IDR 250.000/Person",
  },
  {
    title: "KIDS SURFING LESSONS",
    image:
      "/pic5.webp",
    description:
      "Equipment surfing, experienced instructor, locker, 2 hours surfing lessons. Discount available for multiple lessons.",
    price: "IDR 350.000/Person",
  },
];

export default function LessonsSection() {
  return (
    <section className="py-24 sm:py-32 mx-auto container">
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8 mb-12">
        <div className="lg:max-w-md">
          <div className="flex items-center mb-4">
            <div className="w-16 h-0.5 bg-primary mr-4"></div>
            <h2 className="text-2xl font-bold">
              OUR <span className="text-primary">LESSONS</span>
            </h2>
          </div>
          <p className="text-md text-black">
            At King Surf Bali, we believe surfing is for everyone. Our expert
            instructors offer personalized lessons that cater to all levels.
            Whether it&apos;s your first time paddling out or youre refining
            your technique, we&apos;ve got you covered. Ready to master the art
            of surfing? Join the King Surf Tribe and ride with the best!
          </p>
        </div>
        <div className="lg:max-w-md">
          <ul className="list-none space-y-2">
            <li className="flex flex-row items-start">
              <ArrowRight className="text-primary mr-2 flex-shrink-0 mt-1" size={24} />
              <span className="flex-grow">
                Beginner Lessons: Learn the basics, from paddling to catching
                your first wave.
              </span>
            </li>
            <li className="flex flex-row items-start">
              <ArrowRight className="text-primary mr-2 flex-shrink-0 mt-1" size={24} />
              <span className="flex-grow">
                Intermediate Sessions: Hone your skills, improve your balance,
                and ride bigger waves with confidence.
              </span>
            </li>
            <li className="flex flex-row items-start">
              <ArrowRight className="text-primary mr-2 flex-shrink-0 mt-1" size={24} />
              <span className="flex-grow">
                Advanced Coaching: Fine-tune your maneuvers and take on
                Bali&apos;s legendary surf spots.
              </span>
            </li>
          </ul>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {lessons.map((lesson, index) => (
          <Card key={index} className="flex flex-col">
            <CardHeader className="p-0">
              <Image
                className="w-full h-48 object-cover rounded-t-lg"
                src={lesson.image}
                alt={lesson.title}
                width={400}
                height={200}
              />
            </CardHeader>
            <CardContent className="flex-grow p-4">
              <CardTitle className="text-lg font-bold text-center mb-2">
                {lesson.title}
              </CardTitle>
              <p className="text-sm text-center text-muted-foreground">
                {lesson.description}
              </p>
            </CardContent>
            <CardFooter className="p-4 flex justify-center items-center">
              {/* <p className="text-sm font-semibold">{lesson.price}</p> */}
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
        ))}
      </div>
    </section>
  );
}
