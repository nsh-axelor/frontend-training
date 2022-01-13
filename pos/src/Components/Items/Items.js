import React from "react";
import { Row } from "react-bootstrap";
import ItemCard from "./ItemCard";

const Items = ({ itemData, addToCart }) => {
  return (
    <Row>
      {Object.keys(itemData).map((key) => (
        <ItemCard
          key={key}
          name={key}
          price={itemData[key].price}
          imageLocation={itemData[key].imageLocation}
          addToCart={addToCart}
        />
      ))}
    </Row>
  );
};

export default Items;
