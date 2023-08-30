import React, { useState } from "react";
import { ablok } from "../../assets/assets";
import Slider from "./Slider";
import { BiArrowBack } from "react-icons/bi";
import { Parallax } from "react-scroll-parallax";
import {
  apartment1,
  apartment2,
  apartment3,
  apartment4,
  apartment5,
  apartment6,
} from "../../assets/assets";
import { Modal } from "../components";

const Apartments = ({ currentBlock, setCurrentBlock, scrollToTop }) => {
  const apartments = [
    {
      id: 1,
      price: 160000,
      bedrooms: 3,
      bath: 2,
      sq2: 74,
      img: apartment1,
    },
    {
      id: 2,
      price: 98000,
      bedrooms: 2,
      bath: 1,
      sq2: 42,
      img: apartment2,
    },
    {
      id: 3,
      price: 114000,
      bedrooms: 3,
      bath: 1,
      sq2: 55,
      img: apartment3,
    },
    {
      id: 4,
      price: 202000,
      bedrooms: 4,
      bath: 2,
      sq2: 84,
      img: apartment4,
    },
    {
      id: 5,
      price: 256000,
      bedrooms: 5,
      bath: 2,
      sq2: 98,
      img: apartment5,
    },
    {
      id: 6,
      price: 55000,
      bedrooms: 1,
      bath: 1,
      sq2: 22,
      img: apartment6,
    },
  ];

  const [showModal, setShowModal] = useState(false);
  const [currentApartment, setCurrentApartment] = useState(0)

  return (
    <div
      id="apartmani"
      className="flex flex-wrap items-center justify-center gap-6 py-16 relative bg-[url(/./apartments-bg.jpg)] bg-cover bg-no-repeat"
    >
      <div className="sticky top-20 w-full h-full">
        <BiArrowBack
          size={48}
          className="absolute top-3 left-3 cursor-pointer transition-all duration-150 hover:text-primary"
          title="Back"
          onClick={() => {
            setTimeout(() => {
              setCurrentBlock(0);
            }, 200);
            scrollToTop();
          }}
        />
      </div>
      {apartments.map((apartment) => (
        <>
          <div
            key={apartment.id}
            className="outer w-11/12 md:w-5/12 2xl:w-3/12 p-[3px] rounded-3xl"
          >
            <div className="bg-fifth overflow-hidden rounded-3xl flex w-full flex-col gap-4">
              <img
                src={apartment.img}
                alt="ablok"
                className="object-cover rounded-t-3xl aspect-[1.33/1]"
              />
              <div className="flex items-center justify-between w-full px-6 my-4">
                <span className="text-2xl text-sixth">{apartment.price}$</span>
                <div className="btn p-[3px] transform hover:scale-[1.02]">
                  <span
                    onClick={() => {
                        setShowModal(true)
                        setCurrentApartment(apartment.id)
                    }}
                    className="bg-fifth w-full h-full rounded-full flex items-center px-6"
                  >
                    View Details
                  </span>
                </div>
              </div>
              <div className="min-h-[50px] flex justify-between px-4 items-center w-full rounded-full p-2">
                <span className="flex justify-center w-2/6">
                  {apartment.bedrooms} bedrooms
                </span>
                <span className="flex justify-center w-2/6 border-x-[1px]">
                  {apartment.bath} bath
                </span>
                <span className="flex justify-center w-2/6">
                  {apartment.sq2} sq<sub>2</sub>{" "}
                </span>
              </div>
            </div>
          </div>
          {/* <Modal
            img={apartment.img}
            price={apartment.price}
            bedrooms={apartment.bedrooms}
            sq2={apartment.sq2}
            currentApartment={currentApartment}
            showModal={showModal}
            setShowModal={setShowModal}
          /> */}
        </>
      ))}
    </div>
  );
};

export default Apartments;
