import React, { useState } from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import CartIcon from "./CartIcon";
import "./Navbar.css";

const PosNavbar = ({
  categories,
  brandName,
  noOfCartItems,
  filterByCategory,
  handleShowModal,
  addToCart,
  removeFromCart,
  cart,
  showModal,
  clearCart,
  sortBy
}) => {
  const [category, setCategory] = useState("all");
  const transformText = (text) => {
    let transformedText = text[0].toUpperCase() + text.substring(1) + "s";
    return transformedText;
  };
  const onCategorySelect = (c) => {
    setCategory(c);
    filterByCategory(c);
  };
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container fluid>
          <Navbar.Brand>{brandName}</Navbar.Brand>
          <Nav
            className="me-auto"
            activeKey={category}
            onSelect={(selectedKey) => onCategorySelect(selectedKey)}
          >
            <Nav.Link eventKey="all">All</Nav.Link>
            {categories.map((category) => (
              <Nav.Link key={category} eventKey={category}>
                {transformText(category)}
              </Nav.Link>
            ))}
            <NavDropdown title="Sort" onSelect={(s) => sortBy(s)}>
              <NavDropdown.Item eventKey={"title"} >By Title</NavDropdown.Item>
              <NavDropdown.Item eventKey={"price"} >By Price</NavDropdown.Item>
              <NavDropdown.Item eventKey={"category"} >By Category</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item eventKey={"id"}>Clear</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
              <CartIcon
                noOfCartItems={noOfCartItems}
                handleShowModal={handleShowModal}
                addToCart={addToCart}
                removeFromCart={removeFromCart}
                clearCart={clearCart}
                showModal={showModal}
                cart={cart}
              />
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default PosNavbar;
