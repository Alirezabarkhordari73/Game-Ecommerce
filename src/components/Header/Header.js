import React, { useState } from "react";
import { useSelector } from "react-redux";
import { FaShoppingCart } from "react-icons/fa";
import { AiOutlineInstagram, AiOutlineSearch } from "react-icons/ai";
import { BsMoonStars } from "react-icons/bs";
import { FiSun } from "react-icons/fi";

import Navlink from "../Navlink/Navlink";
import Logo from "../../assets/Logo.png";
import { useStateContext } from "../../context/StateContext";
import "../Header/Header.css";

function Header() {
  const [showSearchbox, setShowSearchbox] = useState(true);
  const [activeLightTheme, setActiveLightTheme] = useState(false);
  const [activeDarkTheme, setActiveDarkTheme] = useState(false);
  const [themeSelectorModal, setThemeSelectorModal] = useState(false);

  const { setActiveCart, darkMode, dispatch } = useStateContext();

  const cartTotalQty = useSelector((state) => state.cart.totalQuantity);

  const toggleThemeHancler = (btnType) => {
    if (btnType === "LIGHTMODE") {
      dispatch({ type: "LIGHTMODE" });
      localStorage.setItem("darkmode", "ON");
    } else if (btnType === "DARKMODE") {
      dispatch({ type: "DARKMODE" });
      localStorage.setItem("darkmode", "OFF");
    }
    setThemeSelectorModal(false);
  };

  const showModalHandler = () => {
    setThemeSelectorModal(!themeSelectorModal);
  };

  return (
    <React.Fragment>
      <div className={darkMode ? "header-container" : "header-container-dark"}>
        <div className="logo-navlink-section">
          <div className="logo">
            <img src={Logo} className="Logo-image" alt="Logo" />
          </div>
          <Navlink darkmode={darkMode} searchbox={showSearchbox} />
        </div>

        <div className="shopping-Section">
          {darkMode ? (
            <FiSun
              className={darkMode ? "Header-icon" : "Header-icon-dark"}
              onClick={showModalHandler}
            />
          ) : (
            <BsMoonStars
              className={darkMode ? "Header-icon" : "Header-icon-dark"}
              onClick={showModalHandler}
            />
          )}
          {themeSelectorModal ? (
            <button className={darkMode ? "ThemeModal" : "ThemeModal-dark"}>
              <div
                className={activeLightTheme ? "Sun active" : "Sun"}
                onClick={() => toggleThemeHancler("LIGHTMODE")}>
                <FiSun
                  className={
                    darkMode ? "ThemeModal-icon" : "ThemeModal-icon-dark"
                  }
                />
                <span>Light Theme</span>
              </div>
              <div
                className={activeDarkTheme ? "Moon active" : "Moon"}
                onClick={() => toggleThemeHancler("DARKMODE")}>
                <BsMoonStars
                  className={
                    darkMode ? "ThemeModal-icon" : "ThemeModal-icon-dark"
                  }
                />
                <span>Dark Theme</span>
              </div>
            </button>
          ) : (
            ""
          )}
          <AiOutlineSearch
            className={darkMode ? "Header-icon" : "Header-icon-dark"}
            onClick={() => setShowSearchbox(!showSearchbox)}
          />
          <AiOutlineInstagram
            className={darkMode ? "Header-icon" : "Header-icon-dark"}
          />

          <button
            type="button"
            className="cart-icon"
            onClick={() => setActiveCart(true)}>
            <FaShoppingCart
              className={darkMode ? "Header-icon" : "Header-icon-dark"}
            />
            <span className="Shopping-Badge">{cartTotalQty}</span>
          </button>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Header;
