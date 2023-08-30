import React, { useContext } from "react";
import Context from "../../context/Context";
import languages from "../../languages";
import { new1, new2, new3 } from "../../assets/assets";


const New = () => {
  const { language } = useContext(Context);

  const sections = [
    {
      img: new1,
      text: `${
        language === "SRB"
          ? `${languages.novi.firstText}`
          : `${languages.new.firstText}`
      }`,
    },
    {
      img: new2,
      text: `${
        language === "SRB"
          ? `${languages.novi.secondText}`
          : `${languages.new.secondText}`
      }`,
      className: "xl:flex-row-reverse",
      classNameImg: 'xl:translate-x-24'
    },
    {
      img: new3,
      text: `${
        language === "SRB"
          ? `${languages.novi.thirdText}`
          : `${languages.new.thirdText}`
      }`,
    },
  ];
  return (
    <div className="space-y-6 py-32 2xl:px-48 3xl:px-80">
    <h2 className="text-center text-4xl mb-24">
      {
        language === "SRB"
        ? `${languages.novi.headline}`
        : `${languages.new.headline}`
      }
    </h2>
    {sections.map((section, key) => (
      <div
        key={key}

        className={`flex flex-col xl:flex-row ${
          section.className && section.className
        } space-y-12 2xl:space-y-0 items-center xl:justify-between px-4 `}
      >
        <img
          src={section.img}
          alt="homesection"
          className="relative rounded-2xl max-h-[512px] object-cover w-[750px]"
          data-aos="fade-up"
          data-aos-delay="100"
        />
        <div className={`-translate-x-0  ${
          section.classNameImg ? section.classNameImg : 'xl:-translate-x-24'
        } my-auto w-9/12 xl:w-3/6 flex flex-col items-center gap-y-8`}>
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
  )
}

export default New