import React from "react";
import { Badge, OverlayTrigger, Popover } from "react-bootstrap";
import "bootstrap-icons/font/bootstrap-icons.css";
const CartIcon = ({
  noOfCartItems,
  renderCart
}) => {
  const popover = (
    <Popover
      style={{
        maxWidth: "320px",
        minWidth: "320px",
      }}
    >
      <Popover.Header as="h3">Cart</Popover.Header>
      <Popover.Body>
        {renderCart()}
      </Popover.Body>
    </Popover>
  );

  const icon = (
    <span>
     <i class="bi bi-cart"></i>
      {noOfCartItems > 0 && (
        <Badge bg="danger" pill className="cart-icon">
          {noOfCartItems}
        </Badge>
      )}
    </span>
  );

  return (
    <OverlayTrigger trigger="click" placement="bottom" overlay={popover}>
     {icon}
    </OverlayTrigger>
  );
  
};

export default CartIcon;
