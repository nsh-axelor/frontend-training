import React from "react";
import "./ItemCard.css";
import { Button, Card, Col } from "react-bootstrap";
const ItemCard = ({ imageLocation, name, price }) => {
  return (
    <Col md="2">
      <Card style={{ width: "9.5rem" }}>
        <Card.Img
          variant="top"
          src={imageLocation}
          style={{ height: "150px" }}
        />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>
            <strong>₹ {price}</strong>
          </Card.Text>
          <Button variant="primary" style={{ fontSize: "1rem" }}>
            Add To Cart
          </Button>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default ItemCard;
