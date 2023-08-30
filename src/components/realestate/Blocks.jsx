import React, { useState, useEffect, useContext } from "react";
import Context from "../../context/Context";
import {
  ablok,
  ablok2,
  ablok3,
  vozdoveKapije,
  vozdoveKapije2,
  vozdoveKapije3,
  noviDorcol,
  noviDorcol2,
  noviDorcol3,
  sunnyville,
  sunnyville2,
  sunnyville3,
} from "../../assets/assets";
import languages from "../../languages";
import { Slider } from "../components";

const Blocks = ({ currentBlock, setCurrentBlock, scrollToTop }) => {
  const { language } = useContext(Context);

  const viewMoreContent = language === "SRB" ? "Vidi više" : "View more";

  const blocks = [
    {
      id: 1,
      headline: `${
        language === "SRB"
          ? `${languages.nekretnine.realestate.first.headline}`
          : `${languages.realestate.realestate.first.headline}`
      }`,
      text: `${
        language === "SRB"
          ? `${languages.nekretnine.realestate.first.text}`
          : `${languages.realestate.realestate.first.text}`
      }`,
      delay: 200,
      images: [ablok, ablok2, ablok3],
    },
    {
      id: 2,
      headline: `${
        language === "SRB"
          ? `${languages.nekretnine.realestate.fourth.headline}`
          : `${languages.realestate.realestate.fourth.headline}`
      }`,
      text: `${
        language === "SRB"
          ? `${languages.nekretnine.realestate.fourth.text}`
          : `${languages.realestate.realestate.fourth.text}`
      }`,
      delay: 400,
      images: [vozdoveKapije, vozdoveKapije2, vozdoveKapije3],
    },
    {
      id: 3,
      headline: `${
        language === "SRB"
          ? `${languages.nekretnine.realestate.third.headline}`
          : `${languages.realestate.realestate.third.headline}`
      }`,
      text: `${
        language === "SRB"
          ? `${languages.nekretnine.realestate.third.text}`
          : `${languages.realestate.realestate.third.text}`
      }`,
      delay: 200,
      images: [noviDorcol, noviDorcol2, noviDorcol3],
    },
    {
      id: 4,
      headline: `${
        language === "SRB"
          ? `${languages.nekretnine.realestate.second.headline}`
          : `${languages.realestate.realestate.second.headline}`
      }`,
      text: `${
        language === "SRB"
          ? `${languages.nekretnine.realestate.second.text}`
          : `${languages.realestate.realestate.second.text}`
      }`,
      delay: 400,
      images: [sunnyville, sunnyville2, sunnyville3],
    },
  ];

  return (
    <div id="nekretnine">
      <h2
        className="text-center text-5xl py-12 text-sixth"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        {language === "SRB"
          ? `${languages.nekretnine.realestate.heading}`
          : `${languages.realestate.realestate.heading}`}
      </h2>
      <div className="flex flex-wrap justify-center gap-6 py-12">
        {blocks.map((block) => (
          <div
            key={block.id}
            className="outer w-11/12 xl:w-2/6 p-[3px] rounded-3xl"
            data-aos="fade-up"
            data-aos-delay={200 * block.id}
          >
            <div className="bg-fifth h-full rounded-3xl flex flex-col gap-4">
              <Slider pictures={block.images}/>
              <div className="p-6 h-3/6 flex flex-col gap-y-3 items-start justify-between">
                <h1
                  className="text-2xl font-semibold text-sixth uppercase"
                  data-aos="fade-up"
                  data-aos-delay={400 * block.id}
                >
                  {block.headline}
                </h1>
                <p
                  data-aos="fade-up"
                  data-aos-delay={500 * block.id}
                >
                  {block.text}
                </p>
                <button
                  onClick={() => {
                    setTimeout(() => {
                      setCurrentBlock(block.id);
                    }, 200);
                    scrollToTop();
                  }}
                  className="btn p-[3px] transform hover:scale-[1.02] arrow-down-group"
                  data-aos="fade-up"
                  data-aos-delay={600 * block.id}
                >
                  <span className="bg-fifth w-full h-full rounded-full flex items-center gap-x-4 px-6 py-2">
                    {language === "SRB" ? "Vidi više" : "View more"}
                  </span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blocks;
