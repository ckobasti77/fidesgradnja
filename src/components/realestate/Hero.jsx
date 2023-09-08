import React, { useContext, useEffect } from "react";
import Context from "../../context/Context";
import languages from "../../languages";
import { Link } from "react-router-dom";
import { Parallax } from "react-scroll-parallax";
import { BsArrowDownShort } from "react-icons/bs";

const Hero = ({ currentBlock }) => {
  const { language } = useContext(Context);

  const heros = [
    {
      id: 1,
      headline: `${
        language === "SRB"
          ? `${languages.nekretnine.realestate.first.headline}`
          : `${languages.realestate.realestate.first.headline}`
      }`,
      subheadline: `${
        language === "SRB"
          ? `${languages.nekretnine.realestate.first.text}`
          : `${languages.realestate.realestate.first.text}`
      }`,
    },
    {
      id: 2,
      headline: `${
        language === "SRB"
          ? `${languages.nekretnine.realestate.second.headline}`
          : `${languages.realestate.realestate.second.headline}`
      }`,
      subheadline: `${
        language === "SRB"
          ? `${languages.nekretnine.realestate.second.text}`
          : `${languages.realestate.realestate.second.text}`
      }`,
    },
    {
      id: 3,
      headline: `${
        language === "SRB"
          ? `${languages.nekretnine.realestate.third.headline}`
          : `${languages.realestate.realestate.third.headline}`
      }`,
      subheadline: `${
        language === "SRB"
          ? `${languages.nekretnine.realestate.third.text}`
          : `${languages.realestate.realestate.third.text}`
      }`,
    },
    {
      id: 4,
      headline: `${
        language === "SRB"
          ? `${languages.nekretnine.realestate.fourth.headline}`
          : `${languages.realestate.realestate.fourth.headline}`
      }`,
      subheadline: `${
        language === "SRB"
          ? `${languages.nekretnine.realestate.fourth.text}`
          : `${languages.realestate.realestate.fourth.text}`
      }`,
    },
  ];

  useEffect(() => {
    console.log(currentBlock);
  }, [currentBlock]);

  return (
    <div className="min-h-screen overflow-hidden text-third">
      <div
        className={`hero min-h-screen ${
          currentBlock === 0 && "bg-[url(/./parallax1.avif)]"
        } ${currentBlock === 1 && "bg-[url(/./ablok.jpg)]"} ${
          currentBlock === 2 && "bg-[url(/./vozdove-kapije.jpg)]"
        } ${currentBlock === 3 && "bg-[url(/./novi-dorcol.jpg)]"} ${
          currentBlock === 4 && "bg-[url(/./sunnyville.jpg)]"
        }`}
      >
        <div className="header-overlay h-full w-full bg-opacity-60"></div>
        {currentBlock !== 0 && (
          <div className="header-overlay3 h-full w-full"></div>
        )}
        <div className="text-center text-neutral-content">
          <div className="max-w-xl space-y-8">
            <div className={`${currentBlock === 0 ? "block" : "hidden"}`}>
              <h1
                className="mb-5 text-5xl font-bold text-third"
                data-aos="fade-up"
                data-aos-delay="400"
              >
                <span
                  className="text-gradient bg-gradient-to-br from-secondary to-primary"
                  data-aos="fade-up"
                  data-aos-delay="200"
                >
                  {language === "SRB"
                    ? `${languages.nekretnine.hero.headline.gradient}`
                    : `${languages.realestate.hero.headline.gradient}`}
                </span>{" "}
                {language === "SRB"
                  ? `${languages.nekretnine.hero.headline.classic}`
                  : `${languages.realestate.hero.headline.classic}`}{" "}
                <br />
                <span
                  className="text-gradient bg-gradient-to-br from-secondary to-primary"
                  data-aos="fade-up"
                  data-aos-delay="200"
                >
                  {language === "SRB"
                    ? `${languages.nekretnine.hero.headline.gradient2}`
                    : `${languages.realestate.hero.headline.gradient2}`}
                </span>{" "}
                {language === "SRB"
                  ? `${languages.nekretnine.hero.headline.classic2}`
                  : `${languages.realestate.hero.headline.classic2}`}{" "}
              </h1>
              <h2
                className="mb-5 text-3xl font-bold text-third"
                data-aos="fade-up"
                data-aos-delay="600"
              >
                {language === "SRB"
                  ? `${languages.nekretnine.hero.subheadline}`
                  : `${languages.realestate.hero.subheadline}`}
              </h2>
              <div data-aos="fade-up" data-aos-delay="800">
                <a
                  href="#nekretnine"
                  className="btn p-[3px] transform hover:scale-[1.02] arrow-down-group"
                >
                  <span className="bg-fifth w-full h-full rounded-full flex items-center gap-x-4 px-6 py-2">
                    {language === "SRB"
                      ? `${languages.nekretnine.hero.button}`
                      : `${languages.realestate.hero.button}`}
                    <BsArrowDownShort size={20} className="arrow-down" />
                  </span>
                </a>
              </div>
            </div>
            {heros.map((hero) => (
              <div
                key={hero.id}
                className={`${currentBlock === hero.id ? "block" : "hidden"}`}
              >
                <h1
                  className="mb-5 text-5xl font-bold text-gradient"
                  data-aos="fade-up"
                  data-aos-delay="400"
                >
                  {hero.headline}
                </h1>
                <h2
                  className="mb-5 text-xl font-bold text-third"
                  data-aos="fade-up"
                  data-aos-delay="600"
                >
                  {hero.subheadline}
                </h2>
                <div data-aos="fade-up" data-aos-delay="800">
                  <a
                    href="#apartmani"
                    className="btn p-[3px] transform hover:scale-[1.02] arrow-down-group"
                  >
                    <span className="bg-fifth w-full h-full rounded-full flex items-center gap-x-4 px-6 py-2">
                      {language === "SRB"
                        ? `Dostupne nekretnine`
                        : `Available properties.`}
                      <BsArrowDownShort size={20} className="arrow-down" />
                    </span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
