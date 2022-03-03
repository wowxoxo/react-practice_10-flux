import React from "react";
import StoreWatchMixin from "../../mixins/StoreWatchMixin";
import AppStore from "../../stores/store";
import CatalogItem from "./CatalogItem";

function getCatalog() {
  return { items: AppStore.getCatalog() };
}

const Catalog = (props) => {
  let items = props.items.map((item) => {
    return <CatalogItem key={item.id} item={item} />;
  });
  return <div className="row">{items}</div>;
};

export default StoreWatchMixin(Catalog, getCatalog);
