import React, { useState } from "react";
import { hero } from "../../../dummyData";
import "./hero.css";
import Card from "./Card";

const Hero = () => {
  const [items, setIems] = useState(hero);

  return (
    <>
      <section className="hero">
        <div className="container">
          {items.map((item, i) => {
            return <Card key={i} item={item} />;
          })}
        </div>
      </section>
    </>
  );
};

export default Hero;
