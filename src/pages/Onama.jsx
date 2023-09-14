import React from "react";
import { Helmet } from "react-helmet";

import { AboutUs } from "../components/components";

const Onama = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>O nama</title>
        <meta name="description" content="Vaši planovi, naša realizacija." />
        <link rel="canonical" href="https://fides.rs/onama" />
      </Helmet>
      <AboutUs />
    </>
  );
};

export default Onama;
