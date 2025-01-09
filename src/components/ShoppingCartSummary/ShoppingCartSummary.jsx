function ShoppingCartSummary() {
  return (
    <div className="w-full">
      <div className="flex flex-row gap-[8px] items-center justify-between w-full">
        <p className="text-[22px] font-medium text-black m-0">
          Subtotal
          <br />
        </p>
        <p className="text-[18px] font-medium text-black m-0">3000 сом</p>
      </div>
      <div className="flex flex-row gap-[8px] items-center justify-between w-full mt-[15px]">
        <p className="text-[22px] font-medium text-black m-0">
          Delivery
          <br />
        </p>
        <p className="text-[18px] font-medium text-black m-0">Free</p>
      </div>
      <div className="w-full mt-[15.5px] border-t border-lightgrey" />
      <div className="flex flex-row gap-[8px] items-center justify-between w-full mt-[15.5px]">
        <p className="text-[22px] font-bold text-black m-0">
          Total
          <br />
        </p>
        <p className="text-[18px] font-bold text-black m-0">3000 сом</p>
      </div>
    </div>
  );
}

export default ShoppingCartSummary;
