import React from "react";
import {
  ListGroup,
  Badge,
  Alert,
  Button,
  Container,
  Row,
} from "react-bootstrap";
import CartItem from "./CartItem";

import "./Cart.css";

const Cart = ({
  itemData,
  netPrice,
  handleClearCart,
  addToCart,
  removeFromCart,
  bill,
}) => {
  return Object.keys(bill).length === 0 ? (
    <Alert variant="warning">Cart is Empty</Alert>
  ) : (
    <>
      <ListGroup as="ol" numbered>
        {Object.keys(bill).map((key) => (
          <CartItem
            key={key + bill[key]}
            name={key}
            price={itemData[key].price}
            quantity={bill[key]}
            addToCart={addToCart}
            removeFromCart={removeFromCart}
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
          <Badge bg="primary" pill>
            {netPrice.toFixed(2)}
          </Badge>
        </ListGroup.Item>
      </ListGroup>
      <Container>
        <Row>
          <Button
            variant="outline-danger"
            size="lg"
            style={{ margin: "20px auto" }}
            onClick={handleClearCart}
          >
            Clear Cart
          </Button>
        </Row>
      </Container>
    </>
  );
};

export default Cart;

// {billList.map((key) => (
// <CartItem
//   key={key + billData[key]}
//   name={key}
//   price={itemData[key].price}
//   quantity={billData[key]}
//   addToCart={addToCart}
//   removeFromCart={removeFromCart}
// />
// ))}
