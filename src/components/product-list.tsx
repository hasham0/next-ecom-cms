import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {};

const ProductList = (props: Props) => {
  return (
    <div className="mt-12 flex flex-wrap justify-between gap-x-8 gap-y-16">
      <Link
        href={"/test"}
        className="flex w-full flex-col gap-4 sm:w-[45%] lg:w-[22%]"
      >
        <div className="relative h-80 w-full">
          <Image
            src="https://plus.unsplash.com/premium_photo-1719611418530-353ffc0e92ff?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="dishes"
            priority
            fill
            sizes="25vw"
            className="easy absolute z-10 rounded-md object-cover transition-opacity duration-500 hover:opacity-0"
          />
          <Image
            src="https://img.freepik.com/free-photo/latte-coffee-cup_74190-1194.jpg?w=360&t=st=1720453344~exp=1720453944~hmac=1dc801fd80582a1926d835f1dd75bee994d6b70d6229772ffbf3912ca415f683"
            alt="dishes"
            priority
            fill
            sizes="25vw"
            className="absolute rounded-md object-cover"
          />
        </div>
        <div className="flex justify-between">
          <span className="font-medium">Product Name</span>
          <span className="font-semibold">$49</span>
        </div>
        <div className="text-sm text-gray-500">My description</div>
        <button className="w-max rounded-2xl px-4 py-2 text-sm ring-1 ring-primary hover:bg-primary hover:text-white">
          Add to Cart
        </button>
      </Link>
      <Link
        href={"/test"}
        className="flex w-full flex-col gap-4 sm:w-[45%] lg:w-[22%]"
      >
        <div className="relative h-80 w-full">
          <Image
            src="https://plus.unsplash.com/premium_photo-1719611418530-353ffc0e92ff?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="dishes"
            priority
            fill
            sizes="25vw"
            className="easy absolute z-10 rounded-md object-cover transition-opacity duration-500 hover:opacity-0"
          />
          <Image
            src="https://img.freepik.com/free-photo/latte-coffee-cup_74190-1194.jpg?w=360&t=st=1720453344~exp=1720453944~hmac=1dc801fd80582a1926d835f1dd75bee994d6b70d6229772ffbf3912ca415f683"
            alt="dishes"
            priority
            fill
            sizes="25vw"
            className="absolute rounded-md object-cover"
          />
        </div>
        <div className="flex justify-between">
          <span className="font-medium">Product Name</span>
          <span className="font-semibold">$49</span>
        </div>
        <div className="text-sm text-gray-500">My description</div>
        <button className="w-max rounded-2xl px-4 py-2 text-sm ring-1 ring-primary hover:bg-primary hover:text-white">
          Add to Cart
        </button>
      </Link>
      <Link
        href={"/test"}
        className="flex w-full flex-col gap-4 sm:w-[45%] lg:w-[22%]"
      >
        <div className="relative h-80 w-full">
          <Image
            src="https://plus.unsplash.com/premium_photo-1719611418530-353ffc0e92ff?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="dishes"
            priority
            fill
            sizes="25vw"
            className="easy absolute z-10 rounded-md object-cover transition-opacity duration-500 hover:opacity-0"
          />
          <Image
            src="https://img.freepik.com/free-photo/latte-coffee-cup_74190-1194.jpg?w=360&t=st=1720453344~exp=1720453944~hmac=1dc801fd80582a1926d835f1dd75bee994d6b70d6229772ffbf3912ca415f683"
            alt="dishes"
            priority
            fill
            sizes="25vw"
            className="absolute rounded-md object-cover"
          />
        </div>
        <div className="flex justify-between">
          <span className="font-medium">Product Name</span>
          <span className="font-semibold">$49</span>
        </div>
        <div className="text-sm text-gray-500">My description</div>
        <button className="w-max rounded-2xl px-4 py-2 text-sm ring-1 ring-primary hover:bg-primary hover:text-white">
          Add to Cart
        </button>
      </Link>
      <Link
        href={"/test"}
        className="flex w-full flex-col gap-4 sm:w-[45%] lg:w-[22%]"
      >
        <div className="relative h-80 w-full">
          <Image
            src="https://plus.unsplash.com/premium_photo-1719611418530-353ffc0e92ff?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="dishes"
            priority
            fill
            sizes="25vw"
            className="easy absolute z-10 rounded-md object-cover transition-opacity duration-500 hover:opacity-0"
          />
          <Image
            src="https://img.freepik.com/free-photo/latte-coffee-cup_74190-1194.jpg?w=360&t=st=1720453344~exp=1720453944~hmac=1dc801fd80582a1926d835f1dd75bee994d6b70d6229772ffbf3912ca415f683"
            alt="dishes"
            priority
            fill
            sizes="25vw"
            className="absolute rounded-md object-cover"
          />
        </div>
        <div className="flex justify-between">
          <span className="font-medium">Product Name</span>
          <span className="font-semibold">$49</span>
        </div>
        <div className="text-sm text-gray-500">My description</div>
        <button className="w-max rounded-2xl px-4 py-2 text-sm ring-1 ring-primary hover:bg-primary hover:text-white">
          Add to Cart
        </button>
      </Link>
    </div>
  );
};

export default ProductList;
