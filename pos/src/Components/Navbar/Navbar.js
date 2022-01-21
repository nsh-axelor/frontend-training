import React, { useState } from "react";
import { Container, Nav, Navbar as BsNavbar, NavDropdown } from "react-bootstrap";
import CartIcon from "./CartIcon";
import "./Navbar.css";

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

const Navbar = ({
  categories,
  brandName,
  noOfCartItems,
  filterByCategory,
  sortBy,
  renderCart,
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
      <BsNavbar bg="dark" variant="dark">
        <Container fluid>
          <BsNavbar.Brand>{brandName}</BsNavbar.Brand>
          <Nav
            className="me-auto"
            defaultActiveKey={"all"}
            onSelect={(selectedKey) => {
              filterByCategory(selectedKey);
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
                  {title}{" "}
                  {reversed ? (
                    <i class="bi bi-sort-down"></i>
                  ) : (
                    <i class="bi bi-sort-up"></i>
                  )}
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
          <BsNavbar.Collapse className="justify-content-end">
            <BsNavbar.Text>
              <CartIcon noOfCartItems={noOfCartItems} renderCart={renderCart} />
            </BsNavbar.Text>
          </BsNavbar.Collapse>
        </Container>
      </BsNavbar>
    </>
  );
};

export default Navbar;
