import React from "react";
import { Toast as BsToast } from "react-bootstrap";

const Toast = ({ toastList, onClose }) => {
  return toastList.map(({ name, key }) => (
    <BsToast
      key={key}
      onClose={() => {
        onClose(key);
      }}
      delay={3000}
      autohide
    >
      <BsToast.Header>
        <strong className="me-auto">{name}</strong>
        <small>Just Now</small>
      </BsToast.Header>
      <BsToast.Body>Added successfully</BsToast.Body>
    </BsToast>
  ));
};

export default Toast;
