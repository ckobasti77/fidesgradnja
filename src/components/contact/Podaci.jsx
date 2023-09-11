import React, { useContext } from "react";
import Context from "../../context/Context";
import {
  kontakt2,
  kontakt3,
  kontakt4,
  kontakt5,
} from "../../assets/assets";

const cards = [
  {
    icon: kontakt3,
    text: "011/369-50-70",
    href: "tel:+381 11 36 95 070",
    delay: 200,
  },
  {
    icon: kontakt3,
    text: "011/369-50-71",
    href: "tel:+381 11 36 95 071",
    delay: 300,
  },
  {
    icon: kontakt3,
    text: "011/406-84-32",
    href: "tel:+381 11 40 68 432",
    delay: 400,
  },
];

const Podaci = () => {
  const { language } = useContext(Context);

  return (
    <div className="2xl:mx-48 3xl:mx-80 h-auto grid place-items-center pt-32 text-third">
      <div className="flex justify-between space-y-5 w-full xl:space-x-5 xl:space-y-0 flex-col xl:flex-row my-5 xl:my-12">
        <div
          className="outer p-[2.5px] mx-auto sm:mx-0 rounded-[25px] w-[300px] h-[300px] overflow-hidden bg-fourth"
          data-aos="fade-up"
          data-aos-delay={50}
        >
          <div className="inner rounded-[23px] bg-fifth h-full w-full flex flex-col items-center p-[15px] justify-center">
            <div className="h-3/6">
              <div className="outer mx-auto my-4 p-[3px] rounded-full w-24 h-24">
                <span className="inline-flex items-center justify-center bg-fourth rounded-full p-5 w-full h-full text-sm font-semibold text-gray-700">
                  <img src={kontakt3} alt="icon" />
                </span>
              </div>
            </div>
            <a
              className="text-center text-2xl h-3/6 flex gap-x-3 font-bold "
              href="tel:+381 11 36 95 070"
            >
              <p>011/369-50-70</p>
              <span>
                <img src={kontakt5} alt="call" className="inline" />
              </span>
            </a>
            <a
              className="text-center text-2xl h-3/6 flex gap-x-3 font-bold "
              href="tel:+381 11 36 95 071"
            >
              <p>011/369-50-71</p>
              <span>
                <img src={kontakt5} alt="call" className="inline" />
              </span>
            </a>
            <a
              className="text-center text-2xl h-3/6 flex gap-x-3 font-bold "
              href="tel:+381 11 40 68 432"
            >
              <p>011/406-84-32</p>
              <span>
                <img src={kontakt5} alt="call" className="inline" />
              </span>
            </a>
          </div>
        </div>
        <a
          href="#mapa"
          className="outer p-[2.5px] mx-auto sm:mx-0 rounded-[25px] w-[300px] h-[300px]  overflow-hidden bg-fourth"
          data-aos="fade-up"
          data-aos-delay={100}
        >
          <div className="inner rounded-[23px] bg-fifth h-full w-full flex flex-col items-center p-[15px] justify-center">
            <div className="h-3/6">
              <div
                className="outer mx-auto my-4 p-[3px] rounded-full w-24 h-24"
              >
                <span className="inline-flex items-center justify-center bg-fourth rounded-full p-5 w-full h-full text-sm font-semibold text-gray-700">
                  <img src={kontakt2} alt="icon" />
                </span>
              </div>
            </div>
            <h3 className="text-center text-2xl h-3/6 grid place-items-center font-bold">
              Fides gradnja doo Temišvarska 12, 11000 Beograd
            </h3>
          </div>
        </a>
        <a
          href="mailto:office@fides.rs"
          className="outer p-[2.5px] mx-auto sm:mx-0 rounded-[25px] w-[300px] h-[300px]  overflow-hidden bg-fourth"
          data-aos="fade-up"
          data-aos-delay={150}
        >
          <div className="inner rounded-[23px] bg-fifth h-full w-full flex flex-col items-center p-[15px] justify-center">
            <div className="h-3/6">
              <div
                className="outer mx-auto my-4 p-[3px] rounded-full w-24 h-24"
              >
                <span className="inline-flex items-center justify-center bg-fourth rounded-full p-5 w-full h-full text-sm font-semibold text-gray-700">
                  <img src={kontakt4} alt="icon" />
                </span>
              </div>
            </div>
            <h3 className="text-center text-2xl h-3/6 grid place-items-center font-bold">
              office@fides.rs
            </h3>
          </div>
        </a>
      </div>
    </div>
  );
};

export default Podaci;
