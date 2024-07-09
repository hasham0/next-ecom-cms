"use client";
import React, { useState } from "react";

type Props = {};

const Add = (props: Props) => {
  const [quantity, setQuantity] = useState<number>(1);

  // temporray
  const stock = 4;

  // hanlde cart quantity
  const hanadleQuantity = (type: "dec" | "inc") => {
    if (type === "dec" && quantity > 1) {
      setQuantity((pre) => pre - 1);
    }
    if (type === "inc" && quantity < stock) {
      setQuantity((pre) => pre + 1);
    }
  };
  return (
    <div className="flex flex-col gap-4">
      <p className="font-medium">Choose a Quantity</p>
      <div className="flex flex-wrap justify-between">
        <div className="flex items-center gap-4">
          <div className="flex w-32 items-center justify-between rounded-3xl bg-gray-100 px-4 py-2">
            <button
              className="cursor-pointer text-xl"
              onClick={() => hanadleQuantity("dec")}
            >
              -
            </button>
            <span>{quantity}</span>
            <button
              className="cursor-pointer text-xl"
              onClick={() => hanadleQuantity("inc")}
            >
              +
            </button>
          </div>
          <div className="text-xs">
            Only <span className="text-orange-500">{stock}</span> items left!{" "}
            {"Don't"} miss it
          </div>
        </div>
        <button className="disabled:ring-none w-36 rounded-3xl px-4 py-2 text-sm text-primary ring-1 ring-primary hover:bg-primary hover:text-white disabled:cursor-not-allowed disabled:bg-pink-200 disabled:text-white disabled:ring-0">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default Add;
