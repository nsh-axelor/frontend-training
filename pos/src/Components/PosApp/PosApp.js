import React, { useState } from "react";
import "./PosApp.css";
import Strawberry from "../../Assets/img/strawberry.jpg";
import Banana from "../../Assets/img/banana.png";
import Apple from "../../Assets/img/apple.jpeg";
import Pineapple from "../../Assets/img/pineapple.png";
import Grapes from "../../Assets/img/graphes.jpeg";
import Cherry from "../../Assets/img/cherry.png";
import RedChilly from "../../Assets/img/red-chilly.jpeg";
import Capcicum from "../../Assets/img/capcicum.jpeg";
import Onion from "../../Assets/img/onion.jpg";
import Mashroom from "../../Assets/img/mashroom.png";
import Guava from "../../Assets/img/guava.png";
import Tomato from "../../Assets/img/tomato.png";
import Brinjal from "../../Assets/img/brinjal.jpeg";
import Broccoli from "../../Assets/img/broccoli.jpeg";
import Carrot from "../../Assets/img/carrot.jpg";
import Items from "../Items";
import { Col, Container, Row, ToastContainer } from "react-bootstrap";
import Cart from "../Cart";
import PosNavbar from "../PosNavbar";
import PosToast from "../PosToast";

const itemData = {
  Strawberry: { price: 10.0, imageLocation: Strawberry },
  Banana: { price: 2, imageLocation: Banana },
  Apple: { price: 25, imageLocation: Apple },
  Pineapple: { price: 100, imageLocation: Pineapple },
  Grapes: { price: 40, imageLocation: Grapes },
  Cherry: { price: 8, imageLocation: Cherry },
  "Red chilly": { price: 30, imageLocation: RedChilly },
  Capcicum: { price: 4, imageLocation: Capcicum },
  Onion: { price: 20, imageLocation: Onion },
  Mashroom: { price: 12, imageLocation: Mashroom },
  Guava: { price: 15, imageLocation: Guava },
  Tomato: { price: 3, imageLocation: Tomato },
  Brinjal: { price: 20, imageLocation: Brinjal },
  Broccoli: { price: 50, imageLocation: Broccoli },
  Carrot: { price: 10, imageLocation: Carrot },
};

const PosApp = () => {
  const [toastList, setToastList] = useState([]);

  const [billList, setBillList] = useState([]);

  const [netPrice, setNetPrice] = useState(0);

  const [billData, setBillData] = useState({});

  // const [bill, setBill] = useState({});

  const addToCart = (name) => {
    let quant = isNaN(billData[name]) ? 0 : billData[name];
    setBillData({ ...billData, [name]: Number(quant + 1) });

    if (!billList.includes(name)) {
      setBillList([...billList, name]);
    }

    // setBill({
    //   ...bill,
    //   [name]: { quanttity: Number(quant + 1), price: itemData[name].price },
    // });
    // console.log(bill);

    setToastList([...toastList, { key: name + quant, name: name }]);

    setNetPrice(netPrice + itemData[name].price);
  };

  const handleToastClose = (key) => {
    setToastList(toastList.filter((item) => item.key !== key));
  };
  return (
    <>
      {/* Navbar */}
      <PosNavbar brandName="Axelor POS" />

      <Container fluid>
        <Row>
          <Col md="8" style={{ padding: "10px" }}>
            <Items itemData={itemData} addToCart={addToCart} />
          </Col>
          <Col md="4" style={{ padding: "10px" }}>
            <Cart
              itemData={itemData}
              billData={billData}
              billList={billList}
              netPrice={netPrice}
              // bill={bill}
            />
          </Col>
        </Row>
      </Container>
      <ToastContainer position="top-end" className="p-3">
        <PosToast toastList={toastList} handleOnClose={handleToastClose} />
      </ToastContainer>
    </>
  );
};

export default PosApp;
