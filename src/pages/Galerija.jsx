import React, { useState, useEffect } from "react";
import Spline from "@splinetool/react-spline";

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

const images = [
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
    <div className="grid grid-gallery mt-32 mb-16 2xl:mx-48 3xl:mx-80 ">
    {images.map((image, index) => {
      const screenWidth = window.innerWidth;
      let columns;
      let largeIndexes;

      if (screenWidth <= 768) {
        columns = 2;
        largeIndexes = [0, 1];
      } else if (screenWidth <= 1024) {
        columns = 3;
        largeIndexes = [0, 2];
      } else {
        columns = 6;
        largeIndexes = [0, 3];
      }

      const isEvenRow = Math.floor(index / columns) % 2 === 0;
      const isLarge = isEvenRow
        ? largeIndexes.includes(index % columns)
        : largeIndexes.includes((index + 1) % columns);

      if (isLarge) {
        return (
          <div data-aos="fade-up" data-aos-delay={index * 50} key={index} className="outer image-container rounded-xl" onClick={() => handleImageClick(image)}>
            <img src={image} alt={`Image ${index}`} className="transition-transform duration-300 ease-in-out rounded-xl" />
            <div className="absolute inset-0 bg-black/20"></div>
          </div>
        );
      }

      if (index % 2 === 0) {
        return (
          <div
            key={index}
            className="w-full h-full overflow-hidden relative bg-fourth flex flex-col gap-[10px]"
          >
            <div data-aos="fade-up" data-aos-delay={index * 50} className="image-container outer overflow-hidden h-full rounded-xl" onClick={() => handleImageClick(image)}>
              <img src={image} alt={`Image ${index}`} className="transition-transform duration-300 ease-in-out rounded-xl" />
              <div className="absolute inset-0 bg-black/20"></div>
            </div>
            <div data-aos="fade-up" data-aos-delay={index * 50} className="image-container outer overflow-hidden h-full rounded-xl" onClick={() => handleImageClick(images[index + 1])}>
              <img src={images[index + 1]} alt={`Image ${index + 1}`} className="transition-transform duration-300 ease-in-out rounded-xl" />
              <div className="absolute inset-0 bg-black/20"></div>
            </div>
          </div>
        );
      }

      return null;
    })}
    {expandedImage && (
      <div className="expanded-image-container active" onClick={handleCloseClick}>
        <img src={expandedImage} alt="Expanded" />
      </div>
    )}
  </div>
    // <div className="relative h-screen w-screen py-24 flex items-center justify-between">
    //     <div class="lds-default mx-auto w-screen h-screen bg-fourth absolute inset-0">
    //       <div></div>
    //       <div></div>
    //       <div></div>
    //       <div></div>
    //       <div></div>
    //       <div></div>
    //       <div></div>
    //       <div></div>
    //       <div></div>
    //       <div></div>
    //       <div></div>
    //       <div></div>
    //     </div>
    //     <>
    //       <Spline
    //       className="absolute inset-0"
    //         scene="https://prod.spline.design/JTidAhnLZzWVkORC/scene.splinecode"
    //       />
    //     </>
    // </div>
  );
};

export default Galerija;
