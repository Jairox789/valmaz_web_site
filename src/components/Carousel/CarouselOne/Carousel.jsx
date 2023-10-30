import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "./Carousel.css";
import "swiper/css";
import { Card } from "../Card/Card";

export const Carousel = ({ imgs }) => {
  return (
    <div className="carousel_one">
      <div className="container">
        <div className="swiperContainer">
          <Swiper
            modules={[Pagination, Autoplay]}
            autoplay={{
              delay: 300000,
              disableOnInteraction: false,
            }}
            pagination={{
              el: ".pagination",
              clickable: true,
            }}
            slidesPerView={1}
            breakpoints={{
              "@0.00": {
                slidesPerView: 1,
                spaceBetween: 25,
              },
              "@0.50": {
                slidesPerView: 1,
                spaceBetween: 25,
              },
              "@1.00": {
                slidesPerView: 1,
                spaceBetween: 25,
              },
              "@1.25": {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              "@1.50": {
                slidesPerView: 1,
                spaceBetween: 30,
              },
              "@1.75": {
                slidesPerView: 1,
                spaceBetween: 20,
              },
            }}
          >
            {imgs.map((img, index) => (
              <SwiperSlide key={index}>
                <Card img={img.url} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="pagination" />
      </div>
    </div>
  );
};
