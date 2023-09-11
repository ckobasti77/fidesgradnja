import React, { useContext } from "react";
import Context from "../context/Context";
import { BiWorld } from "react-icons/bi";
import { srb, eng } from "../assets/assets";

const Language = ({ classSingle }) => {
  const { language, setLanguage } = useContext(Context);

  return (
    <div className="dropdown" data-aos="fade-down" data-aos-delay="800">
      <label
        tabIndex={0}
        className="flex items-center gap-x-1 cursor-pointer duration-150 opacity-[.85] hover:opacity-100"
      >
        <span className={`translate-y-[3px] xl:translate-y-0 -translate-x-5 xl:-translate-x-0 zastava`}>
          {
            language === 'SRB'
              ? <span><img src={srb} alt="srb" /></span>
              : <span><img src={eng} alt="eng" /></span>
          }
        </span>
      </label>
      <ul
        tabIndex={0}
        className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-20 -translate-x-[43.5px] xl:-translate-x-[23px] translate-y-1"
      >
        <li onClick={() => setLanguage("SRB")}>
          <a><img src={srb} alt="srb" /></a>
        </li>
        <li onClick={() => setLanguage("ENG")}>
          <a><img src={eng} alt="eng" /></a>
        </li>
      </ul>
    </div>
  );
};

export default Language;
