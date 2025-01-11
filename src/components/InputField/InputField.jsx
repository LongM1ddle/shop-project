import * as React from "react";

export function InputField({ label, type = "text", placeholder, icon }) {
  return (
    <div className="flex flex-col justify-center w-full min-h-[87px]">
      <label className="text-sm text-black" htmlFor={`${label.toLowerCase()}-input`}>
        {label}
      </label>
      <div className="flex gap-2.5 items-center px-4 py-5 mt-1.5 w-full text-base bg-white rounded-xl border border-solid border-zinc-300">
        <input
          type={type}
          id={`${label.toLowerCase()}-input`}
          placeholder={placeholder}
          className="flex-1 shrink self-stretch my-auto basis-0 bg-transparent border-none outline-none text-black text-opacity-50"
          aria-label={label}
        />
        {icon && (
          <img
            loading="lazy"
            src={icon}
            alt=""
            className="object-contain shrink-0 self-stretch my-auto w-5 aspect-square"
          />
        )}
      </div>
    </div>
  );
}