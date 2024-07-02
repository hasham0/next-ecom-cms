"use client";
import Image from "next/image";
import React from "react";

type Props = {};

const CartModel = (props: Props) => {
  const cartItems = true;
  return (
    <div className="absolute right-0 top-12 flex flex-col gap-6 bg-white p-4 shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
      {!cartItems ? (
        <>
          <div>Cart is empty</div>
        </>
      ) : (
        <>
          <div className="">
            <Image
              src="https://plus.unsplash.com/premium_photo-1719611418530-353ffc0e92ff?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="dishes"
              width={300}
              height={300}
            />
          </div>
          <div className="">
            {/* TOP */}
            <div className="">
              {/* Title */}
              <div className="">
                <h3 className="">$49</h3>
              </div>
              {/* Des */}
              <div className="">
                <p>avaliable</p>
              </div>
            </div>

            {/* BOTTOM */}
          </div>
        </>
      )}
    </div>
  );
};

export default CartModel;
