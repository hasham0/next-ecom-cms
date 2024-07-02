import Link from "next/link";
import React from "react";
import Menu from "./menu";
import Image from "next/image";
import SearchBar from "./serach-bar";
import NavIcons from "./nav-icons";

type Props = {};

const Navbar = (props: Props) => {
  return (
    <>
      <div className="relative h-20 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64">
        {/* MOBILE */}
        <div className="flex h-full items-center justify-between md:hidden">
          <Link href={"/"}>
            <div className="text-2xl tracking-wide">LAMA</div>
          </Link>
          <Menu />
        </div>

        {/* BIGGER SCREEN */}
        <div className="hidden h-full items-center justify-between gap-8 md:flex">
          {/* LEFT */}
          <div className="flex w-1/3 items-center justify-center gap-12 xl:w-1/2">
            <Link href={"/"} className="flex items-center gap-3">
              <Image
                src={"/images/logo.png"}
                alt="logo"
                width={24}
                height={24}
              />
              <div className="text-2xl tracking-wide">LAMA</div>
            </Link>
            <div className="ga-4 hidden gap-4 xl:flex">
              <Link href={"/"}>Homepage</Link>
              <Link href={"/"}>Shop</Link>
              <Link href={"/"}>Deals</Link>
              <Link href={"/"}>About</Link>
              <Link href={"/"}>Contact</Link>
              <Link href={"/"}>Cart(1)</Link>
            </div>
          </div>
          {/* RIGHT */}
          <div className="flex w-2/3 items-center justify-between gap-8">
            <SearchBar />
            <NavIcons />
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
