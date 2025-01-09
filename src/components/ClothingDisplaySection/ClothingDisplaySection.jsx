import ClothingItemDisplay from "../ClothingItemDisplay/ClothingItemDisplay";
import Discard from "../../../public/Discard.svg";
import minus from "../../../public/minus.svg";
import plus from "../../../public/plus.svg";

function ClothingDisplaySection() {
  return (
    <div className="w-full mt-[49px]">
      <div className="flex flex-row gap-[8px] items-start justify-between w-full">
        <ClothingItemDisplay />
        <div className="pt-[3px]">
          <img src={Discard} className="flex w-[24px] h-[24px]" />
        </div>
      </div>
      <div className="flex flex-row gap-[28px] items-center justify-center h-[42px] px-[11px] mt-[18px] bg-white border border-[#cecece] rounded-[24px] shadow-md w-[35%]">
        <img src={minus} className="flex w-[24px] h-[24px]" />
        <p className="text-[21px] font-bold text-black m-0">1</p>
        <img src={plus} className="flex w-[24px] h-[24px]" />
      </div>
    </div>
  );
}

export default ClothingDisplaySection;
