import { Route, Routes } from "react-router-dom";
import { ProductsPage } from "../Pages/ProductsPage";
import { ProductCard } from "./productCard";
import Productlist from "../Admin/Pages/Productlist";
import About from "../Admin/Pages/About";
import AddProduct from "../Admin/Pages/AddProduct";
import Updateproduct from "../Admin/Pages/Updateproduct";

const Allroutes = () => {
  return <div>
  <Routes>
    <Route path="/productPage" element={<ProductsPage/>}/>
    <Route path="/adminAbout" element={<About/>}/>
    <Route path="/admin" element={<Productlist/>}/>
    <Route path="/adminAddProduct" element={<AddProduct/>}/>
    <Route path="/adminUpdateProduct/:id" element={<Updateproduct/>}/>
  </Routes>
  </div>;
};

export default Allroutes;
