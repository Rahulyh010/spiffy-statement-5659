import React, { useState } from 'react'
import {
    FaBars,
    FaRegChartBar,
    FaShoppingBag,
    FaTh, FaThList, FaUserAlt,
}from "react-icons/fa";
import { Link, NavLink } from 'react-router-dom';
import styles from "../Css/sidebar.module.css";
import logo from "../../Assets/DigiMARTlogo1.png";

const Sidebar = ({children}) => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = ()=> setIsOpen(!isOpen);
    const menuItem=[
        {
            path:"/admin",
            name:"Product List",
            icon:<FaThList/>
        },
        {
            path:"/adminAddProduct",
            name:"Add Product",
            icon:<FaTh/>
        },
        {
            path:"/adminAbout",
            name:"About",
            icon:<FaUserAlt/>
        }
    ]
  return (
    <div className={styles.container}>
        <div style={{width: isOpen ? "230px" : "50px"}} className={styles.sidebar}>
            <div className={styles.top_section}>
                <Link to={"/"}><img src={logo} style={{display: isOpen ? "block" : "none", width:"100%"}} className={styles.logo}/></Link>
                <div style={{marginLeft: isOpen ? "75px" : "0px"}} className={styles.bars}>
                    <FaBars onClick={toggle}/>
                </div>
            </div>
            {
                menuItem.map((item, index)=>(
                    <NavLink to={item.path} key={index} className={styles.link} activeclassname="active">
                        <div className={styles.icon}>{item.icon}</div>
                        <div style={{display: isOpen ? "block" : "none"}} className={styles.link_text}>{item.name}</div>
                    </NavLink>
                ))
            }
        </div>
    </div>
  );
};

export default Sidebar;