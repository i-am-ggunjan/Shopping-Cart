import ProductCard from "./ProductCard";
import Data from "./Data.json";
import { useEffect, useState, useContext } from "react";
import { CartContext } from "../CartContext";

const Products = () => {
  // const {name} = useContext(CartContext)

  let [data, setData] = useState(Data);
  // console.log(data);

  return (
    <>
      <section className="px-[10vw] py-10 bg-slate-50 font-serif">
        <h2 className="font-bold mb-6">Products</h2>
        <article className="flex gap-16 flex-wrap">
          {data.map((value) => {
            return (
              <ProductCard
                key={value.name}
                // name={value.name}
                // size={value.size}
                // price={value.price}
                product={value}
              />
            );
          })}
        </article>
      </section>
    </>
  );
};

export default Products;
