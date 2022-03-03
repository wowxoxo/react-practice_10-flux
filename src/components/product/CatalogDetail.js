import React from "react";
import CartButton from "../cart/CartButton";
import AppActions from "../actions/Actions";
import { Link } from "react-router-dom";
import StoreWatchMixin from "../../mixins/StoreWatchMixin";
import AppStore from "../../stores/store";

function getCatalogItem(props) {
  let item = AppStore.getCatalog().find(
    ({ id }) => id === props.match.params.itemId
  );
  return { item };
}

const CatalogDetail = (props) => {
  return (
    <div>
      <h4>{props.item.title}</h4>
      <img src="https://place-hold.it/250x250" />
      <p>{props.item.summary}</p>
      <p>
        ${props.item.cost}{" "}
        <span className="text-success">
          {props.item.qty && `(${props.item.qty} in cart)`}
        </span>
      </p>
      <div className="btn-group">
        <Link to="/" className="btn btn-default btn-sm">
          Continue Shopping
        </Link>
        <CartButton
          handler={AppActions.addItem.bind(null, props.item)}
          txt="Add To Cart"
        />
      </div>
    </div>
  );
};

export default StoreWatchMixin(CatalogDetail, getCatalogItem);
