"use client";
import { usePathname, useSearchParams, useRouter } from "next/navigation";
import React, { ChangeEvent } from "react";

type Props = {};

const Filter = (props: Props) => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const { replace } = useRouter();
  const handleFilterChange = (
    event: ChangeEvent<HTMLSelectElement | HTMLInputElement>,
  ) => {
    const { name, value } = event.target;
    const params = new URLSearchParams(searchParams);
    params.set(name, value);
    replace(`${pathname}?${params.toString()}`);
  };
  return (
    <section className="mt-12 flex justify-between">
      {/* Left */}
      <div className="flex flex-wrap gap-6">
        <select
          name="type"
          className="rounded-2xl bg-[#EBEDED] px-4 py-2 font-medium"
          id=""
          onChange={handleFilterChange}
        >
          <option>Type</option>
          <option value="physical">Physical</option>
          <option value="digital">Digital</option>
        </select>
        <input
          type="text"
          name="min"
          placeholder="min price"
          className="w-24 rounded-2xl pl-2 text-xs ring-1 ring-gray-400"
          onChange={handleFilterChange}
        />
        <input
          type="text"
          name="max"
          placeholder="max price"
          className="w-24 rounded-2xl pl-2 text-xs ring-1 ring-gray-400"
          onChange={handleFilterChange}
        />
        {/* Filter Category */}
        <select
          name="cat"
          className="rounded-2xl bg-[#EBEDED] px-4 py-2 font-medium"
          id=""
          onChange={handleFilterChange}
        >
          <option value="all-products">Category</option>
          <option value="Accessrories">Accessrories</option>
          <option value="Featured">Featured</option>
        </select>
        <select
          name=""
          id=""
          className="rounded-2xl bg-[#EBEDED] px-4 py-2 text-xs font-medium"
        >
          <option>All Filters</option>
        </select>
      </div>
      {/* Right */}
      <div className="">
        <select
          name="sort"
          id=""
          className="rounded-2xl bg-white px-4 py-2 text-xs font-medium ring-1 ring-gray-400"
          onChange={handleFilterChange}
        >
          <option>Sort By</option>
          <option value="asc price">Price (low to high)</option>
          <option value="desc price">Price (high to low)</option>
          <option value="asc lastUpdated">Newest</option>
          <option value="desc lastUpdated">Oldest</option>
        </select>
      </div>
    </section>
  );
};

export default Filter;
