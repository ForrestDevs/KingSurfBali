import React from "react";
import Image from "next/image";

export default function LessonsSection() {
  return (
    <div>
      <section className="mt-20 px-8 container mx-auto">
        <div className="lg:flex lg:justify-between gap-[2rem]">
          <div className="lg:mr-4 mt-5">
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
                  stroke="#50CEDF"
                  stroke-width="3"
                  stroke-linecap="round"
                ></path>
              </svg>
              <h2 className="font-bold text-[24px] poppins">
                OUR <span className="text-[#50CEDF]">LESSON</span>
              </h2>
            </div>
            <p className="text-[14px] font-medium w-full lg:w-[250px] tracking-tight text-[#222] dark:text-white text-justify">
              Our experienced surf instructors are here to guide you in
              embracing the waves from the very beginning. When you choose to
              surf with us in Bali, you&apos;ll not only ensure your safety but
              also immerse yourself in a welcoming, enjoyable, and sociable
              environment.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2">
            <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow">
              <a href="#">
                <Image
                  className="rounded-t-lg w-full object-cover h-[16rem] md:h-[10rem]"
                  src="https://selatarsurflessonbali.com/storage/app/uploads/public/64f/dc6/106/64fdc6106e37b471200752.jpg"
                  alt=""
                  width={100}
                  height={100}
                />
              </a>
              <div className="px-5 pb-5">
                <div className="pt-3 h-[4rem]">
                  <a href="#">
                    <p className="mb-1 text-[15px] font-extrabold text-center mx-auto tracking-tight text-[#222] capitalize">
                      GROUP INTERMEDIATE LESSON
                    </p>
                  </a>
                </div>
                <hr />
                <div className="h-[7rem]">
                  <p className="mb-1 mt-1 text-center mx-auto text-[10px] font-medium text-gray-700">
                    className included, equipment surfing, experience
                    instructor, looker, 2 hours surfing. Discount available for
                    multiple lessons.
                  </p>
                </div>
                <div
                  className="inline-flex rounded-md shadow-sm mt-2 mx-auto"
                  role="group"
                >
                  <a
                    type="button"
                    className="inline-flex text-center items-center px-2 py-1  text-[9px] font-medium text-gray-900 bg-[#222222] rounded-l-lg"
                  >
                    Start From <br />
                    IDR 400.000/Person
                  </a>
                  <a
                    href="https://wa.me/6282177772644"
                    className="inline-flex items-center px-2 py-1  text-[9px] font-bold text-gray-900 bg-[#50CEDF] rounded-r-lg"
                  >
                    Book Now
                  </a>
                </div>
              </div>
            </div>

            <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow">
              <a href="#">
                <Image
                  className="rounded-t-lg w-full object-cover h-[16rem] md:h-[10rem]"
                  src="https://selatarsurflessonbali.com/storage/app/uploads/public/64f/dc6/2ed/64fdc62ed5ff2841388140.jpg"
                  alt=""
                  width={100}
                  height={100}
                />
              </a>
              <div className="px-5 pb-5">
                <div className="pt-3 h-[4rem]">
                  <a href="#">
                    <p className="mb-1 text-[15px] font-extrabold text-center mx-auto tracking-tight text-[#222] capitalize">
                      PRIVATE BEGINNER className
                    </p>
                  </a>
                </div>
                <hr />
                <div className="h-[7rem]">
                  <p className="mb-1 mt-1 text-center mx-auto text-[10px] font-medium text-gray-700">
                    Enjoy a private surfing experience at an affordable price!
                    Private surfing only 300K per session.Include mineral water,
                    locker,and sun block
                  </p>
                </div>
                <div
                  className="inline-flex rounded-md shadow-sm mt-2 mx-auto"
                  role="group"
                >
                  <a
                    type="button"
                    className="inline-flex text-center items-center px-2 py-1  text-[9px] font-medium text-gray-900 bg-[#222222] rounded-l-lg"
                  >
                    Start From <b />
                    IDR 300.000/Person
                  </a>
                  <a
                    href="https://wa.me/6282177772644"
                    className="inline-flex items-center px-2 py-1  text-[9px] font-bold text-gray-900 bg-[#50CEDF] rounded-r-lg"
                  >
                    Book Now
                  </a>
                </div>
              </div>
            </div>

            <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow">
              <a href="#">
                <Image
                  className="rounded-t-lg w-full object-cover h-[16rem] md:h-[10rem]"
                  src="https://selatarsurflessonbali.com/storage/app/uploads/public/64f/dca/902/64fdca9024912250346219.jpg"
                  alt=""
                  width={100}
                  height={100}
                />
              </a>
              <div className="px-5 pb-5">
                <div className="pt-3 h-[4rem]">
                  <a href="#">
                    <p className="mb-1 text-[15px] font-extrabold text-center mx-auto tracking-tight text-[#222] capitalize">
                      SEMI PRIVATE
                    </p>
                  </a>
                </div>
                <hr />
                <div className="h-[7rem]">
                  <p className="mb-1 mt-1 text-center mx-auto text-[10px] font-medium text-gray-700 ">
                    equipment surf, experienced private 1 instructor for 2
                    student, 2 hours surf lessons, free mineral water, zinc,
                    locker, suncream locker and feedback after surf. Discount
                    available ...
                  </p>
                </div>
                <div
                  className="inline-flex rounded-md shadow-sm mt-2 mx-auto"
                  role="group"
                >
                  <a
                    type="button"
                    className="inline-flex text-center items-center px-2 py-1  text-[9px] font-medium text-gray-900 bg-[#222222] rounded-l-lg"
                  >
                    Start From <br />
                    IDR 250.000/Person
                  </a>
                  <a
                    href="https://wa.me/6282177772644"
                    className="inline-flex items-center px-2 py-1  text-[9px] font-bold text-gray-900 bg-[#50CEDF] rounded-r-lg"
                  >
                    Book Now
                  </a>
                </div>
              </div>
            </div>

            <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow">
              <a href="#">
                <Image
                  className="rounded-t-lg w-full object-cover h-[16rem] md:h-[10rem]"
                  src="https://selatarsurflessonbali.com/storage/app/uploads/public/64f/dca/a94/64fdcaa945e13380682806.jpg"
                  alt=""
                  width={100}
                  height={100}
                />
              </a>
              <div className="px-5 pb-5">
                <div className="pt-3 h-[4rem]">
                  <a href="#">
                    <p className="mb-1 text-[15px] font-extrabold text-center mx-auto tracking-tight text-[#222] capitalize">
                      KIDS SURFING LESSONS
                    </p>
                  </a>
                </div>
                <hr />
                <div className="h-[7rem]">
                  <p className="mb-1 mt-1 text-center mx-auto text-[10px] font-medium text-gray-700">
                    equipment surfing, experienced instructor, looker, 2 hours
                    surfing lessons. Discount available for multiple lessons.
                  </p>
                </div>
                <div
                  className="inline-flex rounded-md shadow-sm mt-2 mx-auto"
                  role="group"
                >
                  <a
                    type="button"
                    className="inline-flex text-center items-center px-2 py-1 text-[9px] font-medium text-gray-900 bg-[#222222] rounded-l-lg"
                  >
                    Start From <br />
                    IDR 350.000/Person
                  </a>
                  <a
                    href="https://wa.me/6282177772644"
                    className="inline-flex items-center px-2 py-1 text-[9px] font-bold text-gray-900 bg-[#50CEDF] rounded-r-lg"
                  >
                    Book Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
