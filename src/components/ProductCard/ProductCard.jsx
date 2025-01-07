import React from 'react';

function ProductCard({ image, title, category, price }) {
  return (
    <div className="flex flex-col self-stretch my-auto min-w-[240px] w-[282px]">
      <div className="flex flex-col pb-5 w-full bg-white">
        <img
          loading="lazy"
          src={image}
          className="object-contain w-full aspect-[0.85]"
          alt={title}
        />
        <div className="flex gap-10 self-start mt-3.5 ml-3 max-md:ml-2.5">
          <div className="flex flex-col">
            <div className="text-lg text-zinc-900">{title}</div>
            <div className="z-10 self-start text-base text-zinc-500">
              {category}
            </div>
          </div>
          <div className="my-auto text-base text-zinc-900">{price}</div>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;