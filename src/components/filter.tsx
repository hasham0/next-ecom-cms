import React from "react";

type Props = {};

const Filter = (props: Props) => {
  return (
    <section className="mt-12 flex justify-between">
      {/* Left */}
      <div className="flex flex-wrap gap-6">
        <select
          name="type"
          className="rounded-2xl bg-[#EBEDED] px-4 py-2 font-medium"
          id=""
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
        />
        <input
          type="text"
          name="man"
          placeholder="max price"
          className="w-24 rounded-2xl pl-2 text-xs ring-1 ring-gray-400"
        />
        {/* Filter Category */}
        <select
          name="cat"
          className="rounded-2xl bg-[#EBEDED] px-4 py-2 font-medium"
          id=""
        >
          <option>Category</option>
          <option value="New_Arrival">New Arrival</option>
          <option value="Popular">Popular</option>
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
