import React from "react";
import checkout from "../../../public/Checkout.svg";
import logout from "../../../public/Logout.svg";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="flex flex-col mr-0 w-full text-5xl text-black whitespace-nowrap bg-white max-md:max-w-full">
      <div className="flex flex-col justify-center px-16 py-3.5 w-full bg-white max-md:px-5 max-md:max-w-full">
        <div className="flex flex-wrap gap-5 justify-between w-full max-w-[1223px] max-md:max-w-full">
          <div className="font-Jersey-20">Uniwear</div>
          <div className="flex flex-row">
            <Link to="/"><img
              loading="lazy"
              src={checkout}
              className="object-contain my-auto aspect-[2.68] w-[59px]"
            />
            </Link>
            <Link><img
              loading="lazy"
              src={logout}
              className="object-contain my-auto aspect-[2.68] w-[59px]"
            />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
