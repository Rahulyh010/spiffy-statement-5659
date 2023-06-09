import "../Styles/navbar.css";
import logo from "../Assets/DigiMARTlogo1.png";
import { useState } from "react";
import { useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Box } from "@chakra-ui/react";

const Navbar = () => {
  const [display, setDisplay] = useState("none");
  const [linkdisplay, setLinkDisplay] = useState("none");
  const hamRef = useRef(null);
  const loginRef = useRef(null);
  const navigate = useNavigate();

  const toggleHam = () => {
    display === "none" ? setDisplay("block") : setDisplay("none");
  };

  const toggleLinks = () => {
    linkdisplay === "block" ? setLinkDisplay("none") : setLinkDisplay("block");
  };

  const redirectToHome = () => {
    navigate("/");
  };

  return (
    <Box className="main-nav-div">
      {/* first part */}
      <div className="navbar">
        <i id="ham-icon" className="icons fa fa-bars" onClick={toggleHam}></i>
        <img
          id="logo"
          src={logo}
          alt="web-logo"
          width="170"
          onClick={redirectToHome}
        />
        <div className="midpart">
          <Link to="/search">
            <i className="icons fa fa-search"></i>
            <input type="text" placeholder="Search for A Product/Service" />
            <i className="icons fa fa-microphone"></i>
          </Link>
        </div>
        <i className="icons fas fa-tag"></i>
        <i className="icons fa fa-store"></i>
        <i className="icons fa fa-circle-question"></i>
        <Link to="/cart">
          <i className="icons fas fa-cart-shopping"></i>
        </Link>

        <i className="icons fa-solid fa-user" onClick={toggleLinks}></i>
        <div id="links-logins" ref={loginRef} style={{ display: linkdisplay }}>
          <Link to="/login">User Login &#62;</Link>
          <br />
          <Link to="/adminLogin">Admin Login &#62;</Link>
        </div>

        <span className="min-screen">
          <Link to="/search">
            <i className="icons fa fa-search"></i>
          </Link>
          <Link to="/cart">
            <i className="icons fas fa-cart-shopping"></i>
          </Link>
          <Link to="/login">
            <i className="icons fa-solid fa-user"></i>
          </Link>
        </span>
      </div>
      {/* Second Part */}
      <div className="nav-items">
        <Link to="/food" className="nav-item-links">
          Food & Beverages
        </Link>
        <li className="nav-item-links">Apparel & Garments</li>
        <li className="nav-item-links">Hospital & Diagnostics</li>
        <li className="nav-item-links">Industrial Plants & Machinery</li>
        <li className="nav-item-links">Electronics & Electrical</li>
        <li className="nav-item-links">Chemicals, Dyes & Solvents</li>
        <li className="nav-item-links">View All Categories &#62;</li>
      </div>

      {/* Part 3 Ham menu */}
      <div className="ham-menu" ref={hamRef} style={{ display: display }}>
        <span id="top-part">
          <p>Welcome !</p>
          <i className="fa-solid fa-xmark" onClick={toggleHam}></i>
        </span>
        <div id="part-2-top">
          <Link to="/">
            <i className="fa fa-house"></i> Home
          </Link>
          <p style={{ fontWeight: "500", margin: "5px 0" }}>BUY</p>
        </div>
        <div className="ham-items">
          <Link to="/food">
            <li className="nav-item-links">Food & Beverages</li>
          </Link>

          <li className="nav-item-links">Apparel & Garments</li>
          <li className="nav-item-links">Hospital & Diagnostics</li>
          <li className="nav-item-links">Industrial Plants & Machinery</li>
          <li className="nav-item-links">Electronics & Electrical</li>
          <li className="nav-item-links">Chemicals, Dyes & Solvents</li>
          <li className="nav-item-links">View All Categories</li>
        </div>
        <p id="part-3-mid" style={{ fontWeight: "500", margin: "5px 0" }}>
          MORE
        </p>
        <div className="ham-items">
          <li className="nav-item-links">
            <i className="fa fa-language"></i> Change Language / भाषा चुनें
          </li>
          <li className="nav-item-links">&#9432; About IndiaMART</li>
          <li className="nav-item-links" style={{ fontWeight: "500" }}>
            <i className="fa-solid fa-arrow-trend-up"></i> Enjoy 10X faster
            experience
          </li>
          <li className="nav-item-links" style={{ fontWeight: "500" }}>
            <i className="fa fa-mobile"></i> Get the Lighter App
          </li>
          <li className="nav-item-links">
            <i className="fa fa-phone"></i> Help & Support
          </li>
          <li className="nav-item-links" style={{ fontWeight: "500" }}>
            <i className="fa fa-box"></i> More Apps
          </li>
        </div>
      </div>
    </Box>
  );
};

export default Navbar;
