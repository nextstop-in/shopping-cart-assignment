import React from "react";
import "./Card.css";

const Card = (props) => {
  const { title, description, buttonText, src, handleClick, order } = props;
  return (
    <div className={order % 2 === 0 ? "cardContainer alter" : "cardContainer"}>
      <div className="leftCardContainer">
        <img src={src} alt={title} />
      </div>
      <div className="rightCardContainer">
        <div className="title">{title}</div>
        <p>{description}</p>
        <button onClick={handleClick}>Explore {buttonText}</button>
      </div>
    </div>
  );
};

export default Card;
