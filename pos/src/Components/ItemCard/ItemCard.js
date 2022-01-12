import React, { useState } from "react";
import "./ItemCard.css";
import { Button, Card, Col, ToastContainer } from "react-bootstrap";


const ItemCard = ({
  imageLocation,
  name,
  price,
  setBillData,
  billData,
  billList,
  setBillList,
  showToaster,
  setShowToaster,
  toastList,
  setToastList
}) => {

  const handleClick = (e) => {
    let name = e.target.name;
    let quant = billData[name];
    setBillData({ ...billData, [name]: quant + 1 });

    if (!billList.includes(name)) {
      setBillList([...billList, name]);
    }

    setShowToaster({
      show: true,
      name: name,
    });

    setToastList([...toastList,{key:name+quant,name:name,visible:true}])
  };

  return (
    <>
      <Col md="2">
        <Card>
          <Card.Body>
          <div
            style={{
              backgroundImage: `url(${imageLocation})`,
              backgroundSize: "contain",
              height: "150px",
              backgroundRepeat: "no-repeat",
            }}
          >
          </div>
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
