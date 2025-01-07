import * as React from "react";

export function CartItem({ name, category, size, price, imageUrl }) {
  return (
    <div className="flex flex-col text-4xl font-bold text-black whitespace-nowrap">
      <img
        loading="lazy"
        src={imageUrl}
        alt={name}
        className="object-contain mt-12 aspect-[0.97] w-[133px] max-md:mt-10 max-md:mr-1"
      />
      <div className="flex shrink-0 mt-5 bg-white rounded-3xl border border-solid border-stone-300 h-[42px] shadow-[0px_4px_4px_rgba(0,0,0,0.25)]" />
      <div className="flex flex-col mt-1">
        <div className="text-xl text-zinc-900">{name}</div>
        <div className="tracking-wide text-zinc-600">{category}</div>
        <div className="tracking-wide text-zinc-600">Size: {size}</div>
        <div className="mt-6">{price}</div>
      </div>
    </div>
  );
}