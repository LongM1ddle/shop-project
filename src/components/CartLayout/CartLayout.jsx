import * as React from "react";
import { CartItem } from "../CartItem/CartItem";
import { OrderSummary } from "../OrderSummary/OrderSummary";

const cartItems = [
  {
    name: "Uni pants",
    category: "Men pants",
    size: "M",
    price: "3000 сом",
    imageUrl: "https://cdn.builder.io/api/v1/image/assets/ee430086628b486cbeaa8d6857237057/9ac5f1c281a21207df94793c9886b4897d8dc271e0540dce7cc5acf40cb2431c?apiKey=ee430086628b486cbeaa8d6857237057&"
  },
  {
    name: "Uni pants",
    category: "Men pants",
    size: "M",
    price: "3000 сом",
    imageUrl: "https://cdn.builder.io/api/v1/image/assets/ee430086628b486cbeaa8d6857237057/9ac5f1c281a21207df94793c9886b4897d8dc271e0540dce7cc5acf40cb2431c?apiKey=ee430086628b486cbeaa8d6857237057&"
  }
];

export function CartLayout() {
  return (
    <div className="flex flex-col items-center bg-white">
      <main className="mt-12 max-w-full rounded-none w-[893px] max-md:mt-10">
        <div className="flex gap-5 max-md:flex-col">
          <div className="flex flex-col w-[16%] max-md:ml-0 max-md:w-full">
            <div className="flex gap-3 self-start text-4xl font-bold">
              <div>Cart</div>
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/ee430086628b486cbeaa8d6857237057/de911e7615fccb3dead90fa908b25bb337a977cf008fe0926336f9542ef68e40?apiKey=ee430086628b486cbeaa8d6857237057&"
                alt=""
                className="object-contain shrink-0 my-auto w-6 aspect-[0.86]"
              />
            </div>
            {cartItems.map((item, index) => (
              <CartItem key={index} {...item} />
            ))}
          </div>
          <OrderSummary subtotal="3000 сом" delivery="Free" total="3000 сом" />
        </div>
      </main>
    </div>
  );
}