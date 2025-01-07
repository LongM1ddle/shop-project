import React from "react";
import ProductGrid from "../ProductGrid/ProductGrid";

function NewArrivals() {
  return (
    <>
      <div className="flex gap-3.5 mt-10 text-4xl text-black max-md:ml-1">
        <div className="grow">New arrivals</div>
       <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/dbdba0566201a155871af54fdba63274e30fcd28febb0a1b740dc29e48cc9ff3?placeholderIfAbsent=true&apiKey=ee430086628b486cbeaa8d6857237057"
          className="object-contain shrink-0 my-auto aspect-[0.72] w-[18px]"
          alt="Arrow"
        />
      </div>
      <ProductGrid />
    </>
  );
}

export default NewArrivals;
