import React from "react";
import { ListGroup, Badge, Alert } from "react-bootstrap";
import CartItem from "./CartItem";

import "./Cart.css";

const Cart = ({ billData, billList, itemData, netPrice, bill }) => {
  // let netPrice = 0;

  // billList.length > 0 && Object.keys(billData).forEach((key) => {
  //   console.log(key )
  //   netPrice += itemData[key].price * billData[key];
  // });

  return billList.length === 0 ? (
    <Alert variant="warning">Cart is Empty</Alert>
  ) : (
    <>
      <ListGroup as="ol" numbered>
        {billList.map((key) => (
          <CartItem
            key={key + billData[key]}
            name={key}
            price={itemData[key].price}
            quantity={billData[key]}
          />
        ))}
      </ListGroup>
      <ListGroup as="ul">
        <ListGroup.Item
          as="li"
          className="d-flex justify-content-between align-items-start"
        >
          <div className="ms-2 me-auto">
            <div className="fw-bold">Net Total</div>
          </div>
          <Badge variant="primary" pill>
            {netPrice.toFixed(2)}
          </Badge>
        </ListGroup.Item>
      </ListGroup>
    </>
  );
};

export default Cart;
