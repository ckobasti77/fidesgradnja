import React, { useState } from "react";
import { Hero, Blocks, Slider, Apartments, New } from "../components";

const Realestate = ({ scrollToTop }) => {
  const [currentBlock, setCurrentBlock] = useState(0);

  return (
    <>
      <Hero currentBlock={currentBlock} />
      {/* {currentBlock === 0 
        ? <Blocks currentBlock={currentBlock} setCurrentBlock={setCurrentBlock} scrollToTop={scrollToTop} />
        : <Apartments currentBlock={currentBlock} setCurrentBlock={setCurrentBlock} scrollToTop={scrollToTop}/>
      } */}
      <New />
    </>
  );
};

export default Realestate;