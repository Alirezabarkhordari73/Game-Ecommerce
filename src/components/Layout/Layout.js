import React from "react";

import Cart from "../Cart/Cart";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import "../Layout/Layout.css";
import { useStateContext } from "../../context/StateContext";

const Layout = ({ children }) => {
  const { state, dispatch, darkMode, activeCart } = useStateContext();

  return (
    <div className={darkMode ? "Layout-container" : "Layout-container-dark"}>
      {activeCart === false ? null : <Cart />}
      <Header state={state} dispatch={dispatch} />
      <main className={darkMode ? "Layout-content" : "Layout-content-dark"}>
        {children}
      </main>
      <Footer state={state} />
    </div>
  );
};

export default Layout;
