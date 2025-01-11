import * as React from "react";
import { InputField } from "../InputField/InputField";

export function SignUpForm() {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col max-w-full w-[354px]">
      <h1 className="self-center text-3xl font-bold tracking-tight leading-tight text-black">
        Create account
      </h1>
      <div className="mt-14 max-md:mt-10">
        <InputField
          label="Email address"
          type="email"
          placeholder="Your email"
        />
      </div>
      <div className="mt-6">
        <InputField
          label="Create a password"
          type="password"
          placeholder="must be 8 characters"
          icon="https://cdn.builder.io/api/v1/image/assets/TEMP/ff6a94a460a625c0eae57a4dc100f39d99173535aa62459a2700d710db0a0c6a?placeholderIfAbsent=true&apiKey=ee430086628b486cbeaa8d6857237057"
        />
      </div>
      <div className="mt-6">
        <InputField
          label="Confirm password"
          type="password"
          placeholder="repeat password"
          icon="https://cdn.builder.io/api/v1/image/assets/TEMP/f047adc8a08f7dffde5f4d0869a2c7e3e59cdf57611b35c0119badf52817cfca?placeholderIfAbsent=true&apiKey=ee430086628b486cbeaa8d6857237057"
        />
      </div>
      <button
        type="submit"
        className="gap-2.5 self-stretch px-28 py-5 mt-12 text-base font-semibold text-center text-white bg-black rounded-xl min-h-[56px] max-md:px-5 max-md:mt-10"
      >
        Create account
      </button>
      <div className="self-center mt-9 text-sm text-black">
        Already have an account?{" "}
        <a href="/login" className="font-semibold underline">
          Log in
        </a>
      </div>
    </form>
  );
}