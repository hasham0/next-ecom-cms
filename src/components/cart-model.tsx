"use client";
import Image from "next/image";
import React from "react";

type Props = {};

const CartModel = (props: Props) => {
  const cartItems = true;
  return (
    <section className="absolute right-0 top-12 z-20 flex flex-col gap-4 bg-white p-5 shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
      {!cartItems ? (
        <>
          <div>Cart is empty</div>
        </>
      ) : (
        <>
          <h2 className="text-center text-lg underline underline-offset-2">
            Shopping Cart
          </h2>
          <div className="flex flex-col gap-8">
            {/* <!-- cart items --> */}
            <div className="flex w-max gap-4">
              {/* Item */}
              <Image
                src="https://plus.unsplash.com/premium_photo-1719611418530-353ffc0e92ff?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="dishes"
                width={72}
                priority
                className="rounded-md object-cover"
                height={96}
              />
              <div className="flex w-full flex-col justify-between">
                {/* TOP */}
                <div className="">
                  {/* Title */}
                  <div className="flex items-center justify-between gap-8">
                    <h3 className="font-semibold">Prouct Name</h3>
                    <h3 className="bg-gray-50 p-1">$49</h3>
                  </div>
                  {/* Description */}
                  <div className="">
                    <p>avaliable</p>
                  </div>
                </div>
                {/* BOTTOM */}
                <div className="flex justify-between text-sm">
                  <span>Qty. 2</span>
                  <span className="text-blue-500">Remove</span>
                </div>
              </div>
            </div>
            {/* cart info */}
            <div className="">
              <div className="flex items-center justify-between font-semibold">
                <span className="">SubTotal</span>
                <span className="">37</span>
              </div>
              <p className="mb-4 mt-2 text-sm text-gray-500">
                Shipping and taxes calculated at checkout.
              </p>
              <div className="flex justify-between text-sm">
                <button className="rounded-md px-4 py-3 ring-1 ring-gray-400">
                  View Cart
                </button>
                <button className="rounded-md bg-black px-4 py-3 text-white">
                  Checkout
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </section>
  );
};

export default CartModel;
