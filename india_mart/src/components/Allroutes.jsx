import { Route, Routes } from "react-router-dom";
import Home from "../Pages/Home";
import { ProductsPage } from "../Pages/ProductsPage";
import { ProductCard } from "./productCard";


const Allroutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/food" element={<Foodnbev />} />
      <Route path="/product" element={<ProductsPage />} />
    </Routes>
  );
};

export default Allroutes;
