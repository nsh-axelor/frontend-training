import React from "react";
import { Badge, Container, Nav, Navbar } from "react-bootstrap";

const PosNavbar = ({ brandName, noOfCartItems,onClick,category }) => {
  return (
    <Navbar bg="dark" variant="dark">
      <Container fluid>
        <Navbar.Brand>{brandName}</Navbar.Brand>
        <Nav className="me-auto" activeKey={category} onSelect={(selectedKey) => onClick(selectedKey)}>
          <Nav.Link eventKey = "all" >All</Nav.Link>
          <Nav.Link eventKey = "fruit" >Fruits</Nav.Link>
          <Nav.Link eventKey = "vegetable" >Vegetables</Nav.Link>
        </Nav>
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            <span className="cart-icon" tabIndex={1}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-cart"
                viewBox="0 0 16 16"
              >
                <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
              </svg>
              {noOfCartItems > 0 && (
                <Badge bg="danger" pill style={{
                  fontSize:'0.65em',
                  position:'relative',
                  left:'-5px',
                  top:'-10px'
                }}>
                  {noOfCartItems}
                </Badge>
              )}
            </span>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default PosNavbar;
