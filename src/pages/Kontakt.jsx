import React from "react";
import { Map, Podaci } from "../components/components";
import { Helmet } from "react-helmet";

const Kontakt = () => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Kontakt</title>
        <meta
          name="description"
          content="Naša posvećenost svakom projektu garantuje da će on biti izveden po najvišim standardima i kvalitetno"
        />
        <link rel="canonical" href="https://fides.rs/kontakt" />
      </Helmet>
      <Podaci />
      <Map />
    </div>
  );
};

export default Kontakt;
