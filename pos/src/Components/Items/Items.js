import React from "react";
import { CardGroup } from "react-bootstrap";
import ItemCard from "../ItemCard";

const Items = ({ itemData }) => {
  return (
    <CardGroup>
      {itemData.map(({ name, price, imageLocation }) => (
        <ItemCard name={name} price={price} imageLocation={imageLocation} />
      ))}
    </CardGroup>
  );
};

export default Items;
