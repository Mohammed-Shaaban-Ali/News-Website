import React, { Fragment, useState } from "react";
import "./Hero.css";
import { hero } from "../../../dummyData";
import Card from "./Card";
const Hero = () => {
  const [items, setItems] = useState(hero);

  return (
    <Fragment>
      <section className="hero">
        <div className="container">
          {items.map((item) => {
            return <Card key={item.id} item={item} />;
          })}
        </div>
      </section>
    </Fragment>
  );
};

export default Hero;
