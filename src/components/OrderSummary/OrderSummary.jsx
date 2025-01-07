import * as React from "react";

export function OrderSummary({ subtotal, delivery, total }) {
  return (
    <div className="flex flex-col ml-5 w-[84%] max-md:ml-0 max-md:w-full">
      <div className="flex flex-col text-black">
        <div className="flex gap-5 justify-between font-medium">
          <div className="flex flex-col items-start text-2xl whitespace-nowrap">
            <div className="self-stretch text-3xl font-bold">Summary</div>
            <div className="mt-6">Subtotal</div>
            <div className="mt-5">Delivery</div>
          </div>
          <div className="flex flex-col self-end mt-16 text-lg max-md:mt-10">
            <div className="max-md:mr-1">{subtotal}</div>
            <div className="self-end mt-6 text-right">{delivery}</div>
          </div>
        </div>
        <div className="shrink-0 mt-5 max-w-full h-px border border-solid border-neutral-300 w-[312px]" />
        <div className="flex gap-5 justify-between mt-4 font-bold">
          <div className="text-2xl">Total</div>
          <div className="text-lg">{total}</div>
        </div>
        <button className="gap-2.5 self-end px-32 py-5 mt-8 text-base font-semibold leading-none text-center text-white whitespace-nowrap bg-black rounded-xl min-h-[56px] max-md:px-5">
          Checkout
        </button>
      </div>
    </div>
  );
}