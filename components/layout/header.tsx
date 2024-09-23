"use client";

import React from "react";
import Link from "next/link";
import { Menu } from "lucide-react";
import { useState, useEffect } from "react";
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";
import { Separator } from "../ui/separator";
import { Button } from "../ui/button";
import Logo from "./logo";
import { navRoutes } from "@/lib/config";
import WhatsApp from "./whatsapp";
import Instagram from "./instagram";
import { usePathname } from "next/navigation";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const [activeRoute, setActiveRoute] = useState(pathname);

  useEffect(() => {
    setActiveRoute(pathname);
  }, [pathname]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300  ${
        isScrolled ? "bg-white text-charcoal shadow-md" : "text-white"
      }`}
    >
      <nav className="container mx-auto px-8 py-4 flex items-center">
        <div id="nav-start" className="w-1/2 justify-start">
          <Link
            href="/"
            className="font-bold text-lg flex items-center justify-start"
          >
            <Logo />
            <h1 className="font-bold text-lg uppercase">King Surf Bali</h1>
          </Link>
        </div>

        <div id="nav-center" className="flex-shrink-0">
          {/* <!-- Desktop --> */}
          <ul className="hidden lg:flex justify-center items-center gap-6">
            {navRoutes.map(({ href, title }) => (
              <li key={href}>
                <Link
                  href={href}
                  className={`text-base font-bold uppercase ${
                    activeRoute === href ? "text-primary" : ""
                  }`}
                >
                  {title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div id="nav-end" className="flex justify-end w-1/2">
          <div className="flex lg:hidden ">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Menu
                  onClick={() => setIsOpen(!isOpen)}
                  className="cursor-pointer lg:hidden"
                />
              </SheetTrigger>

              <SheetContent
                side="left"
                className="flex flex-col justify-between rounded-tr-2xl rounded-br-2xl bg-card border-secondary"
              >
                <div>
                  <SheetHeader className="mb-4 ml-4">
                    <SheetTitle className="flex items-center">
                      <Link href="/" className="flex items-center ">
                        <Logo />
                        <h1 className="font-bold text-lg uppercase">
                          King Surf Bali
                        </h1>
                      </Link>
                    </SheetTitle>
                  </SheetHeader>

                  <div className="flex flex-col gap-2">
                    {navRoutes.map(({ href, title }) => (
                      <Button
                        key={href}
                        onClick={() => setIsOpen(false)}
                        asChild
                        variant="ghost"
                        className="justify-start text-base"
                      >
                        <Link href={href}>{title}</Link>
                      </Button>
                    ))}
                  </div>
                </div>

                <SheetFooter className="flex-col sm:flex-col justify-start items-start">
                  <Separator className="mb-2" />

                  <div className="flex gap-2">
                    <WhatsApp />
                    <Instagram />
                  </div>
                </SheetFooter>
              </SheetContent>
            </Sheet>
          </div>
          <div className="hidden lg:flex gap-4">
            <WhatsApp />
            <Instagram />
          </div>
        </div>
      </nav>
    </header>
  );
}
