import { wixClientServer } from "@/lib/wixClientServer";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { products } from "@wix/stores";
import DOMPurify from "isomorphic-dompurify";
import Pagination from "./pagination";

type Props = {
  categoryID: string;
  limit?: number;
  // searchParams?: {
  //   cat?: string;
  //   type?: string;
  //   min?: number;
  //   max?: number;
  //   sort?: string;
  //   name?: string;
  // };
  searchParams: any;
};
const PRODUCT_PER_PAGE = 8;

const ProductList = async ({ categoryID, limit = 20, searchParams }: Props) => {
  const wixClient = await wixClientServer();
  const response = wixClient.products
    .queryProducts()
    .startsWith("name", searchParams?.name || "")
    .eq("collectionIds", categoryID)
    .hasSome(
      "productType",
      searchParams?.type ? [searchParams.type] : ["physical", "digital"],
    )
    .gt("priceData.price", searchParams?.min || 0)
    .lt("priceData.price", searchParams?.max || 999999)
    .limit(limit || PRODUCT_PER_PAGE)
    .skip(
      searchParams?.page
        ? parseInt(searchParams.page) * (limit || PRODUCT_PER_PAGE)
        : 0,
    );

  if (searchParams?.sort) {
    const [sortType, sortBy] = searchParams.sort.split(" ");

    if (sortType === "asc") {
      response.ascending(sortBy);
    }
    if (sortType === "desc") {
      response.descending(sortBy);
    }
  }
  const productData = await response.find();
  return (
    <section className="mt-12 flex flex-wrap justify-between gap-x-8 gap-y-16">
      {productData.items.map((product: products.Product, index: number) => (
        <Link
          key={product._id}
          href={`/${product.slug}`}
          className="flex w-full flex-col gap-4 sm:w-[45%] lg:w-[22%]"
        >
          <div className="relative h-80 w-full">
            <Image
              src={
                product.media?.mainMedia?.image?.url || "/images/product.png"
              }
              alt="dishes"
              priority
              fill
              sizes="25vw"
              className="easy absolute z-10 rounded-md object-cover transition-opacity duration-500 hover:opacity-0"
            />
            {product.media?.items && (
              <Image
                src={
                  product.media?.items[1]?.image?.url || "/images/product.png"
                }
                alt="coffee"
                priority
                fill
                sizes="25vw"
                className="absolute rounded-md object-cover"
              />
            )}
          </div>
          <div className="flex justify-between">
            <span className="font-medium">{product.name}</span>
            <span className="font-semibold">{product.priceData?.price}</span>
          </div>
          <div className="text-sm text-gray-500">
            {product.additionalInfoSections && (
              <div
                className="text-sm text-gray-500"
                dangerouslySetInnerHTML={{
                  __html: DOMPurify.sanitize(
                    product.additionalInfoSections.find(
                      (section: any) => section.title === "shortDesc",
                    )?.description || "",
                  ),
                }}
              ></div>
            )}{" "}
          </div>
          <button className="w-max rounded-2xl px-4 py-2 text-sm ring-1 ring-primary hover:bg-primary hover:text-white">
            Add to Cart
          </button>
        </Link>
      ))}
      {searchParams?.cat || searchParams?.name ? (
        <Pagination
          currentPage={productData.currentPage || 0}
          hasPrev={productData.hasPrev()}
          hasNext={productData.hasNext()}
        />
      ) : null}
    </section>
  );
};

export default ProductList;
