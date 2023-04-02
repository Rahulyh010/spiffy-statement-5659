import { Route, Routes } from "react-router-dom";
import Productlist from "../Admin/Pages/Productlist";
import About from "../Admin/Pages/About";
import AddProduct from "../Admin/Pages/AddProduct";
import Updateproduct from "../Admin/Pages/Updateproduct";

import Login from "../Login_Signup/Pages/Login";
import Signup from "../Login_Signup/Pages/Signup";
import AdminLogin from "../Admin/Pages/AdminLogin";

import { ProductsPage } from "../Pages/ProductsPage";
import Home from "../Pages/Home";
import {CartPage} from "../Pages/CartPage"
import Search from "../Pages/search";
import Checkout from "../Checkout/Page/Checkout";
const Allroutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/food" element={<ProductsPage />} />
      <Route path="/cart" element={<CartPage/>} />
      <Route path="/adminLogin" element={<AdminLogin/>}/>
      <Route path="/adminAbout" element={<About />} />
      <Route path="/admin" element={<Productlist />} />
      <Route path="/adminAddProduct" element={<AddProduct />} />
      <Route path="/adminUpdateProduct/:id" element={<Updateproduct />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/search" element={<Search />} />
      <Route path="/checkout" element={<Checkout/>}/>
    </Routes>
  );
};

export default Allroutes;


