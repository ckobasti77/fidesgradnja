import React, { useContext } from "react";
import Context from "../../context/Context";
import languages from "../../languages";

const Hero = () => {
  const { language } = useContext(Context);

  return (
    <div className="min-h-screen overflow-hidden text-third">
      <div className={`hero min-h-screen bg-[url(/./parallax1.avif)]`}>
        <div className="header-overlay h-full w-full bg-opacity-60"></div>
        <div className="header-overlay2 h-full w-full"></div>
        <div className="text-center text-neutral-content">
          <div className="max-w-xl space-y-8">
            <div className={`block`}>
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
              {/* <div data-aos="fade-up" data-aos-delay="800">
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
              </div> */}
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-3 flex left-0 right-0 justify-center">
          <a
            href="#noviprojekat"
            aria-label="Novi projekat"
            className="w-[25px] h-[45px] border-2 rounded-xl cursor-pointer flex justify-center mini-mouse hover:border-primary group"
            data-aos="fade-up"
            data-aos-delay="700"
          >
            <div className="bg-white rounded-full w-[5px] h-[8px] mt-2 mini-mouse-scroll group-hover:bg-primary"></div>
          </a>
        </div>
    </div>
  );
};

export default Hero;
