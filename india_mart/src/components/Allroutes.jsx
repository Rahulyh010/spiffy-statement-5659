import { Route, Routes } from "react-router-dom";
import Home from "../Pages/Home";

import { ProductsPage } from "../Pages/ProductsPage";
import { ProductCard } from "./productCard";
import { CartPage } from "../Pages/CartPage";


const Allroutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/food" element={<ProductsPage />} />
      <Route path="/cart" element={<CartPage/>}/>
    </Routes>
  );
};

export default Allroutes;
