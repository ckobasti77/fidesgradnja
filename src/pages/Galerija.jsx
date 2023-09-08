import React, { useState, useEffect, useRef } from "react";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import { FreeMode } from "swiper";

import {
  gallery1,
  gallery2,
  gallery3,
  gallery4,
  gallery5,
  gallery6,
  gallery7,
  gallery8,
  gallery9,
  gallery10,
  gallery11,
  gallery12,
  gallery13,
  gallery14,
  gallery15,
  gallery16,
  gallery17,
  gallery18,
  gallery19,
  gallery20,
  gallery21,
  gallery22,
  gallery23,
  gallery24,
} from "../assets/assets";

const grubo = [
  gallery1,
  gallery2,
  gallery3,
  gallery4,
  gallery11,
  gallery12,
  gallery13,
  gallery14,
  gallery16,
  gallery17,
  gallery18,
  gallery19,
  gallery20,
  gallery21,
  gallery22,
];

const fasade = [
  gallery5,
  gallery6,
  gallery7,
  gallery8,
  gallery9,
  gallery10,
  gallery15,
  gallery23,
  gallery24,
];


const Galerija = () => {
  const [expandedImage, setExpandedImage] = useState(null);

  const handleImageClick = (image) => {
    setExpandedImage(image);
  };

  const handleCloseClick = () => {
    setExpandedImage(null);
  };

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  }, []);

  return (
    <>
      <div className="py-32 mx-2 2xl:mx-48 3xl:mx-80 ">
        <Swiper
          freeMode={true}
          grabCursor={true}
          modules={[FreeMode]}
          slidesPerView={3.5}
          spaceBetween={30}
          className="mySwiper cursor-grab mb-24"
          breakpoints={{
            1920: {
                slidesPerView: 4.5
            },
            1500: {
                slidesPerView: 3.5
            },
            1024: {
                slidesPerView: 2.5
            },
            768: {
                slidesPerView: 2.5
            },
            320: {
                slidesPerView: 1.5
            }
          }}
        >
          {grubo.map((slika, index) => (
            <SwiperSlide key={index} className="rounded-2xl h-[300px] xl:h-[400px] w-full" onClick={() => handleImageClick(slika)}>
              <img src={slika} alt={index}  className="rounded-2xl h-[300px] xl:h-[400px] object-cover w-full" />
            </SwiperSlide>
          ))}
        </Swiper>
        <Swiper
          freeMode={true}
          grabCursor={true}
          modules={[FreeMode]}
          slidesPerView={3.5}
          spaceBetween={30}
          className="mySwiper cursor-grab my-24"
          breakpoints={{
            1920: {
                slidesPerView: 4.5
            },
            1500: {
                slidesPerView: 3.5
            },
            1024: {
                slidesPerView: 2.5
            },
            768: {
                slidesPerView: 2.5
            },
            320: {
                slidesPerView: 1.5
            }
          }}
        >
          {fasade.map((slika, index) => (
            <SwiperSlide key={index} className="rounded-2xl h-[300px] xl:h-[400px] w-full" onClick={() => handleImageClick(slika)}>
              <img src={slika} alt={index}  className="rounded-2xl h-[300px] xl:h-[400px] object-cover w-full" />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      {expandedImage && (
        <div className="expanded-image-container active" onClick={handleCloseClick}>
          <img src={expandedImage} alt="Expanded" />
        </div>
      )}
    </>
  );
};

export default Galerija;
