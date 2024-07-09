import { CategoriesList, ProductList, Slider } from "@/components";
import { env } from "@/validation/env";
import { Suspense } from "react";

export default async function Home() {
  return (
    <section className="">
      <Slider />
      <article className="mt-24 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64">
        <h2 className="text-2xl">Featured Products</h2>
        <Suspense fallback={"Loading...."}>
          <ProductList categoryID={env.ACCESSRORIES_CATEGORY_ID} limit={4} />
        </Suspense>
      </article>
      <article className="mt-24">
        <h2 className="mb-12 px-4 text-2xl md:px-8 lg:px-16 xl:px-32 2xl:px-64">
          Categories
        </h2>
        <Suspense fallback={"Loading...."}>
          <CategoriesList />
        </Suspense>
      </article>
      <article className="mt-24 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64">
        <h2 className="text-2xl">New Products</h2>
        {/* <ProductList /> */}
      </article>
    </section>
  );
}
