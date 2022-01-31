import React from "react";
import "./About.css"
function About() {
  return (
    <div>
      <div className="about">
        <h1 className="heading">About</h1>
        <div className="content">
          <p>
            I'm a MERN stack developer who loves to learn new things. Currently
            exploring various tech-related fields such as full-stack
            development, Deep learning , and machine learning.
          </p>
          <p>
            I am 21 years old, Persuing B.E (I.T) in Government Engineering
            College.I have created various project such as
            CryptoTracker,CovidTracker Etc.
          </p>
          <p>
            I have written 5 technical articles published in major publications
            on Medium with total views of more than 1500, and also 5 start
            hackerrank Pyhton and Javascript developer and have Hackerank
            certificated in Python(Basic), Javascript(Basic),Problem Solving
            (Basic).
          </p>
          <p>
            You Can Contact me on{" "}
            <a className="about-contact-link" href="mailto:nanditshah105@gmail.com">
              nanditshah105@gmail.com{" "}
            </a>{" "}
            or go to{" "}
            <a className="about-contact-link" href="../contact/contact.html">
              Contact
            </a>{" "}
            section and write a message to me
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
