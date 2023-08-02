"use client";

import Image from "next/image";
import Lottie from "lottie-react";
import maintenance from "@/assets/img/maintenance.json";

async function getData() {
  const res = await fetch("https://medium2.p.rapidapi.com/");
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default function Home() {
  const options = {
    animationData: maintenance,
    loop: true,
    style: {
      width: "600px",
    },
  };
  return (
    <main className="container mx-auto flex justify-center items-center h-screen">
      <div className="w-[800px] flex flex-col">
        <Lottie {...options} />
        <div className="text-center text-2xl font-bold">Website currently under construction</div>
      </div>
    </main>
  );
}
