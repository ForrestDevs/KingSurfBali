import React from "react";
import Link from "next/link";
import { RiInstagramLine } from "react-icons/ri";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";

export default function Instagram({
  color,
  asButton,
}: {
  color?: string;
  asButton?: boolean;
}) {
  return (
    <Link
      href="https://www.instagram.com/kingsurfbali?igsh=aDg5MGl6eHh4cDVt"
      className={cn(asButton && buttonVariants({ variant: "outline" }))}
    >
      <RiInstagramLine size={35} color={color && color} />
    </Link>
  );
}
