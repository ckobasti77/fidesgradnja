import React from "react";
import { Header, HomeCards, HomeSection } from "../components/components";
import { Helmet } from "react-helmet";

const Home = () => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Fides Gradnja</title>
        <meta
          name="description"
          content="Dobrodošli u kompaniju Fides gradnja - vaš pouzdani partner u izgradnji i ostvarivanju arhitekstonskih ideja"
        />
        <link rel="canonical" href="https://fides.rs" />
      </Helmet>
      <Header />
      <HomeCards />
      <HomeSection />
    </div>
  );
};

export default Home;
