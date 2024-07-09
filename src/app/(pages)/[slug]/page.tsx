import { Add, CustomizeProducts, ProductImages } from "@/components";
import React from "react";

type Props = {};

export default function SinglePage({}: Props) {
  return (
    <section className="relative flex flex-col gap-16 px-4 md:px-8 lg:flex-row lg:px-16 xl:px-32 2xl:px-64">
      {/* Image */}
      <div className="top-20 h-max w-full lg:sticky lg:w-1/2">
        <ProductImages />
      </div>

      {/* Text */}
      <div className="flex w-full flex-col gap-6 lg:w-1/2">
        <h1 className="text-4xl font-medium">Product Name</h1>
        <p className="text-gray-500">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum
          voluptatibus, blanditiis ducimus veritatis eos est sed iusto
          aspernatur expedita qui libero quam ad eveniet dolores iure et ab
          perferendis recusandae dicta optio iste? Quae, sit.
        </p>
        <div className="h-[2px] bg-gray-100"></div>
        <div className="flex items-center gap-4">
          <h3 className="text-xl text-gray-500 line-through">$59</h3>
          <h2 className="text-2xl font-medium">$49</h2>
        </div>
        <div className="h-[2px] bg-gray-100"></div>

        {/* customize */}
        <CustomizeProducts />

        {/* add quantity */}
        <Add />

        <div className="h-[2px] bg-gray-100"></div>
        <div className="text-sm">
          <h4 className="mb-4 font-medium">Title</h4>
          <p className="">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam magni
            cupiditate repudiandae, ea recusandae quis deleniti dignissimos vel
            molestias deserunt, possimus hic.
          </p>
        </div>
        <div className="text-sm">
          <h4 className="mb-4 font-medium">Title</h4>
          <p className="">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam magni
            cupiditate repudiandae, ea recusandae quis deleniti dignissimos vel
            molestias deserunt, possimus hic.
          </p>
        </div>
        <div className="text-sm">
          <h4 className="mb-4 font-medium">Title</h4>
          <p className="">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam magni
            cupiditate repudiandae, ea recusandae quis deleniti dignissimos vel
            molestias deserunt, possimus hic.
          </p>
        </div>
      </div>
    </section>
  );
}
