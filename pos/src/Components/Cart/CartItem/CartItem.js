import React from "react";
import { Badge, ListGroup } from "react-bootstrap";

const CartItem = ({ quantity, price, name }) => {
  return (
    <ListGroup.Item
      as="li"
      className="d-flex justify-content-between align-items-center"
    >
      <div className="ms-2 me-auto">
        <div className="fw-bold">{name}</div>
        {"₹ " + price + " x " + quantity}
      </div>
      <Badge variant="primary" pill>
        {(price * quantity).toFixed(2)}
      </Badge>
    </ListGroup.Item>
  );
};

export default CartItem;
