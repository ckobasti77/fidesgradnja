import React from "react";

const Map = () => {
  return (
    <div
      className="z-10 rounded-2xl py-6 xl:py-28 mx-4 2xl:mx-48 3xl:mx-80"
      data-aos="fade-up"
      data-aos-delay="100"
      id="mapa"
    >
      <iframe
        width="100%"
        className="h-[300px] xl:h-[600px] rounded-2xl -translate-y-0 xl:-translate-y-10"
        frameBorder="0"
        src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d2831.5601908753674!2d20.435539!3d44.789770999999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNDTCsDQ3JzIzLjIiTiAyMMKwMjYnMDcuOSJF!5e0!3m2!1ssr!2srs!4v1693413270352!5m2!1ssr!2srs"
      ></iframe>
    </div>
  );
};

export default Map;
