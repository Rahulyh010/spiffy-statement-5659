import { Route, Routes } from "react-router-dom";
import Productlist from "../Admin/Pages/Productlist";
import About from "../Admin/Pages/About";
import AddProduct from "../Admin/Pages/AddProduct";
import Updateproduct from "../Admin/Pages/Updateproduct";
import Home from "../Pages/Home";
import AdminLogin from "../Admin/Pages/AdminLogin";

const Allroutes = () => {
  return <div>
  <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/adminLogin" element={<AdminLogin/>}/>
    <Route path="/adminAbout" element={<About/>}/>
    <Route path="/admin" element={<Productlist/>}/>
    <Route path="/adminAddProduct" element={<AddProduct/>}/>
    <Route path="/adminUpdateProduct/:id" element={<Updateproduct/>}/>
  </Routes>
  </div>;
};

export default Allroutes;


