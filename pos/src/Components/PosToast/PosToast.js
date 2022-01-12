import React from "react";
import { Toast } from "react-bootstrap";

const PosToast = ({ toastList, setToastList }) => {
  return toastList.map(({ name, key }) => (
    <Toast
      key={key}
      onClose={() => {
        setToastList(toastList.filter((item) => item.key !== key));
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
