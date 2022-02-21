import React from "react";
import CatalogItem from "./CatalogItem";

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

const Catalog = (props) => {
  let items = propsItems.map((item) => {
    return <CatalogItem key={item.id} item={item} />;
  });
  return <div className="row">{items}</div>;
};
export default Catalog;
