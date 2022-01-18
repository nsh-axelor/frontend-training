import React from "react";
import { Button, Modal } from "react-bootstrap";

const PosModal = ({
  headingTitle,
  body,
  showModal,
  onCancel,
  onOk,
}) => {
  return (
    <Modal show={showModal}>
      <Modal.Header>
        <Modal.Title>{headingTitle}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {body}
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onCancel}>
          Cancel
        </Button>
        <Button variant="primary" onClick={onOk}>
          Yes
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default PosModal;