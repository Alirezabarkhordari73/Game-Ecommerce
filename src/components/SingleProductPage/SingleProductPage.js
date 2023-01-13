import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import Rating from "react-rating";
import { AiOutlineStar, AiFillStar } from "react-icons/ai";

import "./SingleProductPage.css";
import { ProductDetail } from "../../Redux/Actions/ProductActions";
import { useStateContext } from "../../context/StateContext";

const SingleProductPage = () => {
  const dispatch = useDispatch();

  const { darkMode } = useStateContext();

  const productDetail = useSelector((state) => state.productDetail);

  // const { loading, products: productdetail, error } = productDetail;
  const { products, loading } = productDetail;
  console.log("sproducts", products[0]);

  const reqSystem = products[0]?.requierdsystem;
  const sugestedsystem = products[0]?.sugestedsystem;
  // console.log(sugestedsystem);

  const { id } = useParams();
  // console.log(id);

  useEffect(() => {
    dispatch(ProductDetail(id));
    // dispatch(listProduct());
  }, [dispatch, id]);

  return (
    <div className="SingleProductContainer">
      {loading && <div>Loading ...</div>}
      {products[0] && (
        <div className="product-info-section">
          <div className="image-box">
            <img
              src={products[0]?.image}
              alt={products[0]?.title}
              className="product-image"
            />
          </div>
          <div className={darkMode ? "product-info" : "product-info-dark"}>
            <h3>{`خرید بازی ${products[0]?.title} برای PC`}</h3>
            <div className="rate">
              <Rating
                emptySymbol={<AiOutlineStar className="star-icons" />}
                fullSymbol={<AiFillStar className="full-star-icons" />}
                initialRating={products[0]?.rating}
                className="myrating"
              />
              <p className="useridea">{"(دیدگاه کاربر)"}</p>
            </div>
            <p className="price">{`${products[0]?.price} تومان`}</p>
            <p className="description">{products[0]?.description}</p>
          </div>
        </div>
      )}
      {products[0] && (
        <div className={darkMode ? "detail-section" : "detail-section-dark"}>
          <nav className="detail-nav-container">
            <ul className="detail-nav-list">
              <li className="nav-detail-item">توضیحات</li>
              <li className="nav-detail-item">نظرات</li>
            </ul>
          </nav>
          <div className="underline" />
          <div className="box" />
          <div className="description-detail">
            {loading && "Loading ..."}
            <div className="detail-content">
              <h1>خرید بازی {products[0]?.title}</h1>
              <img
                src={products[0]?.image}
                alt={products[0]?.title}
                className="product-detail-image"
              />
              <p>{products[0]?.description}</p>
            </div>
          </div>
          <div
            className={
              darkMode ? "system-requirments" : "system-requirments-dark"
            }>
            <h3>حداقل سیستم مورد نیاز :</h3>
            {loading && "Loading ..."}
            {reqSystem &&
              Object.keys(reqSystem).map((key, index) => {
                return (
                  <div key={index}>
                    <p className="req-text">
                      {key}: {reqSystem[key]}
                    </p>
                  </div>
                );
              })}
          </div>
          <div
            className={
              darkMode ? "system-requirments" : "system-requirments-dark"
            }>
            <h3>سیستم پیشنهادی :</h3>
            {loading && "Loading ..."}
            {sugestedsystem &&
              Object.keys(sugestedsystem).map((key, index) => {
                return (
                  <div key={index}>
                    <p className="req-text">
                      {key}: {sugestedsystem[key]}
                    </p>
                  </div>
                );
              })}
          </div>
        </div>
      )}
    </div>
  );
};

export default SingleProductPage;
