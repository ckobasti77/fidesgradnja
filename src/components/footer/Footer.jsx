import React, { useContext } from "react";
import Context from "../../context/Context";
import { Navlinks } from "../components";
import { logoSrb, logoEng } from "../../assets/assets";
import { Link } from "react-router-dom";
import { ReactSVG } from "react-svg";

const Footer = ({ scrollToTop }) => {
  const { language } = useContext(Context);

  return (
    <div className="flex flex-col items-center gap-y-4 py-6">
      <div
        className="w-2/6 xl:w-2/12 flex justify-center text-lg font-semibold"
        data-aos="fade-down"
        data-aos-delay="700"
      >
        <Link to="/" className="font-bold" onClick={scrollToTop} aria-label="Fides Logo">
            {
              language === 'SRB'
              ? <ReactSVG src={logoSrb} />
              : <ReactSVG src={logoEng} />
            }
        </Link>
      </div>
      <Navlinks scrollToTop={scrollToTop} />
    </div>
  );
};

export default Footer;
