import React from "react";
import CartButton from "../cart/CartButton";

export default (props) => {
  let itemStyle = {
    borderBottom: "1px solid #ccc",
    paddingBottom: 15
  };
  return (
    <div className="col-xs-6 col-sm-4 col-md-3" style={itemStyle}>
      <h4>{props.item.title}</h4>
      <img
        src="https://place-hold.it/250x250"
        width="100%"
        className="img-responsive"
      />
      <p>{props.item.summary}</p>
      <p>
        ${props.item.cost}{" "}
        <span className="text-success">
          {props.item.qty && `(${props.item.qty} in cart)`}
        </span>
      </p>
      <div className="btn-group">
        <a href="#" className="btn btn-default btn-sm">
          Learn More
        </a>
        <CartButton handler={() => {}} txt="Add To Cart" />
      </div>
    </div>
  );
};
