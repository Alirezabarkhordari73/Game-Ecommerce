import React, { useState } from "react";
import { Link } from "react-router-dom";
import SearchBox from "../Searchbox/SearchBox";
import { FaBars } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import "../Navlink/Navlink.css";

const Navlink = ({ darkmode, searchbox }) => {
  const [menuClicked, setMenuClicked] = useState(false);

  const toggleMenuHandler = () => {
    setMenuClicked(!menuClicked);
  };
  return (
    <React.Fragment>
      {searchbox ? (
        <nav className="navLinks-container">
          <FaBars
            className={darkmode ? `menu-bars-icon` : `menu-bars-icon-dark`}
            onClick={toggleMenuHandler}
          />
          <div className={menuClicked ? "navLinks active" : "navLinks"}>
            <AiOutlineClose
              className="menu-close-icon"
              onClick={toggleMenuHandler}
            />
            <Link to="/" className={darkmode ? "nav-item" : "nav-item-dark"}>
              صفحه اصلی
            </Link>
            <Link to="/" className={darkmode ? "nav-item" : "nav-item-dark"}>
              خرید بازی XBOX 360
            </Link>

            <Link to="/" className={darkmode ? "nav-item" : "nav-item-dark"}>
              خرید بازی کامپیوتر
            </Link>

            <Link to="/" className={darkmode ? "nav-item" : "nav-item-dark"}>
              خرید بازی PS4
            </Link>

            <Link to="/" className={darkmode ? "nav-item" : "nav-item-dark"}>
              آموزش ثبت سفارش و خرید
            </Link>

            <Link
              to="/Orders"
              className={darkmode ? "nav-item" : "nav-item-dark"}>
              پیگیری سفارش
            </Link>

            <Link
              to="/Contact"
              className={darkmode ? "nav-item" : "nav-item-dark"}>
              تماس با ما
            </Link>
          </div>
        </nav>
      ) : (
        <SearchBox />
      )}
    </React.Fragment>
  );
};

export default Navlink;
