import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";
import "swiper/css/bundle";
import "swiper";

import {
  vozdoveKapije,
  vozdoveKapije2,
  vozdoveKapije3,
  sunnyville,
  sunnyville2,
  sunnyville3,
  noviDorcol,
  noviDorcol2,
  noviDorcol3,
  ablok,
  ablok2,
  ablok3,
} from "../../assets/assets";
import { Parallax } from "react-scroll-parallax";

const Slider = ({ pictures }) => {
  let slides = [
    { id: 1, path: `${pictures[0]}`, alt: "alt1" },
    { id: 2, path: `${pictures[1]}`, alt: "alt2" },
    { id: 3, path: `${pictures[2]}`, alt: "alt3" },
  ];

  return (
    <Swiper
      pagination={{
        dynamicBullets: true,
        clickable: true,
      }}
      modules={[Navigation]}
      navigation={true}
      className="mySwiper h-3/6 w-full my-auto rounded-3xl"
    >
      {slides.map((slide) => {
        return (
          <SwiperSlide
            key={slide.id}
            className="w-full h-full swiper-slide my-auto"
          >
            <img
              src={slide.path}
              alt={slide.alt}
              className="object-fill h-full w-full"
            />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default Slider;
