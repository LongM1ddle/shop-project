import ClothingDisplayLayout from "../ClothingDisplayLayout/ClothingDisplayLayout";
import ShoppingCheckoutWidget from "../ShoppingCheckoutWidget/ShoppingCheckoutWidget";
import checkout from "../../../public/Checkout.svg";

function ShoppingCartLayout() {
  return (
    <div className="flex flex-row gap-[8px] items-start justify-between min-w-[893px]">
      <div className="flex-0 min-w-[467px]">
        <div className="flex flex-row items-center justify-start">
          <p className="text-[36px] font-bold text-black m-0">Cart</p>
          <img src={checkout} className="flex w-[32px] h-[32px] ml-[7px]" />
        </div>
        <ClothingDisplayLayout />
      </div>
      <div className="flex-0 w-[321px] pt-[4px]">
        <p className="text-[30px] font-bold text-black m-0">Summary</p>
        <ShoppingCheckoutWidget />
      </div>
    </div>
  );
}

export default ShoppingCartLayout;
