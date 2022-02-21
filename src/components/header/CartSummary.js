import React from "react";

const CartSummary = (props) => {
  return (
    <div style={{ paddingTop: 15 }}>
      <a href="#" className="btn btn-success">
        {`Cart Items: ${props.qty} / $${props.total}`}
      </a>
    </div>
  );
};

export default CartSummary;
