import { Filter } from "@/components";
import Image from "next/image";
import React from "react";

type Props = {};

export default function page({}: Props) {
  return (
    <div className="relative px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64">
      {/* CAMPAIGN */}
      <div className="hidden h-64 justify-between bg-pink-50 px-4 sm:flex">
        <div className="flex w-2/3 flex-col items-center justify-center gap-8">
          <h1 className="text-4xl font-semibold leading-[48px] text-gray-700">
            Grab up to 50% off on
            <br /> Selected Products
          </h1>
          <button className="w-max rounded-3xl bg-primary px-5 py-3 text-sm text-white">
            Buy Now
          </button>
        </div>
        <div className="relative w-1/3">
          <Image
            src="/images/woman.png"
            alt=""
            fill
            className="object-contain"
          />
        </div>
      </div>
      {/* FILTER */}
      <Filter />
    </div>
  );
}
