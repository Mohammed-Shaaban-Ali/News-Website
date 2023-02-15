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
          <span className="catgeory">{catgeory}</span>
          <hi className="titleBg">{title}</hi>
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
