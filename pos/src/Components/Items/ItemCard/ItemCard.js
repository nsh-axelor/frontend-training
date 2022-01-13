import React from "react";
import "./ItemCard.css";
import { Button, Card, Col } from "react-bootstrap";

const ItemCard = ({ imageLocation, name, price, addToCart }) => {
  const handleClick = (e) => {
    addToCart(e.target.name);
  };

  return (
    <>
      <Col md="2">
        <Card>
          <Card.Body>
            <div
              className="card-img"
              style={{
                backgroundImage: `url(${imageLocation})`,
                backgroundSize: "contain",
                height: "150px",
                backgroundRepeat: "no-repeat",
              }}
            ></div>

            <Card.Title>{name}</Card.Title>
            <Card.Text>
              <strong>₹ {price}</strong>
            </Card.Text>
            <Button
              variant="primary"
              name={name}
              style={{ fontSize: "1rem" }}
              onClick={handleClick}
            >
              Add To Cart
            </Button>
          </Card.Body>
        </Card>
      </Col>
    </>
  );
};

export default ItemCard;
