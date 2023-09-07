import React, { useState, useEffect, useCallback, useContext } from "react";
import Context from "../../context/Context";
import { Link } from "react-router-dom";

import {
  Navlinks,
  Burger,
  NavlinksPhone,
  Social,
  Language,
} from "../components";
import { logo, logoLight, logoEng, logoSrb } from "../../assets/assets";


const Navbar = ({ scrollToTop }) => {
  const { language } = useContext(Context)
  const [showNav, setShowNav] = useState(true);
  const [navOpen, setNavOpen] = useState(false);
  const [scrollPos, setScrollPos] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const currentScrollPos = window.pageYOffset;
      const visible = scrollPos > currentScrollPos;
      setScrollPos(currentScrollPos);
      setShowNav(visible);
      setNavOpen(false);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [scrollPos]);


  const toggleNav = useCallback(() => {
    setNavOpen((prev) => !prev);
  }, []);

  return (
    <nav
      className={`navbar fixed top-0 w-screen h-[105px] bg-transparent flex items-center rounded-b-2xl px-4 text-white transition-transform z-[2] duration-300 ease-in-out ${
        showNav ? "transform-none " : "transform -translate-y-full"
      }`}
    >
      <div className="h-full w-full absolute inset-0 -z-10 bg-[rgba(26,37,45,0.25)] shadow-[0_8px_32px_0_rgba(26,37,45,0.37)] backdrop-blur-[10px]"></div>
      <div className="w-full px-3 md:px-3 xl:px-6 py-3 flex justify-between items-center">
        <div className="xl:w-5/12 whitespace-nowrap hidden xl:block">
          <Navlinks showNav={showNav} scrollToTop={scrollToTop} />
        </div>
        <div
          className="w-4/12 xl:w-2/12 flex justify-center text-lg font-semibold"
          data-aos="fade-down"
          data-aos-delay="700"
        >
          <Link to="/" className="font-bold" onClick={scrollToTop}>
            {
              language === 'SRB'
              ? <img src={logoSrb} alt="logo" className={`cursor-pointer max-h-[100px] transform scale-[.5]`} />
              : <img src={logoEng} alt="logo" className={`cursor-pointer max-h-[100px] transform scale-[.5]`} />
            }
          </Link>
        </div>
        <div className="block xl:hidden">
          <Language />
        </div>
        <div className="xl:w-5/12 hidden xl:flex items-center gap-4 justify-end">
          <Language classSingle='translate-y-[0px]' />
          <Social />
        </div>
        <Burger navOpen={navOpen} toggleNav={toggleNav} />
      </div>
      <NavlinksPhone navOpen={navOpen} setNavOpen={setNavOpen} scrollToTop={scrollToTop} />
    </nav>
  );
};

export default Navbar;
