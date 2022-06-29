import React from "react";
import "./ProductCard.css";
import { useWindowSize } from "../../../Hooks";

const ProductCard = (props) => {
  const { title, src, description, price, buyNowHandler } = props;
  const size = useWindowSize();
  return (
    <div className="productCardContainer">
      <h2>{title}</h2>
      <div className="subContainer">
        <div className="leftCardContainer">
          <img src={src} alt={title} />
        </div>
        <div className="rightCardContainer">
          <p>{description.substring(0, 112)}</p>
          {size.width <= 750 && (
            <button onClick={buyNowHandler}>Buy Now MRP @ Rs.{price}</button>
          )}
        </div>
      </div>
      {size.width > 750 && (
        <div className="priceContainer">
          {size.width >= 991 && <div>MRS Rs.{price}</div>}
          <button onClick={buyNowHandler}>
            <span>Buy Now</span>
            {size.width <= 991 && size.width >= 750 && (
              <span> @ Rs.{price}</span>
            )}
          </button>
        </div>
      )}
    </div>
  );
};

export default ProductCard;
