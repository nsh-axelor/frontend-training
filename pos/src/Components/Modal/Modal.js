import React from "react";
import { Button, Modal as BsModal } from "react-bootstrap";

const Modal = ({
  headingTitle,
  body,
  showModal,
  onCancel,
  onOk,
}) => {
  return (
    <BsModal show={showModal}>
      <BsModal.Header>
        <BsModal.Title>{headingTitle}</BsModal.Title>
      </BsModal.Header>
      <BsModal.Body>
        {body}
      </BsModal.Body>
      <BsModal.Footer>
        <Button variant="secondary" onClick={onCancel}>
          Cancel
        </Button>
        <Button variant="primary" onClick={onOk}>
          Yes
        </Button>
      </BsModal.Footer>
    </BsModal>
  );
};

export default Modal;