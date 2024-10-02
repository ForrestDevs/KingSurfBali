import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Footer from "@/components/layout/footer";
import Header from "@/components/layout/header";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "King Surf Bali - Home",
  description:
    "King Surf Bali offers the best surf lessons and surf rentals in Legian Beach Bali.",
  robots: "index, follow",
  keywords:
    "Kuta surf lessons, Kuta surf board rentals, surf, surf lessons, surf rentals, Bali, king surf bali, best surf rentals, best surf lessons bali, Kuta, Legian Beach",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-us" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-background text-black relative",
          inter.className
        )}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
