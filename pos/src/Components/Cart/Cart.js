import React from "react";
import { ListGroup, Badge } from "react-bootstrap";
import CartItem from "../CartItem/CartItem";

import "./BillItemList.css";
const Cart = ({ billData, itemPrice, billList }) => {
  let netPrice = 0;
  return (
    <>
      <ListGroup as="ol" numbered>
        {billList.map((key) => (
          <>
          <CartItem
            name={key}
            itemPrice={itemPrice[key]}
            itemQuantity={billData[key]}
          />
          </>
        ))}
      </ListGroup>

      {billList.length > 0 && (
        <ListGroup as="ul">
          {billList.map((key) => {
            netPrice += itemPrice[key] * billData[key];
          })}
          <ListGroup.Item
            as="li"
            className="d-flex justify-content-between align-items-start"
          >
            <div className="ms-2 me-auto">
              <div className="fw-bold">Net Total</div>
            </div>
            <Badge variant="primary" pill>
              {netPrice}
            </Badge>
          </ListGroup.Item>
        </ListGroup>
      )}
    </>
  );
};

export default Cart;
