"use client";
import images from "@/utils/imagesData";
import Image from "next/image";
import React, { useState } from "react";

type Props = {};

const ProductImages = (props: Props) => {
  const [index, setIndex] = useState<number>(0);

  return (
    <section>
      <div className="relative h-[500px]">
        <Image
          src={images[index].url}
          alt="coffee"
          priority
          fill
          sizes="50vw"
          className="rounded-md object-cover"
        />
      </div>
      <div className="mt-8 flex justify-between gap-4">
        {images.map((item: any, i: number) => (
          <div
            className="relative mt-8 h-32 w-1/4 cursor-pointer gap-4"
            key={item.id}
            onClick={() => setIndex(i)}
          >
            <Image
              src={item?.url}
              alt=""
              fill
              sizes="30vw"
              className="rounded-md object-cover"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductImages;
