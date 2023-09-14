import React from "react";
import { Realestate } from "../components/components";
import { Helmet } from "react-helmet";

const Nekretnine = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Nekretnine</title>
        <meta
          name="description"
          content="Gradimo više od zgrada – gradimo poverenje."
        />
        <link rel="canonical" href="https://fides.rs/nekretnine" />
      </Helmet>
      <Realestate />
    </>
  );
};

export default Nekretnine;
