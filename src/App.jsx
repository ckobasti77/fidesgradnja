import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { SharedLayout } from "./components/components";
import { Home, Onama, Galerija, Nekretnine, Kontakt } from "./pages/pages";
import { BsChevronBarUp } from "react-icons/bs";

import Aos from "aos";
import "aos/dist/aos.css";

import "/node_modules/flag-icons/css/flag-icons.min.css";

function App() {
  Aos.init({
    duration: 400,
    delay: 500,
    offset: -200,
  });

  const scrollToTop = () => {
    window.scroll({
      top: 0,
      behavior: "smooth",
    });
  };

  const [showScrollToTop, setShowScrollToTop] = useState(false);

  useEffect(() => {
    const handleScroll = (e) => {
      const currentHeight =
        e.target.documentElement.scrollTop + window.innerHeight;
      if (currentHeight >= 1000) {
        setShowScrollToTop(true);
      } else if (currentHeight < 1000) {
        setShowScrollToTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="w-[100vw]">
      <Routes>
        <Route path="/" element={<SharedLayout scrollToTop={scrollToTop} />}>
          <Route index element={<Home />} />
          <Route path="/onama" element={<Onama />} />
          <Route path="/galerija" element={<Galerija />} />
          <Route
            path="/nekretnine"
            element={<Nekretnine />}
          />
          <Route path="/kontakt" element={<Kontakt />} />
        </Route>
      </Routes>
      <div
        className={`outer p-[3px] fixed bottom-[25px] right-[25px] md:bottom-[50px] md:right-[50px] z-[9999999] rounded-full transform transition-all duration-300${
          showScrollToTop
            ? "right-[50px] scale-100 opacity-100"
            : "-right-[50px] scale-0 opacity-0"
        }`}
      >
        <button
          className={`rounded-full bg-fifth scrollToTop w-[50px] h-[50px] grid place-items-center`}
          onClick={() => scrollToTop()}
          title="Skroluj do vrha"
        >
          <BsChevronBarUp className="scale-[1.75] text-gradient" />
        </button>
      </div>
    </div>
  );
}

export default App;
