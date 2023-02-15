import React, { Fragment } from "react";

const Card = ({
  item: { id, time, authorImg, authorName, title, catgeory, cover },
}) => {
  return (
    <Fragment>
      <dic className="box">
        <div className="img">
          <img src={cover} alt={title} />
        </div>
        <div className="text">
          <span className="category">{catgeory}</span>
          <h1 className="titleBg"> {title}</h1>
          <div className="auther flex">
            <span>{authorName}</span>
            <span>{time}</span>
          </div>
        </div>
      </dic>
    </Fragment>
  );
};

export default Card;
