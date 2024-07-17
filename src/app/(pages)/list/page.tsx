import { Filter, ProductList } from "@/components";
import { wixClientServer } from "@/lib/wixClientServer";
import { env } from "@/validation/env";
import Image from "next/image";
import React, { Suspense } from "react";

type Props = {
  searchParams: {
    cat: string;
  };
};

export default async function page({ searchParams }: Props) {
  const wixClient = await wixClientServer();
  const catName = searchParams.cat && searchParams.cat.toLowerCase();
  const category = await wixClient.collections.getCollectionBySlug(
    catName || "all-products",
  );
  return (
    <section className="media_query relative">
      {/* CAMPAIGN */}
      <div className="hidden h-64 justify-between bg-pink-50 px-4 sm:flex">
        <div className="flex w-2/3 flex-col items-center justify-center gap-8">
          <h1 className="text-4xl font-semibold leading-[48px] text-gray-700">
            Grab up to 50% off on
            <br /> Selected Products
          </h1>
          <button className="w-max rounded-3xl bg-primary px-5 py-3 text-sm text-white">
            Buy Now
          </button>
        </div>
        <div className="relative w-1/3">
          <Image
            src="/images/woman.png"
            alt="women"
            priority
            sizes="100%"
            fill
            className="object-contain"
          />
        </div>
      </div>
      {/* FILTER */}
      <Filter />
      {/* PRODUCTS */}
      <h1 className="mt-12 text-xl font-semibold">
        {category.collection?.name} For You!
      </h1>

      <Suspense fallback={"Loading...."}>
        <ProductList
          categoryID={
            category.collection?._id || "00000000-000000-000000-000000000001"
          }
          searchParams={searchParams}
        />
      </Suspense>
    </section>
  );
}
