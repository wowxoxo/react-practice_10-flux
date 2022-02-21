import React from "react";
import CartItem from "./CartItem";

const propsItems = [
  {
    id: "Product" + 1,
    title: "Product #" + 1,
    summary: "A great Product",
    description:
      "Such a great product man! Don't overthink! Just get it right now!",
    cost: 1
  },
  {
    id: "Product" + 2,
    title: "Product #" + 2,
    summary: "A great Product",
    description:
      "Such a great product man! Don't overthink! Just get it right now!",
    cost: 2
  }
];

const Cart = (props) => {
  var total = 0;
  var items = propsItems.map((item, i) => {
    let subtotal = item.cost * item.qty;
    total += subtotal;
    return <CartItem subtotal={subtotal} key={i} item={item} />;
  });
  return (
    <div>
      <h1>Cart</h1>
      <table className="table table-hover">
        <thead>
          <tr>
            <th></th>
            <th>Item</th>
            <th>Qty</th>
            <th></th>
            <th>Subtotal</th>
          </tr>
        </thead>
        <tbody>{items}</tbody>
        <tfoot>
          <tr>
            <td colSpan="4" className="text-right">
              Total
            </td>
            <td>${total}</td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};

export default Cart;
