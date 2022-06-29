import React from "react";
import { useSelector } from "react-redux";
import "./MiniCard.css";

const MiniCard = (props) => {
  const { id, name, src, decrementHandler, incrementHandler, price } = props;
  const itemsCount = useSelector((state) => state.itemsCount);
  return (
    itemsCount[0][id] > 0 && (
      <div className="miniCardContainer">
        <div className="imageContainer">
          <img src={src} alt={name} />
        </div>
        <div className="detailsContainer">
          <div className="name">{name}</div>
          <div className="priceContainer">
            <div>
              <button onClick={decrementHandler}>-</button>
              <span className="count">{itemsCount[0][id]}</span>
              <button onClick={incrementHandler}>+</button>
              <span className="count"> X {price}</span>
            </div>
            <div>Rs.{itemsCount[0][id] * price}</div>
          </div>
        </div>
      </div>
    )
  );
};

export default MiniCard;
