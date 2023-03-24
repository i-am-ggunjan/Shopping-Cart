import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, json } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";

import Home from "./pages/HomePage";
import Product from "./pages/ProductPage";
import SingleProduct from "./pages/SingleProductPage";
import Cart from "./pages/CartPage";
import { CartContext } from "./CartContext";

const App = () => {
  const [cart, setCart] = useState({});
  // fetch cart from local storage
  useEffect(() => {
    const cart = window.localStorage.getItem("cart");
    setCart(JSON.parse(cart))
  }, []);

  useEffect(() => {
    window.localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  return (
    <>
      <Router>
        <CartContext.Provider value={{ cart, setCart }}>
          <Header></Header>
          <Routes>
            <Route path="/" element={<Home></Home>}></Route>
            <Route path="/product" element={<Product></Product>}></Route>
            <Route
              path="/product/:name"
              element={<SingleProduct></SingleProduct>}
            ></Route>
            <Route path="/cart" element={<Cart></Cart>}></Route>
          </Routes>
          <Footer></Footer>
        </CartContext.Provider>
      </Router>
    </>
  );
};

export default App;
