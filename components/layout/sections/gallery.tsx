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
                stroke="#EBBC6C"
                stroke-width="3"
                stroke-linecap="round"
              ></path>
            </svg>
            <h2 className="font-extrabold text-[24px] poppins max-w-[17rem]">
              Sweet{" "}
              <span className="text-[#EBBC6C] font-extrabold text-[24px] poppins">
                Gallery{" "}
              </span>
            </h2>
          </div>
        </div>
      </section>
      <div className="grid grid-cols-4 gap-2 px-20 mx-auto">
        <Image
          className="w-full h-full object-cover"
          src="https://selatarsurflessonbali.com/storage/app/media/IMG_5923.jpg"
          alt="https://selatarsurflessonbali.com/storage/app/media/IMG_5923.jpg"
          width={500}
          height={500}
        />
        <div className="col-span-2">
          <div className="grid grid-cols-2 gap-2">
            <Image
              className="w-full h-full object-cover"
              src="https://selatarsurflessonbali.com/storage/app/media/IMG_6039.jpg"
              alt="https://selatarsurflessonbali.com/storage/app/media/IMG_6039.jpg"
              width={500}
              height={500}
            />
            <Image
              className="w-full h-full object-cover"
              src="https://selatarsurflessonbali.com/storage/app/media/IMG_6085.jpg"
              alt="https://selatarsurflessonbali.com/storage/app/media/IMG_6085.jpg"
              width={500}
              height={500}
            />
            <Image
              className="w-full h-full object-cover"
              src="https://selatarsurflessonbali.com/storage/app/media/IMG_6091.jpg"
              alt="https://selatarsurflessonbali.com/storage/app/media/IMG_6091.jpg"
              width={500}
              height={500}
            />
            <Image
              className="w-full h-full object-cover"
              src="https://selatarsurflessonbali.com/storage/app/media/IMG_5944.jpg"
              alt="https://selatarsurflessonbali.com/storage/app/media/IMG_5944.jpg"
              width={500}
              height={500}
            />
          </div>
        </div>
        <Image
          className="w-full h-full object-cover"
          src="https://selatarsurflessonbali.com/storage/app/media/IMG_6065.jpg"
          alt="https://selatarsurflessonbali.com/storage/app/media/IMG_6065.jpg"
          width={500}
          height={500}
        />
      </div>
    </div>
  );
}
