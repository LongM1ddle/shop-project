import { Button } from "@mui/base";
import ShoppingCartSummary from "../ShoppingCartSummary/ShoppingCartSummary";

function ShoppingCheckoutWidget() {
  return (
    <div className="w-full px-[3px] mt-[25px]">
      <ShoppingCartSummary />
      <Button className="block w-full min-w-[317px] h-[56px] mt-[83px] bg-black text-white font-semibold text-[16px] rounded-[10px] cursor-pointer">
        Checkout
      </Button>
    </div>
  );
}

export default ShoppingCheckoutWidget;
