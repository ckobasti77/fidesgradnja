import React from "react";
import { FiInstagram, FiFacebook } from "react-icons/fi";

const Social = () => {
  return (
    <div className="flex gap-2">
      <FiInstagram
        size={25}
        className="cursor-pointer text-[#e0e0e0] hover:text-primary duration-150 hover:-translate-y-1 "
        data-aos="fade-down"
        data-aos-delay="900"
      />
      <a href="https://www.facebook.com/profile.php?id=100085839290030&mibextid=avESrC" about="_blank" aria-label="Fides Facebook profile">
        <FiFacebook
          size={25}
          className="cursor-pointer text-[#e0e0e0] hover:text-primary duration-150 hover:-translate-y-1 rounded-3xl"
          data-aos="fade-down"
          data-aos-delay="1000"
        />
      </a>
    </div>
  );
};

export default Social;
