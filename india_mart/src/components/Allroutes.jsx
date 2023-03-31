import { Route, Routes } from "react-router-dom";
import { ProductsPage } from "../pages/ProductsPage";
import { ProductCard } from "./productCard";
import Home from "../pages/Home";
import Foodnbev from "../pages/foodnbev";

const Allroutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/food" element={<Foodnbev />} />
      <Route path="/product" element={<ProductsPage />} />
    </Routes>
  );
};

export default Allroutes;
