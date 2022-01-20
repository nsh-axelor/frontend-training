import React from "react";
import { Row } from "react-bootstrap";
import ProductCard from "./ProductCard";

const Products = ({ addToCart, productData }) => {
  return (
    <Row>
      {productData.map((product) => (
        <ProductCard product={product} key={product.id} addToCart={addToCart} />
      ))}
    </Row>
  );
};

export default Products;
