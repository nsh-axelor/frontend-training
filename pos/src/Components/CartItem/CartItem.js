import React from 'react'
import { Badge, ListGroup } from 'react-bootstrap'

const CartItem = ({itemQuantity,itemPrice,name}) => {
    return(
        <ListGroup.Item
        as="li"
        className="d-flex justify-content-between align-items-start"
      >
        <div className="ms-2 me-auto">
          <div className="fw-bold">{name}</div>
          {itemPrice + " x " + itemQuantity}
        </div>
        <Badge variant="primary" pill>
          {itemPrice * itemQuantity}
        </Badge>
      </ListGroup.Item>
    )
}

export default CartItem