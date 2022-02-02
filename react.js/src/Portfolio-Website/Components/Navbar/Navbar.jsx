import React from "react";
import { Link } from "react-router-dom";
import NavLink from "./NavLink";
import "./Navbar.css";

const navLinks = [{name:"Home",address:"/"}, {name:"Projects",address:"/projects"}, {name:"About",address:"/about"}, {name:"Contact",address:"/contact"}];
function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar-content">
        <h1 className="name">
          <Link to="/">Nandit</Link>
        </h1>
        <ul>
          {navLinks.map((navLink) => (
            <NavLink link={navLink} />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
