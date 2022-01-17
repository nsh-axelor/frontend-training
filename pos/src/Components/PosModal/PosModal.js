import React from "react";
import { Button, Modal } from "react-bootstrap";

const PosModal = ({
  headingTitle,
  body,
  showModal,
  handleShowModal,
  clearCart,
}) => {
  return (
    <Modal show={showModal}>
      <Modal.Header>
        <Modal.Title>Confirmation</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        Are you sure you want to clear the Shopping-Cart ?
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleShowModal}>
          Cancel
        </Button>
        <Button variant="primary" onClick={clearCart}>
          Yes
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default PosModal;
