import React, { useContext } from "react";
import Context from "../../context/Context";
import { kontakt1, kontakt2, kontakt3 } from "../../assets/assets";
import { BsArrowDownShort } from "react-icons/bs";
import languages from "../../languages";

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
    <div className="2xl:mx-48 3xl:mx-80 h-auto grid place-items-center pt-32">
      <div className="flex flex-col xl:flex-row justify-evenly w-full items-center">
        <div
          className="outer p-[2.5px] mx-auto sm:mx-0 rounded-[25px] w-[300px] h-[300px]  overflow-hidden bg-fourth"
          data-aos="fade-up"
          data-aos-delay={100}
        >
          <div className="inner rounded-[23px] bg-fifth h-full w-full flex flex-col items-center p-[15px] justify-center">
            <div className="h-3/6">
              <div
                className="outer mx-auto my-4 p-[3px] rounded-full w-24 h-24"
                data-aos="fade-up"
                data-aos-delay={150}
              >
                <span className="inline-flex items-center justify-center bg-fourth rounded-full p-2 w-full h-full text-sm font-semibold text-gray-700">
                  <img src={kontakt2} alt="icon" />
                </span>
              </div>
            </div>
            <h3 className="text-center text-2xl h-3/6 grid place-items-center font-bold">
              Fides gradnja doo Temišvarska 12, 11000 Beograd
            </h3>
          </div>
        </div>
        <div className="h-3/6 grid place-items-center my-5">
          <div data-aos="fade-up" data-aos-delay="800">
            <a
              href="#mapa"
              className="btn p-[3px] transform hover:scale-[1.02] arrow-down-group"
            >
              <span className="bg-fifth w-full h-full rounded-full flex items-center gap-x-4 px-6 py-2">
                {language === "SRB" ? `Vidi na mapi` : `see on the map`}
                <BsArrowDownShort size={20} className="arrow-down" />
              </span>
            </a>
          </div>
        </div>
      </div>
      <div className="flex justify-between space-y-5 w-full xl:space-x-5 xl:space-y-0 flex-col xl:flex-row">
        {cards.map((card, i) => (
          <a
            href={card.href}
            key={i}
            className="outer p-[2.5px] mx-auto sm:mx-0 rounded-[25px] w-[300px] h-[250px] overflow-hidden bg-fourth"
            data-aos="fade-up"
            data-aos-delay={card.delay}
          >
            <div className="inner rounded-[23px] bg-fifth h-full w-full flex flex-col items-center p-[15px] justify-center">
              <div className="h-3/6">
                <div
                  className="outer mx-auto my-4 p-[3px] rounded-full w-24 h-24"
                  data-aos="fade-up"
                  data-aos-delay={card.delay * 1.5}
                >
                  <span className="inline-flex items-center justify-center bg-fourth rounded-full p-2 w-full h-full text-sm font-semibold text-gray-700">
                    <img src={card.icon} alt="icon" />
                  </span>
                </div>
              </div>
              <h3 className="text-center text-2xl h-3/6 grid place-items-center font-bold">
                {card.text}
              </h3>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Podaci;
