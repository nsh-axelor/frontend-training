import React from "react";
import "./Contact.css"

function Contact() {
  return (
    <div className="contact">
      <h1 className="heading">Contact</h1>
      <form className="contact-form" action="" autocomplete="off">
        <div className="input">
          <label className="labels">Full Name</label>
          <input
            type="text"
            name="name"
            placeholder="Enter Your Full Name Here"
          />
        </div>

        <div className="input">
          <label className="labels">Phone Number</label>
          <input
            type="number"
            name="mobile_num"
            placeholder="Enter Your Mobile Number Here"
          />
        </div>

        <div className="input">
          <label className="labels">Email Id</label>
          <input
            type="email"
            name="email_id"
            placeholder="Enter Your Email Id Here"
          />
        </div>

        <div className="input">
          <label className="labels">Message</label>
          <textarea
            name="message"
            placeholder="Enter Your Message Here"
          ></textarea>
        </div>

        <div className="input">
          <label className="labels"></label>
          <button>Send Message</button>
        </div>
      </form>
    </div>
  );
}

export default Contact;
