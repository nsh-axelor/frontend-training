import React from "react";
import { Row } from "react-bootstrap";
import ItemCard from "./ItemCard";

const Items = ({ addToCart, productData }) => {
  return (
    <Row>
      {productData.map((product) => (
        <ItemCard product={product} key={product.id} addToCart={addToCart} />
      ))}
    </Row>
  );
};

export default Items;
