import React from "react";
import { CloseOutlined } from "@mui/icons-material";
import "./Modal.css";

const Modal = (props) => {
  const { displayModal, closeModal, totalItems, children, totalPrice } = props;

  return displayModal ? (
    <div className="modal" onClick={closeModal}>
      <div className="modalContent" onClick={(e) => e.stopPropagation()}>
        <div className="modalHeader">
          <span className="title">
            <span className="cartTitle">My Cart </span>
            {totalItems > 0 && (
              <span className="cartSubTitle">( {totalItems} items )</span>
            )}
          </span>
          <button className="close" onClick={closeModal}>
            <CloseOutlined fontSize="small" />
          </button>
        </div>
        <div className="modalSubContent">{children}</div>
        <div className="modalFooter">
          {totalItems > 0 && (
            <div>Promo code can be applied on payment page</div>
          )}
          <button
            className={totalPrice > 0 ? "title" : "start title"}
            onClick={closeModal}
          >
            {totalPrice > 0 ? (
              <>
                <span>Proceed to CheckOut</span>
                <span>
                  Rs.{totalPrice}
                  <span className="arrow">{">"}</span>
                </span>
              </>
            ) : (
              <span>Start Shopping</span>
            )}
          </button>
        </div>
      </div>
    </div>
  ) : null;
};
export default Modal;
