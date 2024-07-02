"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

type Props = {};

const Menu = (props: Props) => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <div>
      <Image
        src="/images/menu.png"
        alt=""
        width={28}
        height={28}
        onClick={() => setOpen((pre) => !pre)}
        className="cursor-pointer"
      />
      {open && (
        <div className="absolute left-0 top-20 flex h-[calc(100vh-80px)] w-full flex-col items-center justify-center gap-8 bg-black text-xl text-white">
          <Link href={"/"}>Homepage</Link>
          <Link href={"/"}>Shop</Link>
          <Link href={"/"}>Deals</Link>
          <Link href={"/"}>About</Link>
          <Link href={"/"}>Contact</Link>
          <Link href={"/"}>Cart(1)</Link>
        </div>
      )}
    </div>
  );
};

export default Menu;
