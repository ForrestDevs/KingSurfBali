import React from "react";
import Link from "next/link";
import { RiWhatsappFill } from "react-icons/ri";

export default function WhatsApp() {
  return (
    <Link href="https://wa.me/6282292947707">
      <RiWhatsappFill size={35} />
    </Link>
  );
}
