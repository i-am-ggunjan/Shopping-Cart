import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Data from "../components/Data.json";

const SingleProductPage = (props) => {
  const navigate = useNavigate();
  let [data, setData] = useState(Data);
  const [product, setPruduct] = useState({ name: "Pizza" });
  const params = useParams();

  useEffect(() => {
    data.filter((value) => {
      if (value.name === params.name) {
        setPruduct(value);
      }
    });
  });

  return (
    <>
      <section className="px-[10vw] py-5">
        <button
          onClick={() => {
            navigate(-1);
          }}
          className="bg-teal-800 hover:bg-teal-600 text-white px-5 py-1 rounded-full"
        >
          Back
        </button>
        <main className="flex flex-col items-center justify-between gap-2 grow">
          <div className="bg-black p-3">
            <img
              src="https://dufa.in/images/9b41cb44-489c-4536-a33c-3cd45b51a590.JPG"
              alt=""
              className="rounded-[50%] w-[200px]"
            />
          </div>
          <h4 className="font-bold">{product.name}</h4>
          <span className="bg-slate-200 text-xs rounded-full px-2 py-[1px]">
            {product.size}
          </span>
          <div className="flex items-center justify-between gap-12">
            <q className="">₹ {product.price}</q>
            <button className="bg-teal-800 hover:bg-teal-600 text-white text-xs px-3 py-1 rounded-full">
              ADD
            </button>
          </div>
        </main>
      </section>
    </>
  );
};

export default SingleProductPage;
