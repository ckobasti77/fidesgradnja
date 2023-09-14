import React, { useContext } from "react";
import Context from "../../context/Context";
import { homeSection, homeSectionIcon } from "../../assets/assets";
import { Link } from "react-router-dom";
import languages from "../../languages";

const HomeSection = () => {
  const { language } = useContext(Context);
  
  return (
    <div className="mx-4 2xl:mx-48 3xl:mx-80">
      <h3 className="uppercase text-2xl text-center text-third pt-24">
        {language === "SRB"
          ? `${languages.pocetna.secondSection.heading}`
          : `${languages.home.secondSection.heading}`}
      </h3>
      <div
        id="homesection"
        className="flex flex-col xl:flex-row space-y-12 2xl:space-y-0 items-center xl:justify-between py-24 min-h-[100vh]"
      >
        <figure className="relative">
          <img
            src={homeSection}
            alt="homesection"
            loading="lazy"
            className="relative rounded-full object-cover"
            data-aos="fade-up"
            data-aos-delay="200"
            width={384}
            height={'full'}
          />
          <div
            className="outer w-[170px] h-[170px] absolute -bottom-[2%] -right-0 xl:-right-[10%] rounded-full p-[4px]"
            data-aos="fade-up"
            data-aos-delay="600"
          >
            <span className=" inline-flex flex-col items-center justify-between bg-fifth rounded-full p-8 w-full h-full text-sm font-semibold">
              <img src={homeSectionIcon} alt="homeSectionIcon" loading="lazy" />
              <span className="uppercase whitespace-nowrap text-third">
                {language === "SRB"
                  ? `${languages.pocetna.secondSection.absolute}`
                  : `${languages.home.secondSection.absolute}`}
              </span>
            </span>
          </div>
        </figure>
        <div className="my-auto w-full xl:w-3/6 flex flex-col items-center text-third gap-y-8">
          <div
            className="outer rounded-2xl p-[3px]"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <p className="uppercase bg-fifth rounded-2xl p-6 font-[600]">
              {language === "SRB"
                ? `${languages.pocetna.secondSection.paragraph2}`
                : `${languages.home.secondSection.paragraph2}`}
            </p>
          </div>
          <div data-aos="fade-up" data-aos-once data-aos-delay="800">
            <Link
              to="/onama"
              className="btn p-[3px] transform hover:scale-[1.02]"
            >
              <span className="bg-fifth w-full h-full rounded-full grid place-items-center px-6 py-2">
                {language === "SRB"
                  ? `${languages.pocetna.secondSection.button}`
                  : `${languages.home.secondSection.button}`}
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeSection;
