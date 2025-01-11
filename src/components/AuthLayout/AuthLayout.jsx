import * as React from "react";
import { SignUpForm } from "../SignUpForm/SignUpForm";

export function AuthLayout() {
  return (
    <div className="flex overflow-hidden flex-col pb-28 bg-white max-md:pb-24">
      <main className="self-center mt-9 w-full max-w-[990px] max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col">
          <div className="flex flex-col w-[38%] max-md:ml-0 max-md:w-full">
            <div className="flex overflow-hidden flex-col grow justify-center px-10 py-72 w-full bg-slate-100 rotate-[-5.551115123125783e-17rad] rounded-[32px_0px_0px_32px] max-md:px-5 max-md:py-24">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/4264ca008e99fe23e92e221c2c8509043a3f7f5e193ee120688bb3cc690cdc67?placeholderIfAbsent=true&apiKey=ee430086628b486cbeaa8d6857237057"
                alt=""
                className="object-contain w-full rounded-none aspect-[1.15]"
              />
            </div>
          </div>
          <div className="flex flex-col ml-5 w-[62%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow items-center px-20 pt-24 pb-44 w-full leading-none bg-white rounded-none max-md:px-5 max-md:pb-24 max-md:max-w-full">
              <SignUpForm />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}