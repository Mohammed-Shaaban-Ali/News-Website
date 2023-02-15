import React, { Fragment } from "react";
import Hero from "./hero/Hero";
import Home from "./mainContent/homes/Home";

const HomePage = () => {
  return (
    <Fragment>
      <Hero />
      <Home />
    </Fragment>
  );
};

export default HomePage;
