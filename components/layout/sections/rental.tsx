import React from "react";
import Image from "next/image";

export default function RentalSection() {
  return (
    <section className="mt-20">
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
            stroke-width="3"
            stroke-linecap="round"
          ></path>
        </svg>
        <p className="text-[24px] font-bold">
          <span className="text-[#EBBC6C]">BOARD</span> RENTAL
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
            stroke-width="3"
            stroke-linecap="round"
          ></path>
        </svg>
      </div>
      <div className="mt-32 mb-20">
        <div className="flex-col">
          <Image
            className="h-10 w-full"
            src="https://selatarsurflessonbali.com/themes/selatar/assets/image/bgline.png"
            alt=""
            width={100}
            height={100}
          />
          <div className="container mx-auto mt-[-7rem]">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 px-8 lg:px-20">
              <div className="mx-auto w-full">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 w-full bg-white border border-gray-200 rounded-none shadow">
                  <div>
                    <Image
                      className="w-full h-[16rem] object-cover"
                      src="https://selatarsurflessonbali.com/storage/app/uploads/public/64f/dcc/313/64fdcc3136852137121536.jpg"
                      alt="https://selatarsurflessonbali.com/themes/selatar/assets/image/Boardlesson.png"
                      width={100}
                      height={100}
                    />
                  </div>
                  <div className="p-6 flex flex-col items-center relative">
                    <p className="mb-2 text-[1rem] font-extrabold text-center mx-auto tracking-tight text-[#222] capitalize">
                      1 HOUR BOARD RENTAL
                    </p>
                    <hr />

                    <div className="h-[3.5rem]">
                      <p className="mb-2 mt-2 text-center mx-auto text-[10px] font-medium text-gray-700 ">
                        One hour board rental. Discount available for multiple
                        and daily rentals.
                      </p>
                    </div>
                    <div
                      className="inline-flex rounded-md shadow-sm my-5 mx-auto"
                      role="group"
                    >
                      <a
                        type="button"
                        className="inline-flex text-center items-center px-2 py-2 text-[12px] font-medium text-gray-900 bg-[#222222] rounded-l-lg"
                      >
                        IDR 50.000
                      </a>
                      <a
                        href="https://wa.me/6282177772644"
                        className="inline-flex  items-center px-2 py-2  text-[12px] font-bold text-gray-900 bg-[#50CEDF] rounded-r-lg"
                      >
                        Book Now
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mx-auto w-full">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 w-full bg-white border border-gray-200 rounded-none shadow">
                  <div>
                    <Image
                      className="w-full h-[16rem] object-cover"
                      src="https://selatarsurflessonbali.com/storage/app/uploads/public/64f/dcc/3ea/64fdcc3ead36a106946582.jpg"
                      alt="https://selatarsurflessonbali.com/themes/selatar/assets/image/Boardlesson.png"
                      width={100}
                      height={100}
                    />
                  </div>
                  <div className="p-6 flex flex-col items-center relative">
                    <p className="mb-2 text-[1rem] font-extrabold text-center mx-auto tracking-tight text-[#222] capitalize">
                      Rental Board
                    </p>
                    <hr />
                    <div className="h-[3.5rem]">
                      <p className="mb-2 mt-2 text-center mx-auto text-[10px] font-medium text-gray-700  ">
                        All Day board rental. Discount available for multiple
                        and daily rentals. Include mineral water, locker, and
                        sun block
                      </p>
                    </div>
                    <div
                      className="inline-flex rounded-md shadow-sm my-5 mx-auto"
                      role="group"
                    >
                      <a
                        type="button"
                        className="inline-flex text-center items-center px-2 py-2  text-[12px] font-medium text-gray-900 bg-[#222222] rounded-l-lg"
                      >
                        IDR 100.000
                      </a>
                      <a
                        href="https://wa.me/6282177772644"
                        className="inline-flex  items-center px-2 py-2  text-[12px] font-bold text-gray-900 bg-[#50CEDF] rounded-r-lg"
                      >
                        Book Now
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
