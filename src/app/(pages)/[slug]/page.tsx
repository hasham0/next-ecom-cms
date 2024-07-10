import { Add, CustomizeProducts, ProductImages } from "@/components";
import { wixClientServer } from "@/lib/wixClientServer";
import { notFound } from "next/navigation";
import React, { Suspense } from "react";

type Props = {
  params: { slug: string };
};

export default async function SinglePage({ params: { slug } }: Props) {
  const wixClient = await wixClientServer();
  const productCheck = await wixClient.products
    .queryProducts()
    .eq("slug", slug)
    .find();
  if (!productCheck.items[0]) {
    return notFound();
  }
  const product = productCheck.items[0];
  return (
    <section className="relative flex flex-col gap-16 px-4 md:px-8 lg:flex-row lg:px-16 xl:px-32 2xl:px-64">
      {/* Image */}
      <div className="top-20 h-max w-full lg:sticky lg:w-1/2">
        <ProductImages item={product.media?.items} />
      </div>

      {/* Text */}
      <div className="flex w-full flex-col gap-6 lg:w-1/2">
        <h1 className="text-4xl font-medium">{product.name}</h1>
        <p className="text-gray-500">{product.description}</p>
        <div className="h-[2px] bg-gray-100" />
        {product.priceData?.price === product.priceData?.discountedPrice ? (
          <h2 className="text-2xl font-medium">${product.priceData?.price}</h2>
        ) : (
          <div className="flex items-center gap-4">
            <h3 className="text-xl text-gray-500 line-through">
              ${product.priceData?.price}
            </h3>
            <h2 className="text-2xl font-medium">
              ${product.priceData?.discountedPrice}
            </h2>
          </div>
        )}
        <div className="h-[2px] bg-gray-100" />
        {product.variants && product.productOptions ? (
          <CustomizeProducts
            productId={product._id!}
            variants={product.variants}
            productOptions={product.productOptions}
          />
        ) : (
          <Add
            productId={product._id!}
            variantId="00000000-0000-0000-0000-000000000000"
            stockNumber={product.stock?.quantity || 0}
          />
        )}
        <div className="h-[2px] bg-gray-100" />
        {product.additionalInfoSections?.map((section: any) => (
          <div className="text-sm" key={section.title}>
            <h4 className="mb-4 font-medium">{section.title}</h4>
            <p>{section.description}</p>
          </div>
        ))}{" "}
        <div className="h-[2px] bg-gray-100" />
        {/* REVIEWS */}
        <h1 className="text-2xl">User Reviews</h1>
        <Suspense fallback="Loading...">
          {/* <Reviews productId={product._id!} /> */}
        </Suspense>
      </div>
    </section>
  );
}
