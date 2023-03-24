import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <>
      <section className="px-[10vw] py-20 bg-slate-100 font-serif">
        <article className="flex items-center justify-between max-md:flex-col-reverse max-md:items-start max-md:gap-28">
          <main className="flex flex-col items-start gap-8 ">
            <div className="flex flex-col gap-1">
              <p className="text-2xl max-lg:text-base text-slate-500">
                Are you hungry
              </p>
              <p className="text-5xl max-lg:text-3xl font-bold text-slate-700">
                Don't wait
              </p>
            </div>
            <button
              onClick={() => {
                navigate("/Product");
              }}
              className="bg-teal-800 hover:bg-teal-600 text-white px-3 py-1 rounded-full"
            >
              Order Now
            </button>
          </main>
          <div className="">
            <img
              src="https://dufa.in/images/9b41cb44-489c-4536-a33c-3cd45b51a590.JPG"
              alt=""
              className="rounded-[50%] w-[400px]"
            />
          </div>
        </article>
      </section>
    </>
  );
};

export default Home;
