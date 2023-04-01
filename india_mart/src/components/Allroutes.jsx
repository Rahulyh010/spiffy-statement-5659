import { Route, Routes } from "react-router-dom";


import Productlist from "../Admin/Pages/Productlist";
import About from "../Admin/Pages/About";
import AddProduct from "../Admin/Pages/AddProduct";
import Updateproduct from "../Admin/Pages/Updateproduct";
import Home from "../Pages/Home";
import { ProductsPage } from "../Pages/ProductsPage";
import { CartPage } from "../Pages/CartPage";
import Login from "../Login_Signup/Pages/Login";
import Signup from "../Login_Signup/Pages/Signup";


const Allroutes = () => {
  return (
  <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/food" element={<ProductsPage/>}/>
    <Route path="/cart" element={<CartPage/>}/>
    <Route path="/adminAbout" element={<About/>}/>
    <Route path="/admin" element={<Productlist/>}/>
    <Route path="/adminAddProduct" element={<AddProduct/>}/>
    <Route path="/adminUpdateProduct/:id" element={<Updateproduct/>}/>
    <Route path="/login" element={<Login/>}/>
    <Route path="/signup" element={<Signup/>}/>
    
  </Routes>
  )
};

export default Allroutes;
