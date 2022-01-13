import React from "react";
import { Toast } from "react-bootstrap";

const PosToast = ({ toastList, handleOnClose }) => {
  return toastList.map(({ name, key }) => (
    <Toast
      key={key}
      onClose={() => {
        handleOnClose(key);
      }}
      delay={3000}
      autohide
    >
      <Toast.Header>
        <strong className="me-auto">{name}</strong>
        <small>Just Now</small>
      </Toast.Header>
      <Toast.Body>Added successfully</Toast.Body>
    </Toast>
  ));
};

export default PosToast;
