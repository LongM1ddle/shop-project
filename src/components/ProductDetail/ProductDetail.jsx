import * as React from "react";
import ProductCard from "../ProductCard/ProductCard";
import { SizeButton } from "../SizeButton/SizeButton";

const similarProducts = [
  {
    image: "https://cdn.builder.io/api/v1/image/assets/TEMP/66a3760eaeb9532ba475b569084e3f4b5201cca86a00bc439d4e512bafae5bde?placeholderIfAbsent=true&apiKey=ee430086628b486cbeaa8d6857237057",
    title: "Uni pants",
    category: "men pants",
    price: "3000c"
  },
  {
    image: "https://cdn.builder.io/api/v1/image/assets/TEMP/c1d864e47a7e876963a8c217206bfbb0ff5063b40f31f42ca4af5169fe83bb59?placeholderIfAbsent=true&apiKey=ee430086628b486cbeaa8d6857237057",
    title: "Uni pants",
    category: "men pants",
    price: "3000c"
  },
  {
    image: "https://cdn.builder.io/api/v1/image/assets/TEMP/145733f67d8fe461c36ab21c2dde6ec39bd8de272d3362ee1b6c20ce9f158173?placeholderIfAbsent=true&apiKey=ee430086628b486cbeaa8d6857237057",
    title: "Uni pants",
    category: "men pants",
    price: "3000c"
  },
  {
    image: "https://cdn.builder.io/api/v1/image/assets/TEMP/d43fc06d1b88bf32306828f33a69882ba6387286489fdb9e27f5e1fd2b855217?placeholderIfAbsent=true&apiKey=ee430086628b486cbeaa8d6857237057",
    title: "Uni pants",
    category: "men pants",
    price: "3000c"
  }
];

const sizes = ["XS", "S", "M", "L", "XL"];

export function ProductDetail() {
  const [selectedSize, setSelectedSize] = React.useState("M");
  const [isAddingToCart, setIsAddingToCart] = React.useState(false);

  const handleAddToCart = () => {
    setIsAddingToCart(true);
    setTimeout(() => setIsAddingToCart(false), 1000);
  };

  return (
    <div className="flex overflow-hidden flex-col bg-white">
      <main className="flex overflow-hidden flex-col self-center pt-36 pb-96 max-w-full bg-white w-[1220px] max-md:py-24">
        <div className="flex flex-col px-1.5 w-full max-md:max-w-full">
          <div className="max-md:max-w-full">
            <div className="flex gap-5 max-md:flex-col">
              <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/eea9cbf516382a4665033aee69c3c96a56f67dabc14d38112354823d5bdc43ae?placeholderIfAbsent=true&apiKey=ee430086628b486cbeaa8d6857237057"
                  alt="Uni pants product main view"
                  className="object-contain grow w-full aspect-[0.83] max-md:mt-5 max-md:max-w-full"
                />
              </div>
              <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
                <div className="flex flex-col items-start w-full font-bold text-zinc-600 max-md:mt-5 max-md:max-w-full">
                  <span className="text-xl tracking-wide">Men pants</span>
                  <h2 className="text-5xl text-black max-md:text-4xl">
                    Uni pants.
                  </h2>
                  <div className="mt-1.5 text-2xl text-black">3000 сом</div>
                  <label className="mt-8 text-base tracking-wide">Размеры</label>
                  <div className="flex gap-3 mt-2.5 text-3xl text-black whitespace-nowrap">
                    {sizes.map((size) => (
                      <SizeButton
                        key={size}
                        size={size}
                        isSelected={size === selectedSize}
                        onClick={() => setSelectedSize(size)}
                      />
                    ))}
                  </div>
                  <button className="mt-3 text-base tracking-wide underline">
                    Подробнее о размерах
                  </button>
                  <button 
                    className="self-stretch px-16 py-2.5 mt-16 text-xl tracking-wide text-white whitespace-nowrap rounded-xl bg-zinc-900 max-md:px-5 max-md:mt-10 max-md:max-w-full hover:bg-zinc-800 transition-colors"
                    onClick={() => window.location.href = '/checkout'}
                  >
                    Приобрести
                  </button>
                  <button 
                    className="self-stretch px-16 py-2.5 mt-3 text-xl tracking-wide text-black bg-white rounded-xl border border-black border-solid max-md:px-5 max-md:max-w-full hover:bg-gray-50 transition-colors"
                    onClick={handleAddToCart}
                    disabled={isAddingToCart}
                  >
                    {isAddingToCart ? 'Добавлено' : 'Добавить в корзину'}
                  </button>
                  <p className="self-stretch mt-14 text-xl max-md:mt-10 max-md:max-w-full">
                    Удобные и стильные широкие брюки, идеально подходят для
                    повседневного ношения. Прямой свободный крой и комфортная
                    посадка дают свободу движений. Отличный вариант для любого
                    случая.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex gap-2.5 self-start mt-24 text-3xl font-bold tracking-wide text-black max-md:mt-10">
            <h3 className="flex-auto">Похожие товары</h3>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/dbdba0566201a155871af54fdba63274e30fcd28febb0a1b740dc29e48cc9ff3?placeholderIfAbsent=true&apiKey=ee430086628b486cbeaa8d6857237057"
              alt="Arrow icon"
              className="object-contain shrink-0 my-auto aspect-[0.72] w-[18px]"
            />
          </div>
        </div>
        <div className="flex flex-wrap gap-8 items-center mt-4 mb-0 font-bold max-md:mb-2.5">
          {similarProducts.map((product, index) => (
            <ProductCard key={index} {...product} />
          ))}
        </div>
      </main>
    </div>
  );
}