import Map from "@/components/layout/map";
import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";

export default function VisitSection() {
  return (
    <div>
      <section>
        <div className="container mt-20 mx-auto mb-10 px-0 lg:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div>
              <Map />
            </div>
            <div className="flex justify-center items-center">
              <div className="text-center lg:text-left space-y-4">
                <div className="text-center md:text-left space-y-2">
                  <h1 className="font-extrabold lg:text-[32px] max-w-[450px] mx-auto text-xl leading-none lg:leading-[2.4rem] mb-2">
                    Visit
                    <span className="font-extrabold lg:text-[32px] text-xl text-primary">
                      {" "}
                      Us
                    </span>
                  </h1>
                  <p className="mx-auto max-w-[450px] font-medium mb-2">
                    If there is further information you can visit our office at
                    the link below.
                  </p>
                </div>
                <Link
                  href="https://goo.gl/maps/nPCQ6xKux4vobtps9"
                  className={cn(buttonVariants(), "text-black")}
                >
                  Open Map
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
