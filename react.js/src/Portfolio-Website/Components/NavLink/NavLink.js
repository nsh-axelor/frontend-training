import React from "react";
import "./NavLink.css";
const NavLink = ({ value }) => {
  return (
    <li>
      <a href="/">{value}</a>
    </li>
  );
};

export default NavLink;
