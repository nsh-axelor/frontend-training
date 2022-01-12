import React from "react";
import {
  ListGroup,
  Badge,
  Alert,
} from "react-bootstrap";
import CartItem from "../CartItem/CartItem";

import "./BillItemList.css";
const Cart = ({
  billData,
  billList,
  itemData,
}) => {
  let netPrice = 0;
  return (
    <>
      {billList.length === 0 ? (
        <Alert variant="warning">Cart is Empty</Alert>
      ) : (
        <ListGroup as="ol" numbered>
          {billList.map((key) => (
            <>
              <CartItem
                name={key}
                itemPrice={itemData[key].price}
                itemQuantity={billData[key]}
              />
            </>
          ))}
        </ListGroup>
      )}

      {billList.length > 0 && (
        <ListGroup as="ul">
          {billList.map((key) => {
            netPrice += itemData[key].price * billData[key];
          })}
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
      )}
    </>
  );
};

export default Cart;
