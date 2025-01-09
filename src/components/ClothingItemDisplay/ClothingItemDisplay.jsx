import Tovar from "../../../public/Tovar.svg";

function ClothingItemDisplay() {
  return (
    <div className="flex flex-row items-start justify-start">
      <img
        src={Tovar}
        className="block w-[133px] h-[137px] object-cover border-none"
        alt="Product"
      />
      <div className="flex flex-col ml-[34px] pt-[3px]">
        <p className="text-[21px] font-bold text-[#1c1c1c] m-0">Uni pants</p>
        <p className="text-[18px] font-bold text-[#616161] tracking-[0.54px] m-0">
          Men pants
        </p>
        <p className="text-[18px] font-bold text-[#616161] tracking-[0.54px] mt-[4px] m-0">
          Size: M
        </p>
        <p className="text-[21px] font-bold text-black mt-[25px] m-0">
          3000 сом
        </p>
      </div>
    </div>
  );
}

export default ClothingItemDisplay;
