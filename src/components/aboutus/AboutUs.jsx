import React, { useContext } from "react";
import Context from "../../context/Context";
import languages from "../../languages";
import { aboutus1, aboutus2, aboutus3 } from "../../assets/assets";

const AboutUs = () => {
  const { language } = useContext(Context);

  const sections = [
    {
      img: aboutus1,
      text: `${
        language === "SRB"
          ? `${languages.onama.firstText}`
          : `${languages.aboutus.firstText}`
      }`,
    },
    {
      img: aboutus2,
      text: `${
        language === "SRB"
          ? `${languages.onama.secondText}`
          : `${languages.aboutus.secondText}`
      }`,
      className: "xl:flex-row-reverse",
    },
    {
      img: aboutus3,
      text: `${
        language === "SRB"
          ? `${languages.onama.thirdText}`
          : `${languages.aboutus.thirdText}`
      }`,
    },
  ];

  return (
    <div className="space-y-6 xl:-space-y-32 py-32 mx-4 2xl:mx-48 3xl:mx-80 text-third">
      {sections.map((section, key) => (
        <div
          key={key}

          className={`flex flex-col xl:flex-row ${
            section.className && section.className
          } space-y-12 2xl:space-y-0 items-center xl:justify-between px-4 `}
        >
          <img
            src={section.img}
            loading="lazy"
            alt="homesection"
            className="relative rounded-full max-h-[512px] object-cover w-96"
            data-aos="fade-up"
            data-aos-delay="100"
          />
          <div className="my-auto w-9/12 xl:w-3/6 flex flex-col items-center gap-y-8">
            <div
              className="outer rounded-2xl p-[3px]"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <p className="bg-fifth rounded-2xl p-6 font-[600]">
                {section.text}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AboutUs;
