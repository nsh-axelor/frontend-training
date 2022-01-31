import React from "react";
import { Link, Outlet } from "react-router-dom";

function About() {
  return (
    <>
    <h1>About</h1>
      <div style={{ display: "flex", justifyContent: "space-around" }}>
        <Link to="/about/education">Education</Link>
        <Link to="/about/experience">Experience</Link>
        <Link to="/about/life">Life</Link>
      </div>
      <Outlet />
    </>
  );
}

export default About;
