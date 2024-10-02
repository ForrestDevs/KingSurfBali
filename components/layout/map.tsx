import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Map() {
  return (
    <Link href="https://maps.app.goo.gl/XDK2Lj8kQgSvvXdF8">
      <Image
        src="/location.png"
        alt="King Surf Bali Location"
        width={600}
        height={200}
        className="h-[200px] w-full rounded-md object-cover"
      />
    </Link>
  );
}
