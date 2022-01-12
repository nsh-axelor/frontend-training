import React, { useState } from "react";
import "./Pos.css";
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
import {
  Col,
  Container,
  Row,
  ToastContainer,
} from "react-bootstrap";
import Cart from "../Cart";
import PosNavbar from "../PosNavbar";
import PosToast from "../PosToast";

const itemData = {
  Strawberry: { price: 10.0, imageLocation: Strawberry },
  Banana: { price: 2.0, imageLocation: Banana },
  Apple: { price: 25.0, imageLocation: Apple },
  Pineapple: { price: 100.0, imageLocation: Pineapple },
  Grapes: { price: 40.0, imageLocation: Grapes },
  Cherry: { price: 8.0, imageLocation: Cherry },
  "Red Chilly": { price: 30.0, imageLocation: RedChilly },
  Capcicum: { price: 4.0, imageLocation: Capcicum },
  Onion: { price: 20.0, imageLocation: Onion },
  Mashroom: { price: 12.0, imageLocation: Mashroom },
  Guava: { price: 15.0, imageLocation: Guava },
  Tomato: { price: 3.0, imageLocation: Tomato },
  Brinjal: { price: 20.0, imageLocation: Brinjal },
  Broccoli: { price: 50.0, imageLocation: Broccoli },
  Carrot: { price: 10.0, imageLocation: Carrot },
};

const Pos = () => {
  const [toastList, setToastList] = useState([]);

  const [billList, setBillList] = useState([]);

  const [billData, setBillData] = useState({
    Strawberry: 0,
    Banana: 0,
    Apple: 0,
    Pineapple: 0,
    Grapes: 0,
    Cherry: 0,
    "Red Chilly": 0,
    Capcicum: 0,
    Onion: 0,
    Mashroom: 0,
    Guava: 0,
    Tomato: 0,
    Brinjal: 0,
    Broccoli: 0,
    Carrot: 0,
  });

  return (
    <>
      {/* Navbar */}
      <PosNavbar brandName="Axelor POS" />

      <Container fluid>
        <Row>
          <Col md="8" style={{ padding: "10px" }}>
            <Items
              itemData={itemData}
              billData={billData}
              setBillData={setBillData}
              billList={billList}
              setBillList={setBillList}
              toastList={toastList}
              setToastList={setToastList}
            />
          </Col>
          <Col md="4" style={{ padding: "10px" }}>
            <Cart itemData={itemData} billData={billData} billList={billList} />
          </Col>
        </Row>
      </Container>
      <ToastContainer position="top-end" className="p-3">
        <PosToast toastList={toastList} setToastList={setToastList} />
      </ToastContainer>
    </>
  );
};

export default Pos;
