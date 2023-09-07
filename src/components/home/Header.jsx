import { parallax } from "../../assets/assets";
import React, { useContext, useEffect } from "react";
import Context from "../../context/Context";
import { Link } from "react-router-dom";
import { Parallax } from "react-scroll-parallax";
import languages from "../../languages";

const Header = () => {
  const { language, setLanguage } = useContext(Context);

  return (
    <div className="min-h-screen text-third overflow-hidden">
      <Parallax
        translateY={[-40, 40]}
        className="hero min-h-screen bg-[url(/./parallax3.avif)] bg-top"
      >
        <div className="header-overlay h-full w-full bg-opacity-60"></div>
        <div className="header-overlay2 h-full w-full"></div>
        <div className="hero-content p-0 text-center text-neutral-content">
          <div className="space-y-8">
            <h1
              className="mb-5 text-5xl font-bold text-third"
              data-aos="fade-up"
              data-aos-once
              data-aos-delay="1100"
            >
              {language === "SRB"
                ? `${languages.pocetna.header.headline.classic}`
                : `${languages.home.header.headline.classic}`}{" "}
              <span
                className="text-gradient bg-gradient-to-br from-secondary to-primary"
                data-aos="fade-up"
                data-aos-once
                data-aos-delay="1500"
              >
                {language === "SRB"
                  ? `${languages.pocetna.header.headline.gradient}`
                  : `${languages.home.header.headline.gradient}`}
              </span>
            </h1>
            <h2
              className="mb-5 text-3xl px-5 font-bold text-third"
              data-aos="fade-up"
              data-aos-once
              data-aos-delay="1200"
            >
              {language === "SRB"
                ? `${languages.pocetna.header.subheadline}`
                : `${languages.home.header.subheadline}`}
            </h2>
            <div data-aos="fade-up" data-aos-once data-aos-delay="1300">
              <Link
                to="/kontakt"
                className="btn p-[3px] transform hover:scale-[1.02]"
              >
                <span className="bg-fifth w-full h-full rounded-full grid place-items-center px-6 py-2">
                  {language === "SRB"
                    ? `${languages.pocetna.header.button}`
                    : `${languages.home.header.button}`}
                </span>
              </Link>
            </div>
          </div>
        </div>
        <div className="absolute bottom-3 flex justify-center">
          <a
            href="#homecards"
            className="w-[25px] h-[45px] border-2 rounded-xl cursor-pointer flex justify-center mini-mouse hover:border-primary group"
            data-aos="fade-up"
            data-aos-delay="1400"
          >
            <div className="bg-white rounded-full w-[5px] h-[8px] mt-2 mini-mouse-scroll group-hover:bg-primary"></div>
          </a>
        </div>
      </Parallax>
    </div>
  );
};

export default Header;
