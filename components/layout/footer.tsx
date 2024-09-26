import React from "react";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import Map from "@/components/layout/map";
import Logo from "@/components/layout/logo";
import { heroCopy, navRoutes } from "@/lib/config";

export default function Footer() {
  return (
    <footer className="container py-24 sm:py-32">
      <div className="p-10 bg-white border border-secondary rounded-2xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
          <div className="col-span-1 lg:col-span-3 space-y-4">
            <Link
              href="/"
              className="font-bold text-lg flex items-center justify-start -ml-2"
            >
              <Logo />
              <h1 className="font-bold text-lg uppercase">King Surf Bali</h1>
            </Link>
            <p className="text-justify text-[12px] font-medium">
              {heroCopy.message}
            </p>
          </div>

          <div className="col-span-1 lg:col-span-6 px-0 lg:px-5 mt-5">
            <div className="grid grid-cols-2 gap-16 mx-auto">
              <div>
                <h1 className="text-sm font-medium">REACH US</h1>
                <ul className="max-w-lg mt-3 space-y-3 text-sm text-left list-none list-inside">
                  <li>
                    <Link href="https://www.google.com/maps/place/75W7+RPW+Legian,+Kabupaten+Badung,+Bali,+Indonesia">
                      <p>
                        In front of Sari beach hotel, Jl. Pantai Legian, Legian,
                        Kec. Kuta, Kabupaten Badung, Bali 80361
                      </p>
                    </Link>
                  </li>
                  <li className="text-sm">
                    <Link href="tel:+6282292947707">
                      <p>+6282292947707</p>
                    </Link>
                  </li>
                  <li className="text-sm">
                    <Link href="mailto:kingsurfbeach@gmail.com">
                      <p>kingsurfbeach@gmail.com</p>
                    </Link>
                  </li>
                </ul>
              </div>

              <div>
                <h1 className="text-sm font-medium">NAVIGATION</h1>
                <ul className="max-w-lg mt-3 space-y-3 text-sm text-left list-none list-inside">
                  {navRoutes.map((route) => (
                    <li key={route.href}>
                      <Link href={route.href}>
                        <span className="hover:underline">{route.title}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className="col-span-1 lg:col-span-3 mt-5">
            <Map />
          </div>
        </div>
        <Separator className="my-6" />
        <div className="lg:flex lg:justify-between text-xs">
          <h3 className="">&copy; 2024 King Surf Bali</h3>
        </div>
      </div>
    </footer>
  );
}
