import React from "react";
import ProductCard from "../ProductCard/ProductCard";
import { Link } from "react-router-dom";

function ProductGrid() {
  const products = [
    {
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/66a3760eaeb9532ba475b569084e3f4b5201cca86a00bc439d4e512bafae5bde?placeholderIfAbsent=true&apiKey=ee430086628b486cbeaa8d6857237057",
      title: "arzyshmit pants",
      category: "men pants",
      price: "3000c",
    },
    {
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/c1d864e47a7e876963a8c217206bfbb0ff5063b40f31f42ca4af5169fe83bb59?placeholderIfAbsent=true&apiKey=ee430086628b486cbeaa8d6857237057",
      title: "Uni pants",
      category: "men pants",
      price: "3000c",
    },
    {
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/145733f67d8fe461c36ab21c2dde6ec39bd8de272d3362ee1b6c20ce9f158173?placeholderIfAbsent=true&apiKey=ee430086628b486cbeaa8d6857237057",
      title: "Uni pants",
      category: "men pants",
      price: "3000c",
    },
    {
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/d43fc06d1b88bf32306828f33a69882ba6387286489fdb9e27f5e1fd2b855217?placeholderIfAbsent=true&apiKey=ee430086628b486cbeaa8d6857237057",
      title: "Uni pants",
      category: "men pants",
      price: "3000c",
    },
  ];

  return (
    <div className="flex flex-wrap gap-8 items-center self-stretch mt-7 max-md:-mr-0.5">
      {products.map((product, index) => (
        <Link to="Product"><ProductCard key={index} {...product} /></Link>
      ))}
    </div>
  );
}

export default ProductGrid;
