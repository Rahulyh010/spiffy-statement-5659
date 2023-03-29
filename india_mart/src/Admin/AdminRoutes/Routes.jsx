import React from 'react'
import { Route, Routes } from "react-router-dom";
import Dashboard from "../Pages/Dashboard"
import About from "../Pages/About"
import Analytics from "../Pages/Analytics"
import Product from "../Pages/Product"
import Productlist from "../Pages/Productlist"
import "../Css/Admin.css"
import Sidebar from "../Component/Sidebar"

const AdminRoutes = () => {
  return (
    <div className="Admin">
        <Sidebar>
            <Routes>
                <Route path="/" element={<Dashboard/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/analytics" element={<Analytics/>}/>
                <Route path="/product" element={<Product/>}/>
                <Route path="/productlist" element={<Productlist/>}/>
            </Routes>
        </Sidebar>
    </div>
  )
}

export default AdminRoutes