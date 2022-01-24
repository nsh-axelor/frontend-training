import React from "react";
import {
  Container,
  Nav,
  Navbar as BsNavbar,
  NavDropdown,
} from "react-bootstrap";
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
  links,
  brandName,
  noOfCartItems,
  Cart,
  setActiveLink,
  option,
  setOption,
}) => {
  // For transforming the categories for navbar
  const transformText = (text) => {
    let transformedText = text[0].toUpperCase() + text.substring(1) + "s";
    return transformedText;
  };

  const onOptionSelect = (s) => {
    if (option.property === s) {
      setOption({ ...option, order: option.order === "ASC" ? "DESC" : "ASC" });
    } else {
      setOption({
        property: s,
        order: "ASC",
      });
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
              setActiveLink(selectedKey);
            }}
          >
            <Nav.Link eventKey="all">All</Nav.Link>
            {links.map((category) => (
              <Nav.Link key={category} eventKey={category}>
                {transformText(category)}
              </Nav.Link>
            ))}
          </Nav>
          <Nav className="me-auto" activeKey={option.property}>
            <NavDropdown title="Sort">
              {options.map(({ eventKey, title }) => (
                <NavDropdown.Item
                  eventKey={eventKey}
                  key={eventKey}
                  onClick={() => onOptionSelect(eventKey)}
                >
                  {title}{" "}
                  {option.order === "DESC" && option.property === eventKey ? (
                    <i className="bi bi-sort-down"></i>
                  ) : option.order === "ASC" && option.property === eventKey ? (
                    <i className="bi bi-sort-up"></i>
                  ) : null}
                </NavDropdown.Item>
              ))}
              <NavDropdown.Divider />
              <NavDropdown.Item
                onClick={() => {
                  setOption({ property: "id" });
                }}
              >
                Clear
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <BsNavbar.Collapse className="justify-content-end">
            <BsNavbar.Text>
              <CartIcon noOfCartItems={noOfCartItems} Cart={Cart} />
            </BsNavbar.Text>
          </BsNavbar.Collapse>
        </Container>
      </BsNavbar>
    </>
  );
};

export default Navbar;
