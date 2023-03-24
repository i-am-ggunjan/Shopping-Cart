import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../CartContext";

const ProductCard = (props) => {
  const [isAdding, setIsAdding] = useState(false);

  const { cart, setCart } = useContext(CartContext);
  const { product } = props;

  const addToCart = (e) => {
    e.preventDefault();
    let _cart = { ...cart };

    if (!_cart.items) {
      _cart.items = {};
    }
    if (_cart.items[product.name]) {
      _cart.items[product.name] += 1;
    } else {
      _cart.items[product.name] = 1;
    }

    if (!_cart.totalItems) {
      _cart.totalItems = 0;
    }
    _cart.totalItems += 1;
    setCart(_cart);

    setIsAdding(true);
    setTimeout(() => {
      setIsAdding(false);
    }, 1000);
  };

  return (
    <>
      <main className="flex flex-col items-center justify-between gap-2 grow">
        <Link to={`/product/${product.name}`}>
          <div className="bg-black p-3">
            <img
              src="https://dufa.in/images/9b41cb44-489c-4536-a33c-3cd45b51a590.JPG"
              alt=""
              className="rounded-[50%] w-[200px]"
            />
          </div>
        </Link>
        <h4 className="font-bold">{product.name}</h4>
        <span className="bg-slate-200 text-xs rounded-full px-2 py-[1px]">
          {product.size}
        </span>
        <div className="flex items-center justify-between gap-12">
          <q className="">₹ {product.price}</q>
          <button
            disabled={isAdding}
            onClick={addToCart}
            className={`${
              isAdding ? "bg-yellow-500" : "bg-teal-800"
            } text-white text-xs px-3 py-1 rounded-full`}
          >
            ADD{isAdding ? "ED" : ""}
          </button>
        </div>
      </main>
    </>
  );
};

export default ProductCard;
