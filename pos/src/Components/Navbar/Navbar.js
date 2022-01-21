import React, { useState } from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import CartIcon from "./CartIcon";
import "./Navbar.css";

// SortUp Icon
const sortUpIcon = (
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

// SortDown Icon
const sortDownIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    fill="white"
    className="bi bi-sort-down"
    viewBox="0 0 16 16"
  >
    <path d="M3.5 2.5a.5.5 0 0 0-1 0v8.793l-1.146-1.147a.5.5 0 0 0-.708.708l2 1.999.007.007a.497.497 0 0 0 .7-.006l2-2a.5.5 0 0 0-.707-.708L3.5 11.293V2.5zm3.5 1a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zM7.5 6a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5zm0 3a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1h-3zm0 3a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1h-1z" />
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
  const [option, setOption] = useState("");
  const [reversed, setReversed] = useState(false);
  const onOptionSelect = (s) => {
    if (option === s) {
      setReversed((prevState) => {
        return !prevState;
      });
      sortBy(s, !reversed);
    } else {
      setReversed(false);
      setOption(s);
      sortBy(s, false);
    }
  };
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container fluid>
          <Navbar.Brand>{brandName}</Navbar.Brand>
          <Nav
            className="me-auto"
            defaultActiveKey={"all"}
            onSelect={(selectedKey) => {
              filterByCategory(selectedKey)
              }}
          >
            <Nav.Link eventKey="all">All</Nav.Link>
            {categories.map((category) => (
              <Nav.Link key={category} eventKey={category}>
                {transformText(category)}
              </Nav.Link>
            ))}
          </Nav>
          <Nav className="me-auto" activeKey={option}>
            <NavDropdown title="Sort">
              {options.map(({ eventKey, title }) => (
                <NavDropdown.Item
                  eventKey={eventKey}
                  key={eventKey}
                  onClick={() => onOptionSelect(eventKey)}
                >
                  {title} {reversed ? sortDownIcon : sortUpIcon}
                </NavDropdown.Item>
              ))}
              <NavDropdown.Divider />
              <NavDropdown.Item
                onClick={() => {
                  sortBy("id", false);
                  setOption("");
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
