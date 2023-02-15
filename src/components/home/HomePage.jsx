import React, { Fragment } from "react";
import Hero from "./hero/Hero";
import Home from "./mainContent/homes/Home";
import Popular from "./mainContent/popular/Popular";

const HomePage = () => {
  return (
    <Fragment>
      <Hero />
      <Home />
    </Fragment>
  );
};

export default HomePage;
