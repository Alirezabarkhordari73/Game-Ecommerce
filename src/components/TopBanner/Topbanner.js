import React from "react";
import "../TopBanner/TopBanner.css";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

function Topbanner({ products }) {
  console.log("topbanner", products);
  return (
    <div className="topbanner-container">
      <Swiper
        modules={[Navigation, Pagination, A11y, Autoplay]}
        spaceBetween={0}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        slidesPerView={1}
        navigation
        centeredSlides={true}
        pagination={{ clickable: true }}
        onSwiper={(swiper) => console.log(swiper)}>
        {products.map((product) => (
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
        ))}
      </Swiper>
    </div>
  );
}

export default Topbanner;
