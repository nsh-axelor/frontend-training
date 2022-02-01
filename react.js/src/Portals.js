import React from "react";
import ReactDOM from "react-dom";
function Portals() {
  return ReactDOM.createPortal(
    <div style={{ backgroundColor: "green" }}>Portal Example</div>,
    document.getElementById("portal")
  );
}

export default Portals;
