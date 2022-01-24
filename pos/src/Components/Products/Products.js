import React from "react";
import { Row } from "react-bootstrap";
import ProductCard from "./ProductCard";

const Products = ({ onAddToCart, productData }) => {
  return (
    <Row>
      {productData.map((product) => (
        <ProductCard product={product} key={product.title} onAddToCart={onAddToCart} />
      ))}
    </Row>
  );
};

export default Products;
