import React, { useEffect } from "react";
import "../TopBanner/TopBanner.css";
import { useSelector, useDispatch } from "react-redux";

import { Swiper, SwiperSlide } from "swiper/react";
import { listProduct } from "../../Redux/Actions/ProductActions";
import { Navigation, Pagination, A11y, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import data from "../../data";

function Topbanner() {
  const productList = useSelector((state) => state.productList);
  const { loading, products } = productList;
  console.log("productList", products);

  return (
    <div className="topbanner-container">
      <Swiper
        modules={[Navigation, Pagination, A11y, Autoplay]}
        spaceBetween={60}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        slidesPerView={1}
        navigation
        centeredSlides={true}
        pagination={{ clickable: true }}>
        {products ? (
          products.map((product) => (
            <SwiperSlide key={product._id}>
              <div className="Banner">
                <img
                  src={product?.image}
                  alt={product.title}
                  className="banner-image"
                />
                <div className="Banner-Title">{product?.title}</div>
              </div>
            </SwiperSlide>
          ))
        ) : (
          <div>Loading...</div>
        )}
      </Swiper>
    </div>
  );
}

export default Topbanner;
