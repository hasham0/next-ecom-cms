"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { FormEvent } from "react";

type Props = {};

const SearchBar = (props: Props) => {
  const router = useRouter();

  const handleSearchQuery = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const serachItem = formData.get("serach") as string;

    if (serachItem) {
      router.push(`/list?name=${serachItem}`);
    }
  };
  return (
    <form
      onSubmit={handleSearchQuery}
      className="flex flex-1 items-center justify-between rounded-md bg-gray-100 p-2"
    >
      <input
        type="text"
        placeholder="Search"
        name="serach"
        className="flex-1 bg-transparent outline-none"
      />
      <button type="submit" className="cursor-pointer">
        <Image
          src={"/images/search.png"}
          alt="search logo"
          width={16}
          height={16}
        />
      </button>
    </form>
  );
};

export default SearchBar;
