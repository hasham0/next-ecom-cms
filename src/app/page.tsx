import { CategoriesList, ProductList, Slider } from "@/components";

export default function Home() {
  return (
    <section className="">
      <Slider />
      <article className="mt-24 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64">
        <h2 className="text-2xl">Featured Products</h2>
        <ProductList />
      </article>
      <article className="mt-24">
        <h2 className="mb-12 px-4 text-2xl md:px-8 lg:px-16 xl:px-32 2xl:px-64">
          Categories
        </h2>
        <CategoriesList />
      </article>
      <article className="mt-24 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64">
        <h2 className="text-2xl">New Products </h2>
        <ProductList />
      </article>
    </section>
  );
}
