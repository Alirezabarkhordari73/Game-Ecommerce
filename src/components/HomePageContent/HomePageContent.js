import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FreeMode, Pagination, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import Rating from "react-rating";
import { AiOutlineStar, AiFillStar } from "react-icons/ai";
import { GrIntegration } from "react-icons/gr";

import { listProduct } from "../../Redux/Actions/ProductActions";
import image1 from "../../assets/image1.png";
import "../HomePageContent/HomePageContent.css";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { useStateContext } from "../../context/StateContext";
import { addToCart } from "../../Redux/Actions/cartActions";
import data from "../../data";
import { Link } from "react-router-dom";

const HomePageContent = () => {
  const [defineGameType, setDefineGameType] = useState("");

  const { darkMode } = useStateContext();

  const dispatch = useDispatch();

  const productList = useSelector((state) => state.productList);
  const { loading, products, error } = productList;

  console.log(products);

  useEffect(() => {
    dispatch(listProduct(data));
  }, [dispatch]);

  const addToCartHandler = (product) => {
    dispatch(addToCart(product));
  };

  return (
    <div className="HomePageContainer">
      <div className="rainbow-br" />
      <div className={darkMode ? "Xbox-Section" : "Xbox-Section-dark"}>
        <p className="Box-Title">لیست بازی های XBOX-360</p>
        {loading ? (
          <div>Loading...</div>
        ) : (
          <Swiper
            pagination={{ clickable: true }}
            navigation
            className="myswiper"
            freeMode={true}
            slidesPerView={4}
            spaceBetween={20}
            modules={[FreeMode, Pagination, Navigation]}
            breakpoints={{
              0: { slidesPerView: 1, spaceBetween: 10 },
              480: { slidesPerView: 2, spaceBetween: 10 },
              768: { slidesPerView: 3, spaceBetween: 15 },
              1280: { slidesPerView: 4, spaceBetween: 25 },
            }}>
            {products ? (
              products.map((product) => (
                <SwiperSlide key={product._id}>
                  <Link
                    to={`products/${product._id}`}
                    className={darkMode ? "n-link" : "n-link-dark"}>
                    <div
                      className="Cart"
                      onClick={() => setDefineGameType("XBOX-360")}>
                      <img
                        className="Cart-image"
                        src={product.image}
                        alt={product.title}
                      />
                      <div className="Cart-info">
                        <p>خرید بازی</p>
                        <p>{product.title}</p>
                      </div>
                      <div className="Cart-btn">
                        <p>برای XBOX 360</p>
                        <Rating
                          emptySymbol={<AiOutlineStar className="star-icons" />}
                          fullSymbol={
                            <AiFillStar className="full-star-icons" />
                          }
                          initialRating={product.rating}
                          className="myrating"
                        />
                        <button
                          onClick={() => addToCartHandler(product)}
                          className="addtocart-btn">
                          افزودن به سبد خرید
                        </button>
                      </div>
                    </div>
                  </Link>
                </SwiperSlide>
              ))
            ) : (
              <div>Loading...</div>
            )}
          </Swiper>
        )}
      </div>
      <div className="add-container">
        <h1>سوالی داری ؟ مشکلی داری ؟ بلد نیستی چجوری سفارش بدی ؟</h1>
        <GrIntegration className="add-icon" />
        <p style={{ color: "#fff", fontSize: "1.1rem" }}>
          با این شماره تماس بگیر تا همکارامون راهنماییت کنن{" "}
        </p>
        <p style={{ color: "#fff", fontSize: "1.1rem" }}>091389523723</p>
      </div>
      <div className={darkMode ? "PS4-Section" : "PS4-Section-dark"}>
        <p className="Box-Title">لیست بازی های PS4</p>
        {loading ? (
          <div>Loading...</div>
        ) : (
          <Swiper
            pagination={{ clickable: true }}
            navigation
            className="myswiper"
            freeMode={true}
            slidesPerView={4}
            spaceBetween={20}
            modules={[FreeMode, Pagination, Navigation]}
            breakpoints={{
              0: { slidesPerView: 1, spaceBetween: 10 },
              480: { slidesPerView: 2, spaceBetween: 10 },
              768: { slidesPerView: 3, spaceBetween: 15 },
              1280: { slidesPerView: 4, spaceBetween: 25 },
            }}>
            {products ? (
              products.map((product) => (
                <SwiperSlide key={product._id}>
                  <Link
                    to={`products/${product._id}`}
                    className={darkMode ? "n-link" : "n-link-dark"}>
                    <div className="Cart">
                      <img
                        className="Cart-image"
                        src={product.image}
                        alt={product.title}
                      />
                      <div className="Cart-info">
                        <p>خرید بازی</p>
                        <p>{product.title}</p>
                      </div>
                      <div className="Cart-btn">
                        <p>برای XBOX 360</p>
                        <Rating
                          emptySymbol={<AiOutlineStar className="star-icons" />}
                          fullSymbol={
                            <AiFillStar className="full-star-icons" />
                          }
                          initialRating={product.rating}
                          className="myrating"
                        />
                        <button className="addtocart-btn">
                          افزودن به سبد خرید
                        </button>
                      </div>
                    </div>
                  </Link>
                </SwiperSlide>
              ))
            ) : (
              <div>Loading...</div>
            )}
          </Swiper>
        )}
      </div>
      <div className={darkMode ? "PC-Section" : "PC-Section-dark"}>
        <p className="Box-Title">لیست بازی های PS4</p>
        {loading ? (
          <div>Loading...</div>
        ) : (
          <Swiper
            pagination={{ clickable: true }}
            navigation
            className="myswiper"
            freeMode={true}
            slidesPerView={4}
            spaceBetween={20}
            modules={[FreeMode, Pagination, Navigation]}
            breakpoints={{
              0: { slidesPerView: 1, spaceBetween: 10 },
              480: { slidesPerView: 2, spaceBetween: 10 },
              768: { slidesPerView: 3, spaceBetween: 15 },
              1280: { slidesPerView: 4, spaceBetween: 25 },
            }}>
            {products ? (
              products.map((product) => (
                <SwiperSlide key={product._id}>
                  <div className="Cart">
                    <img
                      className="Cart-image"
                      src={product.image}
                      alt={product.title}
                    />
                    <div className="Cart-info">
                      <p>خرید بازی</p>
                      <p>{product.title}</p>
                    </div>
                    <div className="Cart-btn">
                      <p>برای XBOX 360</p>
                      <Rating
                        emptySymbol={<AiOutlineStar className="star-icons" />}
                        fullSymbol={<AiFillStar className="full-star-icons" />}
                        initialRating={product.rating}
                        className="myrating"
                      />
                      <button className="addtocart-btn">
                        افزودن به سبد خرید
                      </button>
                    </div>
                  </div>
                </SwiperSlide>
              ))
            ) : (
              <div>Loading...</div>
            )}
          </Swiper>
        )}
      </div>
      <div className={darkMode ? "qestions-section" : "qestions-section-dark"}>
        <img src={image1} alt="i" />
        <div className="qustion-text-section">
          <p className="text title">سوالات متداول</p>
          <p className="text">
            لطفا قبل از تماس با پشتیبانی سوالات متداول را مطالعه فرمایید !
          </p>
          <p className="text title">چطور میتوانم اعتماد کنم ؟</p>
          <p className="text">
            وب سایت گیم کالا از سال 95 شروع به کار کرده و همچنین دارای نماد
            اعتماد و مجوز بنیاد ملی بازی های رایانه ای می باشد. چطور باید مبلغ
            را پرداخت کنم ؟پرداخت در فروشگاه گیم کالا به صورت آنلاین و از طریق
            درگاه های پرداخت معتبر کشور میباشد. مدت زمان ارسال بسته ها چقدر است
            ؟بسته ها بعد از سفارش در نوبت ارسال قرار می گرند و نهایت یک هفته
            کاری طول میکشد تا بسته به دست خریدار برسد. سفارش داده ام اما بسته ام
            بعد از یک هفته به دستم نرسیده است ؟سفارشات مشتریان بر حسب نوبت ارسال
            می شوند و بعد از آماده سازی تحویل پست می شوند . سپس خریدار باید از
            طریق کد رهگیری بسته خود را از بخش پیگیری سفارش گیم کالا پیگیری
            نماید. کد رهگیری برایم ارسال نشده است ؟کد رهگیری بعد از تحویل به پست
            توسط خود پست برای خریدار پیامک می شود . پول از حسابم کسر شد اما
            سفارش ثبت نشد ؟ این بدلیل مشکلات فنی از طرف درگاه پرداخت بانکی کشور
            می باشد و برای برطرف کردن این مشکل باید با پشتیبانی در تماس باشید.
            بازی که خریده ام کار نمی کند ؟ تمامی دیسک های ارایه شده توسط گیم
            کالا وریفای شده هستند و هیچ مشکلی ندارند در صورت داشتن هرگونه مشکل
            با دیسک با پشتیبانی در تماس باشید.
          </p>
          <p className="text title">چطور میتوانم اعتماد کنم ؟</p>
          <p className="text">
            وب سایت گیم کالا از سال 95 شروع به کار کرده و همچنین دارای نماد
            اعتماد و مجوز بنیاد ملی بازی های رایانه ای می باشد. چطور باید مبلغ
            را پرداخت کنم ؟پرداخت در فروشگاه گیم کالا به صورت آنلاین و از طریق
            درگاه های پرداخت معتبر کشور میباشد. مدت زمان ارسال بسته ها چقدر است
            ؟بسته ها بعد از سفارش در نوبت ارسال قرار می گرند و نهایت یک هفته
            کاری طول میکشد تا بسته به دست خریدار برسد. سفارش داده ام اما بسته ام
            بعد از یک هفته به دستم نرسیده است ؟سفارشات مشتریان بر حسب نوبت ارسال
            می شوند و بعد از آماده سازی تحویل پست می شوند . سپس خریدار باید از
            طریق کد رهگیری بسته خود را از بخش پیگیری سفارش گیم کالا پیگیری
            نماید. کد رهگیری برایم ارسال نشده است ؟کد رهگیری بعد از تحویل به پست
            توسط خود پست برای خریدار پیامک می شود . پول از حسابم کسر شد اما
            سفارش ثبت نشد ؟ این بدلیل مشکلات فنی از طرف درگاه پرداخت بانکی کشور
            می باشد و برای برطرف کردن این مشکل باید با پشتیبانی در تماس باشید.
            بازی که خریده ام کار نمی کند ؟ تمامی دیسک های ارایه شده توسط گیم
            کالا وریفای شده هستند و هیچ مشکلی ندارند در صورت داشتن هرگونه مشکل
            با دیسک با پشتیبانی در تماس باشید.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HomePageContent;
