import React, { Fragment } from "react";
import "./Heading.css";

const Heading = ({ titel }) => {
  return (
    <Fragment>
      <div className="heading">
        <h6>{titel}</h6>
      </div>
    </Fragment>
  );
};

export default Heading;
