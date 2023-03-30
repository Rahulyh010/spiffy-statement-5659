import { Route, Routes } from "react-router-dom";
import { ProductsPage } from "../Pages/ProductsPage";
import { ProductCard } from "./productCard";

const Allroutes = () => {
  return <div>
  <Routes>
    <Route path="/productPage" element={<ProductsPage/>}/>
  </Routes>
  </div>;
};

export default Allroutes;
