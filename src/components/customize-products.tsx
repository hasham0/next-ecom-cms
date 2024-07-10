"use client";
import { products } from "@wix/stores";
import React, { useState } from "react";

type Props = {
  productId: string;
  variants: products.Variant[];
  productOptions: products.ProductOption[];
};

const CustomizeProducts = ({ productId, productOptions, variants }: Props) => {
  const [selectedOptions, setSelectedoptions] = useState<{
    [key: string]: string;
  }>({});

  const handleOption = (optionType: string, choice: string) => {
    setSelectedoptions((pre) => ({ ...pre, [optionType]: choice }));
  };

  const isVariantInStock = (choice: { [key: string]: string }) => {
    return variants.some((variant) => {
      const variantChoice = variant.choices;
      if (!variantChoice) return false;
      return (
        Object.entries(choice).every(([key, value]) => {
          variantChoice[key] === value;
        }) &&
        variant.stock?.inStock &&
        variant.stock?.quantity &&
        variant.stock?.quantity > 0
      );
    });
  };
  return (
    <div className="flex flex-col gap-6">
      {productOptions.map((option) => (
        <div className="flex flex-col gap-4" key={option.name}>
          <h4 className="font-medium">Choose a {option.name}</h4>
          <ul className="flex items-center gap-3">
            {option.choices?.map((choice) => {
              const disabled = !isVariantInStock({
                ...selectedOptions,
                [option.name!]: choice.description!,
              });

              const selected =
                selectedOptions[option.name!] === choice.description;

              const clickHandler = disabled
                ? undefined
                : () => handleOption(option.name!, choice.description!);

              return option.name === "Color" ? (
                <li
                  className="relative h-8 w-8 rounded-full ring-1 ring-gray-300"
                  style={{
                    backgroundColor: choice.value,
                    cursor: disabled ? "not-allowed" : "pointer",
                  }}
                  onClick={clickHandler}
                  key={choice.description}
                >
                  {selected && (
                    <div className="absolute left-1/2 top-1/2 h-10 w-10 -translate-x-1/2 -translate-y-1/2 transform rounded-full ring-2" />
                  )}
                  {disabled && (
                    <div className="absolute left-1/2 top-1/2 h-[2px] w-10 -translate-x-1/2 -translate-y-1/2 rotate-45 transform bg-red-400" />
                  )}
                </li>
              ) : (
                <li
                  className="ring-lama text-lama rounded-md px-4 py-1 text-sm ring-1"
                  style={{
                    cursor: disabled ? "not-allowed" : "pointer",
                    backgroundColor: selected
                      ? "#f35c7a"
                      : disabled
                        ? "#FBCFE8"
                        : "white",
                    color: selected || disabled ? "white" : "#f35c7a",
                    boxShadow: disabled ? "none" : "",
                  }}
                  key={choice.description}
                  onClick={clickHandler}
                >
                  {choice.description}
                </li>
              );
            })}
          </ul>
        </div>
      ))}
      {/* colors */}
      {/* <h4 className="font-medium">Chose a color</h4>
      <ul className="item-center flex gap-3">
        <li className="relative h-8 w-8 cursor-pointer rounded-full bg-red-500 ring-1 ring-gray-300">
          <div className="absolute left-1/2 top-1/2 h-10 w-10 -translate-x-1/2 -translate-y-1/2 transform rounded-full ring-2"></div>
        </li>
        <li className="relative h-8 w-8 cursor-pointer rounded-full bg-blue-500 ring-1 ring-gray-300"></li>

        <li className="relative h-8 w-8 cursor-pointer rounded-full bg-green-500 ring-1 ring-gray-300">
          <div className="absolute left-1/2 top-1/2 h-[2px] w-10 -translate-x-1/2 -translate-y-1/2 rotate-45 transform cursor-not-allowed bg-red-400" />
        </li>
      </ul> */}
      {/* sizes */}
      {/* <h4 className="font-medium">Chose a size</h4>
      <ul className="item-center flex gap-3">
        <li className="cursor-pointer rounded-md px-4 py-1 text-sm text-primary ring-1 ring-primary">
          Small
        </li>
        <li className="cursor-pointer rounded-md bg-primary px-4 py-1 text-sm text-white ring-1 ring-primary">
          Medium
        </li>{" "}
        <li className="cursor-not-allowed rounded-md bg-pink-200 px-4 py-1 text-sm text-white ring-1 ring-primary">
          Large
        </li>
      </ul> */}
    </div>
  );
};

export default CustomizeProducts;
