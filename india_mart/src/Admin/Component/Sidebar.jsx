import React, { useState } from 'react'
import {
    FaBars,
    FaRegChartBar,
    FaShoppingBag,
    FaTh, FaThList, FaUserAlt,
}from "react-icons/fa";
import { NavLink } from 'react-router-dom';

const Sidebar = ({children}) => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = ()=> setIsOpen(!isOpen);
    const menuItem=[
        {
            path:"/admin",
            name:"Dashboard",
            icon:<FaTh/>
        },
        {
            path:"/adminAnalytics",
            name:"Analytics",
            icon:<FaRegChartBar/>
        },
        {
            path:"/adminProductlist",
            name:"Product List",
            icon:<FaThList/>
        },
        {
            path:"/adminAbout",
            name:"About",
            icon:<FaUserAlt/>
        }
    ]
  return (
    <div className="container">
        <div style={{width: isOpen ? "230px" : "50px"}} className='sidebar'>
            <div className='top_section'>
                <h1 style={{display: isOpen ? "block" : "none"}} className='logo'>Logo</h1>
                <div style={{marginLeft: isOpen ? "100px" : "0px"}} className='bars'>
                    <FaBars onClick={toggle}/>
                </div>
            </div>
            {
                menuItem.map((item, index)=>(
                    <NavLink to={item.path} key={index} className="link" activeclassname="active">
                        <div className='icon'>{item.icon}</div>
                        <div style={{display: isOpen ? "block" : "none"}} className='link_text'>{item.name}</div>
                    </NavLink>
                ))
            }
        </div>
        <main>{children}</main>
    </div>
  );
};

export default Sidebar;