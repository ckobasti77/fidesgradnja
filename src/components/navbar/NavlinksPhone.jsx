import React, { useContext } from "react";
import Context from "../../context/Context";
import { Link, useLocation } from "react-router-dom";
import { Social, Language } from "../components";

import languages from "../../languages";

const NavlinksPhone = ({ scrollToTop, navOpen, setNavOpen }) => {
  const { language } = useContext(Context);

  const location = useLocation();
  const pathSegments = location.pathname.split("/");
  const lastSegment = pathSegments[pathSegments.length - 1];

  function disableScroll() {
    // Get the current page scroll position
    scrollTop = window.scrollY || document.documentElement.scrollTop;
    scrollLeft = window.scrollX || document.documentElement.scrollLeft,

        // if any scroll is attempted, set this to the previous value
        window.onscroll = function() {
            window.scrollTo(scrollLeft, scrollTop);
        };
}

  return (
    <div
      onScroll={disableScroll}
      className={`flex -z-10 py-36 xl:hidden flex-col items-center text-3xl justify-center gap-16 w-full h-full fixed top-0 left-0 duration-500 bg-fourth ${
        navOpen ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
      }`}
    >
      <Link
        className={`${lastSegment === "" ? "text-primary" : "text-third"}`}
        to="/"
        onClick={() => {
          setNavOpen(false)
          scrollToTop()
        }}
      >
        {language === "SRB"
          ? `${languages.navigacija.links.first}`
          : `${languages.navbar.links.first}`}
      </Link>
      <Link
        className={`${lastSegment === "onama" ? "text-primary" : "text-third"}`}
        to="/onama"
        onClick={() => {
          setNavOpen(false)
          scrollToTop()
        }}
      >
        {language === "SRB"
          ? `${languages.navigacija.links.second}`
          : `${languages.navbar.links.second}`}
      </Link>
      <Link
        className={`${lastSegment === "galerija" ? "text-primary" : "text-third"}`}
        to="/galerija"
        onClick={() => {
          setNavOpen(false)
          scrollToTop()
        }}
      >
        {language === "SRB"
          ? `${languages.navigacija.links.third}`
          : `${languages.navbar.links.third}`}
      </Link>
      <Link
        className={`${lastSegment === "nekretnine" ? "text-primary" : "text-third"}`}
        to="/nekretnine"
        onClick={() => {
          setNavOpen(false)
          scrollToTop()
        }}
      >
        {language === "SRB"
          ? `${languages.navigacija.links.fourth}`
          : `${languages.navbar.links.fourth}`}
      </Link>
      <Link
        className={`${lastSegment === "kontakt" ? "text-primary" : "text-third"}`}
        to="/kontakt"
        onClick={() => {
          setNavOpen(false)
          scrollToTop()
        }}
      >
        {language === "SRB"
          ? `${languages.navigacija.links.fifth}`
          : `${languages.navbar.links.fifth}`}
      </Link>
      <div className="w-full flex xl:hidden items-center gap-4 justify-center">
        <Social />
      </div>
    </div>
  );
};

export default NavlinksPhone;
