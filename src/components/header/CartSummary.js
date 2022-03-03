import React from "react";
import { Link } from "react-router-dom";
import StoreWatchMixin from "../../mixins/StoreWatchMixin";
import AppStore from "../../stores/store";

const CartSummary = (props) => {
  return (
    <div style={{ paddingTop: 15 }}>
      <Link to="/cart" className="btn btn-success">
        {`Cart Items: ${props.qty} / $${props.total}`}
      </Link>
    </div>
  );
};

export default StoreWatchMixin(CartSummary, AppStore.getCartTotals);
