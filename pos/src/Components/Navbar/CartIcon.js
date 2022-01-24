import React from "react";
import { Badge, OverlayTrigger, Popover } from "react-bootstrap";
import "bootstrap-icons/font/bootstrap-icons.css";


const CartIcon = ({
  noOfCartItems,
  Cart
}) => {
  const popover = (
    <Popover
      className="cart-popover"
    >
      <Popover.Header as="h3">Cart</Popover.Header>
      <Popover.Body>
        {Cart()}
      </Popover.Body>
    </Popover>
  );

  const icon = (
    <span>
     <i className="bi bi-cart"></i>
      {noOfCartItems > 0 && (
        <Badge bg="danger" pill className="cart-icon">
          {noOfCartItems}
        </Badge>
      )}
    </span>
  );

  return (
    <OverlayTrigger trigger="click" className="cart-popover" placement="bottom" overlay={popover}>
     {icon}
    </OverlayTrigger>
  );
  
};

export default CartIcon;
