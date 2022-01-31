import React from "react";
import { NavLink as NLink } from "react-router-dom";
import "./NavLink.css";
const NavLink = ({ link }) => {
  return (
    <li>
      <NLink to={link.address}>{link.name}</NLink>
    </li>
  );
};

export default NavLink;
