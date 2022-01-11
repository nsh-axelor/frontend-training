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
import { Col, Container, Navbar, Row, ToastContainer } from "react-bootstrap";
import Cart from "../Cart";
import PosToast from "../Toast";


const itemData = [
  { name: "Strawberry", price: 10, imageLocation: Strawberry },
  { name: "Banana", price: 2, imageLocation: Banana },
  { name: "Apple", price: 25, imageLocation: Apple },
  { name: "Pineapple", price: 100, imageLocation: Pineapple },
  { name: "Grapes", price: 40, imageLocation: Grapes },
  { name: "Cherry", price: 8, imageLocation: Cherry },
  { name: "Red Chilly", price: 30, imageLocation: RedChilly },
  { name: "Capcicum", price: 4, imageLocation: Capcicum },
  { name: "Onion", price: 20, imageLocation: Onion },
  { name: "Mashroom", price: 12, imageLocation: Mashroom },
  { name: "Guava", price: 15, imageLocation: Guava },
  { name: "Tomato", price: 3, imageLocation: Tomato },
  { name: "Brinjal", price: 20, imageLocation: Brinjal },
  { name: "Broccoli", price: 50, imageLocation: Broccoli },
  { name: "Carrot", price: 10, imageLocation: Carrot },
];

const itemPrice = {
  "Strawberry":10.00,
  "Banana":2.00,
  "Apple":25.00,
  "Pineapple":100.00,
  "Grapes":40.00,
  "Cherry":8.00,
  "Red Chilly":30.00,
  "Capcicum":4.00,
  "Onion":20.00,
  "Mashroom":12.00,
  "Guava":15.00,
  "Tomato":3.00,
  "Brinjal":20.00,
  "Broccoli":50.00,
  "Carrot":10.00,
}

const Pos = () => {


  const [billList,setBillList] = useState([])
  
  const [billData,setBillData] = useState({
    "Strawberry":0,
    "Banana":0,
    "Apple":0,
    "Pineapple":0,
    "Grapes":0,
    "Cherry":0,
    "Red Chilly":0,
    "Capcicum":0,
    "Onion":0,
    "Mashroom":0,
    "Guava":0,
    "Tomato":0,
    "Brinjal":0,
    "Broccoli":0,
    "Carrot":0
  })

  const [showToaster,setShowToaster] = useState({
    show:false,
    name:""
  })
  return (
    <>
      {/* Navbar */}
      <Navbar bg="light">
        <Container fluid>
          <Navbar.Brand>Axelor POS</Navbar.Brand>
        </Container>
      </Navbar>

      <Container fluid>
        <Row>
          <Col md="8" style={{ padding: "10px" }}>
            <Items itemData={itemData} billData = {billData} setBillData={setBillData} billList={billList} setBillList = {setBillList} showToaster={showToaster} setShowToaster={setShowToaster}/>
          </Col>
          <Col md="4" style={{ padding: "10px" }}>
            <Cart billData={billData} itemPrice={itemPrice} billList={billList}/>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Pos;
