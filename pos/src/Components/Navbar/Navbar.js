import React, { useState } from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import CartIcon from "./CartIcon";
import "./Navbar.css";


// Sort Icon
const sortIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    fill="white"
    className="bi bi-sort-up"
    viewBox="0 0 16 16"
  >
    <path d="M3.5 12.5a.5.5 0 0 1-1 0V3.707L1.354 4.854a.5.5 0 1 1-.708-.708l2-1.999.007-.007a.498.498 0 0 1 .7.006l2 2a.5.5 0 1 1-.707.708L3.5 3.707V12.5zm3.5-9a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zM7.5 6a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5zm0 3a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1h-3zm0 3a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1h-1z" />
  </svg>
);

// Options for sorting the data
const options = [
  {
    eventKey: "title",
    title: "By Title",
  },
  {
    eventKey: "price",
    title: "By Price",
  },
  {
    eventKey: "category",
    title: "By Category",
  },
];

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
  sortBy,
}) => {

  // For transforming the categories for navbar
  const transformText = (text) => {
    let transformedText = text[0].toUpperCase() + text.substring(1) + "s";
    return transformedText;
  };

  // For getting the option that is selected currently
  const [option, setOption] = useState([""]);

  const onOptionSelect = (s) => {
    if(option === s){
      console.log("Again clicked");
    }else{
      setOption(s);
      sortBy(s);
    }

  }
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container fluid>
          <Navbar.Brand>{brandName}</Navbar.Brand>
          <Nav
            className="me-auto"
            defaultActiveKey={"all"}
            onSelect={(selectedKey) => filterByCategory(selectedKey)}
          >
            <Nav.Link eventKey="all">All</Nav.Link>
            {categories.map((category) => (
              <Nav.Link key={category} eventKey={category}>
                {transformText(category)}
              </Nav.Link>
            ))}
          </Nav>
          <Nav className="me-auto" activeKey={option}>
            <NavDropdown
              title="Sort"
              onSelect={(s) => onOptionSelect(s)}
            >
              {options.map(({ eventKey, title }) => (
                <NavDropdown.Item eventKey={eventKey} key={eventKey}>
                  {title} {sortIcon}
                </NavDropdown.Item>
              ))}
              <NavDropdown.Divider />
              <NavDropdown.Item
                onClick={() => {
                  sortBy("id");
                }}
              >
                Clear
              </NavDropdown.Item>
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
