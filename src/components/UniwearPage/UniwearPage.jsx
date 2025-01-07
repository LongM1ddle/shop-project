import React from "react";
import Header from "../Header/Header";
import Navigation from "../Navigation/Navigation";
import NewArrivals from "../NewArrivals/NewArrivals";

function UniwearPage() {
  return (
    <div className="flex min-h-screen w-full overflow-hidden flex-col items-center px-20 font-bold bg-white max-md:px-5">
      <div className="flex overflow-hidden flex-col items-start pb-56 w-full bg-white max-w-[1220px] max-md:pb-24 max-md:max-w-full">
        <Navigation />
        <div className="shrink-0 h-0.5 border-2 border-red-600 border-solid w-[62px]" />
        <NewArrivals />
      </div>
    </div>
  );
}

export default UniwearPage;