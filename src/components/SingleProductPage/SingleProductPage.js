import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import Rating from "react-rating";
import { AiOutlineStar, AiFillStar } from "react-icons/ai";

import "./SingleProductPage.css";
import { ProductDetail, listProduct } from "../../Redux/Actions/ProductActions";

const SingleProductPage = () => {
  const dispatch = useDispatch();

  const productDetail = useSelector((state) => state.productDetail);
  const { loading, products: productdetail, error } = productDetail;

  const reqSystem = productdetail?.requierdsystem;
  const sugestedsystem = productdetail?.sugestedsystem;
  console.log(sugestedsystem);

  const productList = useSelector((state) => state.productList);
  const { products: productslist } = productList;

  const { id } = useParams();

  useEffect(() => {
    dispatch(ProductDetail(id));
    dispatch(listProduct());
  }, [dispatch, id]);

  return (
    <div className="SingleProductContainer">
      {loading && <div>Loading ...</div>}
      {!loading && (
        <div className="product-info-section">
          <div className="image-box">
            <img
              src={productdetail?.image}
              alt={productdetail?.title}
              className="product-image"
            />
          </div>
          <div className="product-info">
            <h3>{`خرید بازی ${productdetail?.title} برای PC`}</h3>
            <div className="rate">
              <Rating
                emptySymbol={<AiOutlineStar className="star-icons" />}
                fullSymbol={<AiFillStar className="full-star-icons" />}
                initialRating={productdetail?.rating}
                className="myrating"
              />
              <p className="useridea">{"(دیدگاه کاربر)"}</p>
            </div>
            <p className="price">{`${productdetail?.price} تومان`}</p>
            <p className="description">{productdetail?.description}</p>
            <div className="q-btns">
              <button className="add-minus-btn">+</button>
              <div className="quantity">0</div>
              <button className="add-minus-btn">-</button>
              <button className="add-to-cart-btn">افزودن به سبد خرید</button>
            </div>
          </div>
        </div>
      )}
      <div className="detail-section">
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
            <h1>خرید بازی {productdetail?.title}</h1>
            <img
              src={productdetail?.image}
              alt={productdetail?.title}
              className="product-detail-image"
            />
            <p>{productdetail?.description}</p>
          </div>
        </div>
        <div className="system-requirments">
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
        <div className="system-requirments">
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
    </div>
  );
};

export default SingleProductPage;
