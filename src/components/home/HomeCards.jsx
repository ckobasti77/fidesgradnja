import React, { useContext } from "react";
import Context from "../../context/Context";

import { bigben, house, partnership } from "../../assets/assets";
import languages from "../../languages";


const HomeCards = () => {
  const { language } = useContext(Context);
  const cards = [
    {
      icon: house,
      title: `${
        language === "SRB"
          ? `${languages.pocetna.firstSection.card2.headline}`
          : `${languages.home.firstSection.card2.headline}`
      }`,
      text: `${
        language === "SRB"
          ? `${languages.pocetna.firstSection.card2.text}`
          : `${languages.home.firstSection.card2.text}`
      }`,
      delay: 200,
    },
    {
      icon: partnership,
      title: `${
        language === "SRB"
          ? `${languages.pocetna.firstSection.card3.headline}`
          : `${languages.home.firstSection.card3.headline}`
      }`,
      text: `${
        language === "SRB"
          ? `${languages.pocetna.firstSection.card3.text}`
          : `${languages.home.firstSection.card3.text}`
      }`,
      delay: 300,
    },
    {
      icon: bigben,
      title: `${
        language === "SRB"
          ? `${languages.pocetna.firstSection.card4.headline}`
          : `${languages.home.firstSection.card4.headline}`
      }`,
      text: `${
        language === "SRB"
          ? `${languages.pocetna.firstSection.card4.text}`
          : `${languages.home.firstSection.card4.text}`
      }`,
      delay: 400,
    },
  ];
  return (
    <>
      {/* <Spline className="absolute inset-0 z-10" scene="https://prod.spline.design/gwYwjpkchtvhNo9v/scene.splinecode" /> */}
      <div
        id="homecards"
        className="2xl:mx-48 3xl:mx-80 flex space-y-12 2xl:space-y-0 z-20 flex-wrap justify-between min-h-screen items-center"
      >
        <h3 className="text-3xl text-center py-24 text-white tracking-wider">
          {language === "SRB"
                ? `${languages.pocetna.firstSection.heading}`
                : `${languages.home.firstSection.heading}`}
        </h3>
        {cards.map((card, index) => (
          <div
            key={index}
            className="outer p-[2.5px] mx-auto sm:mx-0 h-[400px] rounded-[25px] w-[90%] md:w-[45%] 2xl:w-[30%] overflow-hidden bg-fourth"
            data-aos="fade-up"
            data-aos-delay={card.delay}
          >
            <div className="inner rounded-[23px] bg-fifth h-full w-full flex flex-col items-start justify-between">
              <div
                className="outer mx-auto my-4 p-[3px] rounded-full w-24 h-24"
                data-aos="fade-up"
                data-aos-delay={card.delay * 1.5}
              >
                <span className="inline-flex items-center justify-center bg-fourth rounded-full p-2 w-full h-full text-sm font-semibold text-gray-700">
                  <img src={card.icon} alt="icon" />
                </span>
              </div>
              <div
                className="font-bold text-xl mb-2 text-center mx-auto"
                data-aos="fade-up"
                data-aos-delay={card.delay * 2}
              >
                {card.title}
              </div>
              <div
                className="py-3 px-6"
                data-aos-once
                data-aos-delay={card.delay * 2.5}
              >
                <p className="text-third rounded-[11.5px] text-base text-center bg-fifth min-h-[150px]">
                  {card.text}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default HomeCards;
