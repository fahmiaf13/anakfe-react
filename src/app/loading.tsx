"use client";

import Lottie from "lottie-react";
import maintenance from "@/assets/img/maintenance.json";

export default function loading() {
  const options = {
    animationData: maintenance,
    loop: true,
    style: {
      // width: "400px",
    },
  };
  return (
    <main className="container mx-auto w-full flex justify-center items-center h-screen">
      <div className="sm-w-3/12 md:w-6/12 flex flex-col">
        <Lottie {...options} />
        <div className="text-xl sm:text-2xl md:text-4xl text-center font-bold">Website currently under construction</div>
      </div>
    </main>
  );
}
