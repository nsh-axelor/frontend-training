import React from "react";
import ItemCard from "../ItemCard";
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
import { Col, Container, Navbar, Row } from "react-bootstrap";

const itemData = [
  { name: "Strawberry", price: 10, imageLocation: Strawberry },
  { name: "Banana", price: 2, imageLocation: Banana },
  { name: "Apple", price: 25, imageLocation: Apple },
  { name: "Pineapple", price: 10, imageLocation: Pineapple },
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
  { name: "Carrot", price: 102, imageLocation: Carrot },
];

const Pos = () => {
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
            <Items itemData={itemData} />
          </Col>
          <div className="col-md-4" style={{ padding: "10px" }}>
            Hello
          </div>
        </Row>
      </Container>
    </>
  );
};

export default Pos;
