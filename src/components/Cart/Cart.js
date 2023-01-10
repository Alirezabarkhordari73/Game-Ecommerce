import React from "react";
import { AiOutlineCloseCircle, AiOutlineClose } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";

import "../Cart/Cart.css";
import { useStateContext } from "../../context/StateContext";
import {
  removeFromCart,
  increaseQty,
  decreaseQty,
} from "../../Redux/Actions/cartActions";

const Cart = ({ match }) => {
  const { setActiveCart, darkMode } = useStateContext();
  const dispatch = useDispatch();

  const cartItems = useSelector((state) => state.cart);
  const { cart } = cartItems;

  const cartTotalPrice = useSelector((state) => state.cart.totalPrice);

  const removeFromCartHandler = (product) => {
    dispatch(removeFromCart(product));
  };

  const increaseQuantityHandler = (id) => {
    dispatch(increaseQty(id));
  };

  const decreaseQuantityHandler = (id) => {
    dispatch(decreaseQty(id));
  };

  return (
    <div className="cart-container">
      <div className={darkMode ? "cart" : "cart-dark"}>
        <div className={darkMode ? "cart-close-sec" : "cart-close-sec-dark"}>
          <h3>سبد خرید</h3>
          <AiOutlineCloseCircle
            className={darkMode ? "close-icon" : "close-icon-dark"}
            onClick={() => setActiveCart(false)}
          />
        </div>
        <div className="products-section">
          {cart.map((product) => (
            <div
              className={darkMode ? "product-item" : "product-item-dark"}
              key={product._id}>
              <img
                src={product.image}
                alt={product.title}
                className="cart-product-image"
              />
              <div
                className={
                  darkMode ? "cart-product-name" : "cart-product-name-dark"
                }>
                <p>{`خرید بازی ${product.title}`}</p>
                <p>{product.price} تومان</p>
              </div>
              <div
                className={
                  darkMode ? "cart-functionalities" : "cart-functionalities"
                }>
                <button
                  className="remove-product-btn"
                  onClick={() => removeFromCartHandler(product)}>
                  <AiOutlineClose
                    onClick={() => removeFromCartHandler(product)}
                    className={
                      darkMode
                        ? "remove-product-icon"
                        : "remove-product-icon-dark"
                    }
                  />
                </button>
                <div className="qty-box">
                  <button
                    className={darkMode ? "qty-btn" : "qty-btn-dark"}
                    onClick={() => increaseQuantityHandler(product)}>
                    +
                  </button>
                  <div className={darkMode ? "qty-show" : "qty-show-dark"}>
                    {product.qty}
                  </div>
                  <button
                    className={darkMode ? "qty-btn" : "qty-btn-dark"}
                    onClick={() => decreaseQuantityHandler(product)}>
                    -
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div
          className={
            darkMode ? "shopping-cart-footer" : "shopping-cart-footer-dark"
          }>
          <div
            className={
              darkMode
                ? "footer-total-price-sec"
                : "footer-total-price-sec-dark"
            }>
            <h3>مجموع قیمت</h3>
            <span className="total-price">{cartTotalPrice} تومان</span>
          </div>
          <div className="footer-total-btns">
            <button className="btn-1">مشاهده سبد خرید</button>
            <button className="btn-2">تسویه حساب</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
