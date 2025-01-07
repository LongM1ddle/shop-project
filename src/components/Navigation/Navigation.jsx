import React from "react";
import { Link } from "react-router-dom";

function Navigation() {
  return (
    <div className="flex z-10 gap-5 items-center mt-12 text-xl text-black whitespace-nowrap max-md:mt-10">
      <Link><div className="self-stretch my-auto text-red-600">Новое</div></Link>
      <Link><div className="self-stretch my-auto">Худи</div></Link>
      <Link><div className="self-stretch my-auto">Зип-худи</div></Link>
      <Link><div className="self-stretch my-auto">Штаны</div></Link>
    </div>
  );
}

export default Navigation;
