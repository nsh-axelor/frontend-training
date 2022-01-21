import React from "react";
import {
  Badge,
  Button,
  ButtonGroup,
  ListGroup,
} from "react-bootstrap";

const CartProduct = ({ addToCart, removeFromCart, cartProduct }) => {
  let { quantity, product } = cartProduct;
  let { title, price } = product;
  return (
    <>
      <ListGroup.Item
        as="li"
        className="d-flex justify-content-between align-items-center"
      >
        <div className="ms-2 me-auto">
          <div className="fw-bold">{title + " / ₹ " + price}</div>
          <ButtonGroup size="sm">
            <Button variant="danger" onClick={() => removeFromCart(product)}>
              -
            </Button>
            <Button variant="light">{quantity}</Button>
            <Button variant="success" onClick={() => addToCart(product,false)}>
              +
            </Button>
          </ButtonGroup>
        </div>
        <Badge bg="primary" pill>
          {(price * quantity).toFixed(2)}
        </Badge>
      </ListGroup.Item>
    </>
  );
};

export default CartProduct;
