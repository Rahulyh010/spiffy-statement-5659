import { Route, Routes } from "react-router-dom";
import Search from "../pages/search";
import Productlist from "../Admin/Pages/Productlist";
import About from "../Admin/Pages/About";
import AddProduct from "../Admin/Pages/AddProduct";
import Updateproduct from "../Admin/Pages/Updateproduct";
import Home from "../pages/Home";
import { ProductsPage } from "../pages/ProductsPage";
import { CartPage } from "../pages/CartPage";
import Login from "../Login_Signup/Pages/Login";
import Signup from "../Login_Signup/Pages/Signup";
import AdminLogin from "../Admin/Pages/AdminLogin";

const Allroutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/food" element={<ProductsPage />} />
      <Route path="/cart" element={<CartPage />} />
      <Route path="/adminLogin" element={<AdminLogin/>}/>
      <Route path="/adminAbout" element={<About />} />
      <Route path="/admin" element={<Productlist />} />
      <Route path="/adminAddProduct" element={<AddProduct />} />
      <Route path="/adminUpdateProduct/:id" element={<Updateproduct />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/search" element={<Search />} />
    </Routes>
  );
};

export default Allroutes;


