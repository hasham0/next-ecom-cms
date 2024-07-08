"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import CartModel from "./cart-model";

type Props = {};

const NavIcons = (props: Props) => {
  const [isProfileOpen, setIsProfileOpen] = useState<boolean>(false);
  const [isCartOpen, setIsCartOpen] = useState<boolean>(false);
  const router = useRouter();

  // !: temporaray
  const isLoggedIn = false;
  const hanldeProfile = () => {
    if (!isLoggedIn) {
      router.push("/login");
    }
    setIsProfileOpen((pre) => !pre);
  };

  return (
    <div className="relative flex items-center gap-4 px-2 xl:gap-6">
      <Image
        src={"/images/profile.png"}
        alt="profile"
        width={22}
        height={22}
        className="cursor-pointer"
        onClick={hanldeProfile}
      />
      {isProfileOpen && (
        <div className="absolute left-3 top-12 z-20 rounded-md p-4 text-sm shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
          <Link href={"/"}>Profile</Link>
          <div className="mt-2 cursor-pointer">Logout</div>
        </div>
      )}
      <Image
        src={"/images/notification.png"}
        alt="profile"
        width={22}
        height={22}
        className="cursor-pointer"
      />
      <div className="relative cursor-pointer">
        <Image
          src={"/images/cart.png"}
          alt="profile"
          width={22}
          height={22}
          className="cursor-pointer"
          onClick={() => setIsCartOpen((pre) => !pre)}
        />
        <div className="absolute -right-4 -top-4 flex h-6 w-6 items-center justify-center rounded-full bg-primary text-sm text-white">
          2
        </div>
        {isCartOpen && <CartModel />}
      </div>
    </div>
  );
};

export default NavIcons;
