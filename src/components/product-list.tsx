import { wixClientServer } from "@/lib/wixClientServer";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { products } from "@wix/stores";
import DOMPurify from "isomorphic-dompurify";

type Props = {
  categoryID: string;
  limit?: number;
};

const ProductList = async ({ categoryID, limit = 20 }: Props) => {
  const wixClient = await wixClientServer();
  const { items } = await wixClient.products
    .queryProducts()
    .eq("collectionIds", categoryID)
    .limit(limit)
    .find();
  return (
    <section className="mt-12 flex flex-wrap justify-between gap-x-8 gap-y-16">
      {items.map((product: products.Product) => (
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
                  product.media?.items[1].image?.url || "/images/product.png"
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
    </section>
  );
};

export default ProductList;
