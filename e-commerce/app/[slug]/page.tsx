import ProductImages from "@/components/ProductImages";
import React from "react";

export default function SinglePage() {
  return (
    <div className="px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 relative flex flex-col lg:flex-row gap-16">
      {/* IMG */}
      <div className="w-full lg:w-1/2 lg:sticky top-20 h-max">
        <ProductImages />
      </div>
      {/* TEXTS */}
      <div className="w-full lg:w-1/2 flex flex-col gap-6">
        <h1 className="text-4xl font-medium">Product Name</h1>
        <p className="text-gray-500">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam dolore
          repudiandae minima id magni ut tempora porro cumque dolorum cupiditate
          fugiat animi beatae temporibus debitis architecto assumenda quod,
          veritatis possimus!
        </p>
        <div className="h-[2px] bg-gray-100" />
        <div>
          <h3>$59</h3>
        </div>
      </div>
    </div>
  );
}
