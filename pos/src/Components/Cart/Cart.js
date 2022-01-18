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
import PosModal from "../Modal";

const Cart = ({
  handleShowModal,
  addToCart,
  removeFromCart,
  cart,
  showModal,
  clearCart,
}) => {
  const computeNetPrice = () => {
    let netPrice = 0;
    cart.forEach((cartItem) => {
      netPrice += cartItem.product.price * cartItem.quantity;
    });
    return netPrice;
  };
  return cart.length === 0 ? (
    <Alert variant="warning">Cart is Empty</Alert>
  ) : (
    <>
      <ListGroup as="ol" numbered>
        {cart.map((cartProduct) => (
          <CartItem
            cartProduct={cartProduct}
            key={cartProduct.id}
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
            {computeNetPrice().toFixed(2)}
          </Badge>
        </ListGroup.Item>
      </ListGroup>
      <Container>
        <Row>
          <Button
            variant="outline-danger"
            size="lg"
            style={{ margin: "20px auto" }}
            onClick={handleShowModal}
          >
            Clear Cart
          </Button>
        </Row>
      </Container>
      <PosModal
        headingTitle="Confirmation"
        body="Are you sure you want to clear the Shopping-Cart ?"
        showModal={showModal}
        onCancel={handleShowModal}
        onOk={clearCart}
      />
    </>
  );
};

export default Cart;
