import React from "react";
import CartButton from "./CartButton";

export default (props) => {
  return (
    <tr>
      <td>
        <CartButton txt="x" handler={() => {}} />
      </td>
      <td>{props.item.title}</td>
      <td>{props.item.qty}</td>
      <td>
        <div className="btn-group">
          <CartButton txt="-" handler={() => {}} />
          <CartButton txt="+" handler={() => {}} />
        </div>
      </td>
      <td>${props.subtotal}</td>
    </tr>
  );
};
