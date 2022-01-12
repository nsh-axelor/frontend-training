import React from "react";
import { Toast } from "react-bootstrap";
const PosToast = ({ showToaster, setShowToaster, name }) => {
  return (
    <Toast
      onClose={() => setShowToaster({ ...showToaster, ["show"]: false })}
      show={showToaster.show}
      delay={3000}
      autohide
    >
      <Toast.Header>
        <strong className="me-auto">{name}</strong>
        <small>Just Now</small>
      </Toast.Header>
      <Toast.Body>Added successfully</Toast.Body>
    </Toast>
  );
};

export default PosToast;
