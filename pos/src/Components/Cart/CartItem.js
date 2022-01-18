import React from "react";
import { Badge, Button, Container, ListGroup } from "react-bootstrap";

const CartItem = ({ addToCart, removeFromCart,cartProduct }) => {
    let {quantity,product} = cartProduct;
    let {title,price} = product
  return (
    <>
      <ListGroup.Item
        as="li"
        className="d-flex justify-content-between align-items-center"
      >
        <div className="ms-2 me-auto">
          <div className="fw-bold">{title}</div>
          {"₹ " + price + " x " + quantity}
        </div>
        <Badge bg="primary" pill>
          {(price * quantity).toFixed(2)}
        </Badge>
      </ListGroup.Item>

      <Container>
        <Button variant="primary" onClick={() => addToCart(product)}>
          +
        </Button>
        <Button variant="danger" onClick={() => removeFromCart(product)}>
          -
        </Button>
      </Container>
    </>
  );
};

export default CartItem;