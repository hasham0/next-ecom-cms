"use client";
import slides from "@/utils/slidesData";
import { SlidesTs } from "@/types";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";

type Props = {};

const Slider = (props: Props) => {
  const [current, setCurrent] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-[calc(100vh-80px)] overflow-hidden">
      {/* slides */}
      <div
        className="flex h-full w-max transition-transform duration-1000 ease-in-out"
        style={{ transform: `translateX(-${current * 100}vw)` }}
      >
        {slides.map((slide: SlidesTs, index: number) => (
          <div
            className={`${slide.bg} flex h-full w-screen flex-col gap-16 xl:flex-row`}
            key={index}
          >
            {/* text container */}
            <div className="flex h-1/2 flex-col items-center justify-center gap-8 text-center xl:h-full xl:w-1/2 2xl:gap-12">
              <h2 className="text-xl lg:text-3xl 2xl:text-5xl">
                {slide.description}
              </h2>
              <h1 className="text-5xl font-semibold lg:text-6xl 2xl:text-8xl">
                {slide.title}
              </h1>
              <Link href={slide.url}>
                <button className="rounded-md bg-black px-4 py-3 text-white">
                  SHOP NOW
                </button>
              </Link>
            </div>
            {/* image container */}
            <div className="relative h-1/2 xl:h-full xl:w-1/2">
              <Image
                src={slide.img}
                alt={slide.title}
                fill
                sizes="100%"
                className="object-cover"
              />
            </div>
          </div>
        ))}
      </div>
      <div className="absolute bottom-8 left-1/2 flex -translate-x-1/2 transform gap-4">
        {/* slide controls */}
        {slides.map((_, index: number) => (
          <div
            key={index}
            className={`flex h-3 w-3 cursor-pointer items-center justify-center rounded-full ring-1 ring-gray-700 ${current === index ? "scale-150" : ""}`}
            onClick={() => setCurrent(index)}
          >
            {current === index && (
              <div className="h-[6px] w-[6px] rounded-full bg-gray-600"></div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Slider;
