import React from "react";
import Image from "next/image";

export default function GallerySection() {
  return (
    <div className="container mx-auto py-24 sm:py-32">
      <section>
        <div className=" mx-auto mb-10 mt-10">
          <div className="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="mr-4"
              width="63"
              height="3"
              viewBox="0 0 63 3"
              fill="none"
            >
              <path
                d="M2 1.5H61"
                className="stroke-primary"
                strokeWidth="3"
                strokeLinecap="round"
              ></path>
            </svg>
            <h2 className="font-extrabold text-xl">
              King Surf Vibes{" "}
              <span className="text-primary font-extrabold text-xl">
                Gallery{" "}
              </span>
            </h2>
          </div>
        </div>
      </section>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 px-4 sm:px-8 lg:px-20 mx-auto">
        <Image
          className="w-full h-64 sm:h-full object-cover"
          src="/pic1.jpg"
          alt="surf_gallery"
          width={500}
          height={500}
        />
        <div className="sm:col-span-2">
          <div className="grid grid-cols-2 gap-2">
            <Image
              className="w-full h-40 sm:h-full object-cover"
              src="/pic5.webp"
              alt="surf_gallery"
              width={500}
              height={500}
            />
            <Image
              className="w-full h-40 sm:h-full object-cover"
              src="/pic4.webp"
              alt="surf_gallery"
              width={500}
              height={500}
            />
            <Image
              className="w-full h-40 sm:h-full object-cover"
              src="/pic6.webp"
              alt="surf_gallery"
              width={500}
              height={500}
            />
            <Image
              className="w-full h-40 sm:h-full object-cover"
              src="/pic5.webp"
              alt="surf_gallery"
              width={500}
              height={500}
            />
          </div>
        </div>
        <Image
          className="w-full h-64 sm:h-full object-cover"
          src="/pic7.webp"
          alt="https://selatarsurflessonbali.com/storage/app/media/IMG_6065.jpg"
          width={500}
          height={500}
        />
      </div>
    </div>
  );
}
