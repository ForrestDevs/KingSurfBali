import React from "react";
import Link from "next/link";
import { RiInstagramLine } from "react-icons/ri";

export default function Instagram({ color }: { color?: string }) {
  return (
    <Link href="https://www.instagram.com/kingsurfbali?igsh=aDg5MGl6eHh4cDVt">
      <RiInstagramLine size={35} color={color && color} />
    </Link>
  );
}
