import React from "react";
import "./Footer.css";
import SocialLink from "../SocialLink";
const socialHandles = [
  {
    link: "https://www.linkedin.com/in/nandit-shah/",
    classes: "fab fa-linkedin-in",
  },
  {
    link: "https://nanditshah105.medium.com/",
    classes: "fab fa-medium-m",
  },
  {
    link: "https://github.com/nsh-axelor/",
    classes: "fab fa-github",
  },
  {
    link: "https://www.instagram.com/",
    classes: "fab fa-instagram",
  },
];
function Footer() {
  return (
    <div className="footer">
      <div className="contact-handles">
        {socialHandles.map((socialHandle) => (
          <SocialLink link={socialHandle.link} classes={socialHandle.classes} />
        ))}
      </div>
      <p className="last-note">Made With ❤️ By Nandit</p>
    </div>
  );
}

export default Footer;
