import React, { useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import Context from "../../context/Context";

import languages from "../../languages";

const Navlinks = ({ scrollToTop }) => {
  const { language } = useContext(Context);

  const location = useLocation();
  const pathSegments = location.pathname.split('/');
  const lastSegment = pathSegments[pathSegments.length - 1];

  return (
    <>
      <div className={`navlinks gap-6 hidden xl:flex bg-transparent font-normal tracking-wide`}>
        <Link
          className={`hover:text-primary duration-100 offset ${lastSegment === '' ? 'text-primary' : 'text-third'} transition-all delay-[.1s] duration-50 ease-in-out transform`}
          to="/"
          data-aos="fade-down"
          data-aos-delay="100"
          data-aos-once='true'
          onClick={scrollToTop}
        >
          {language === 'SRB' ? `${languages.navigacija.links.first}` : `${languages.navbar.links.first}`}
        </Link>

        <Link
          className={`hover:text-primary duration-100 ${lastSegment === 'onama' ? 'text-primary' : 'text-third'} transition-all delay-[.2s] duration-50 ease-in-out transform`}
          to="/onama"
          data-aos="fade-down"
          data-aos-delay="200"
          data-aos-once='true'
          onClick={scrollToTop}
        >
          {language === 'SRB' ? `${languages.navigacija.links.second}` : `${languages.navbar.links.second}`}
        </Link>
        <Link
          className={`hover:text-primary duration-100 ${lastSegment === 'galerija' ? 'text-primary' : 'text-third'} transition-all delay-[.3s] duration-50 ease-in-out transform`}
          to="/galerija"
          data-aos="fade-down"
          data-aos-delay="300"
          data-aos-once='true'
          onClick={scrollToTop}
        >
          {language === 'SRB' ? `${languages.navigacija.links.third}` : `${languages.navbar.links.third}`}
        </Link>
        <Link
          className={`hover:text-primary duration-100 ${lastSegment === 'nekretnine' ? 'text-primary' : 'text-third'} transition-all delay-[0.4s] duration-50 ease-in-out transform`}
          to="/nekretnine"
          data-aos="fade-down"
          data-aos-delay="400"
          data-aos-once='true'
          onClick={scrollToTop}
        >
          {language === 'SRB' ? `${languages.navigacija.links.fourth}` : `${languages.navbar.links.fourth}`}
        </Link>
        <Link
          className={`hover:text-primary duration-100 ${lastSegment === 'kontakt' ? 'text-primary' : 'text-third'} transition-all delay-[.5s] duration-50 ease-in-out transform`}
          to="/kontakt"
          data-aos="fade-down"
          data-aos-delay="500"
          data-aos-once='true'
          onClick={scrollToTop}
        >
          {language === 'SRB' ? `${languages.navigacija.links.fifth}` : `${languages.navbar.links.fifth}`}
        </Link>
      </div>
    </>
  );
};

export default Navlinks;
