import React from "react";
import { Button, Card, Col } from "react-bootstrap";

const ItemCard = ({ product, addToCart }) => {
  const handleClick = () => {
    addToCart(product);
  };

  let { imageLocation, title, price } = product;
  return (
    <>
      <Col md="2">
        <Card className="mt-4">
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
            <Card.Title>{title}</Card.Title>
            <Card.Text>
              <strong>₹ {price}</strong>
            </Card.Text>
            <Button variant="primary" onClick={handleClick}>
              Add To Cart
            </Button>
          </Card.Body>
        </Card>
      </Col>
    </>
  );
};

export default ItemCard;
