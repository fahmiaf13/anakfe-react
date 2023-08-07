import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Outfit } from "next/font/google";
import { Navbar, Footer } from "@/components";

const outfit = Outfit({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Anak Frontend",
  description: "Anak Frontend official website",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${outfit.className} bg-slate-300`}>
        <Navbar />
        <main className="mt-[10rem] container mx-auto w-full flex justify-center items-center">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
