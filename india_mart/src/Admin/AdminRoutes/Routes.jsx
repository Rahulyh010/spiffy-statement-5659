import React from 'react'
import { Route, Routes } from "react-router-dom";
import Dashboard from "../Pages/Dashboard"
import About from "../Pages/About"
import Analytics from "../Pages/Analytics"
import Productlist from "../Pages/Productlist"
import "../Css/Admin.css"
import Sidebar from "../Component/Sidebar"
import AddProduct from '../Pages/AddProduct';

const AdminRoutes = () => {
  return (
    <div className="Admin">
        <Sidebar>
            <Routes>
                <Route path="/admin" element={<Dashboard/>}/>
                <Route path="/adminAbout" element={<About/>}/>
                <Route path="/adminAnalytics" element={<Analytics/>}/>
                <Route path="/adminProductlist" element={<Productlist/>}/>
                <Route path="/adminAddProduct" element={<AddProduct/>}/>
            </Routes>
        </Sidebar>
    </div>
  )
}

export default AdminRoutes