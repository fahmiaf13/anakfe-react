import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Outfit } from "next/font/google";
import { Navbar } from "@/components";

const inter = Inter({ subsets: ["latin"] });
const outfit = Outfit({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Anak Frontend",
  description: "Anak Frontend official website",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={outfit.className}>
        {/* <Navbar /> */}
        {children}
      </body>
    </html>
  );
}
