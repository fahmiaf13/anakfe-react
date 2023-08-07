"use client";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [changeColor, setChangeColor] = useState(true);

  const handleScroll = () => {
    if (window.scrollY > 100) {
      setChangeColor(false);
    } else {
      setChangeColor(true);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navList = [
    {
      title: "home",
      path: "/",
    },
    {
      title: "about",
      path: "/about",
    },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full ${changeColor ? "bg-transparent" : "bg-slate-50"} duration-300`}>
      <div className="container flex justify-center mx-auto py-5">
        <ul className="flex w-8/12 justify-between items-center">
          <li className="font-extrabold text-2xl">
            <Link href="/">
              <Image src="/logo.svg" alt="logo" width={80} height={80} className="hover:opacity-30 duration-300" />
            </Link>
          </li>
          <li className="flex gap-5 items-center">
            {navList.map((item, index) => (
              <Link className="hover:text-primary/30 duration-300" key={index} href={item.path}>
                {item.title}
              </Link>
            ))}
          </li>
        </ul>
      </div>
    </nav>
  );
}
