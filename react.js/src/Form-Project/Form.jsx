import React, { useState } from "react";
import "./Form.css";
import InputLabel from "./InputLabel";

const servers = ["Server 1", "Server 2", "Server 3", "Server 4"];
const roles = ["Admin", "Engineer", "Manager", "Guest"];
const checkboxes = [
  {
    name: "mail",
    label: "Mail",
  },
  {
    name: "payRoll",
    label: "Payroll",
  },
  {
    name: "selfService",
    label: "Self-Service",
  },
];

function Form() {
  const [formDetails, setFormDetails] = useState({
    userName: "",
    password: "",
    city: "",
    server: "",
    role: "",
    mail: false,
    payRoll: false,
    selfService: false,
  });

  const handleFormInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    // if (e.target.type === "checkbox") {
    //   formDetails[e.target.name] = !(formDetails[e.target.value])
    // } else {
    //   formDetails[e.target.name] = e.target.value;
    // }

    e.target.type === "checkbox"
      ? (formDetails[name] = !formDetails[name])
      : (formDetails[name] = value);
  };

  // For handling radio button
  // const handleOnClickRole = (event) => {
  //   setFormDetails({ ...formDetails, role: event.target.value });
  //   console.log(formDetails);
  // };

  // For Handling checkbox value
  // const handleOnClickCheckbox = (event) => {
  //   let clickedCheckboxValue = event.target.value;
  //   let currentCheckBox = formDetails.checkbox;

  //   if (currentCheckBox.indexOf(clickedCheckboxValue) !== -1) {
  //     const newCheckBox = currentCheckBox.filter(
  //       (value) => value !== clickedCheckboxValue
  //     );
  //     setFormDetails({ ...formDetails, checkbox: newCheckBox });
  //   } else {
  //     setFormDetails({
  //       ...formDetails,
  //       checkbox: [...currentCheckBox, clickedCheckboxValue],
  //     });
  //   }
  // };

  // This method is used for Validation of Password filed
  const validateForm = (e) => {
    // Helper Function
    let password = formDetails.password;
    function isAnyNumber(char) {
      var numArray = Array.from("0123456789");
      return numArray.includes(char);
    }
    // Fetching password
    let arrayPassword = password.split("");
    if (!arrayPassword.some(isAnyNumber) || !(arrayPassword.length >= 8)) {
      e.preventDefault();
      alert(
        "Password should have atleast 8 character and it should include atleast 1 digit"
      );
    }
  };

  return (
    <div>
      <h1>Projec-1 Form</h1>
      <form onSubmit={validateForm}>
        {/* Username Input */}
        <div className="input">
          <InputLabel label="Username : " />
          <input
            type="text"
            name="userName"
            placeholder="Enter Your Username Here"
            onChange={handleFormInput}
            required
          />
        </div>

        {/* Password Input */}
        <div className="input">
          <InputLabel label=" Password :" />
          <input
            type="password"
            name="password"
            placeholder="Enter Your Password Here"
            onChange={handleFormInput}
            required
          />
        </div>

        {/* Employeement Input */}
        <div className="input">
          <InputLabel label=" City Of Employeement :" />

          <div>
            <input
              type="text"
              name="city"
              placeholder="Enter Your City Of Employeement"
              onChange={handleFormInput}
            />
          </div>
        </div>

        {/*Select Server Input */}
        <div className="input">
          <InputLabel label="Web Server :" />

          <select
            name="server"
            defaultValue="default"
            onChange={handleFormInput}
          >
            <option value="default" disabled>
              Choose Your Server
            </option>
            {servers.map((server) => (
              <option key={server} value={server}>
                {server}
              </option>
            ))}
          </select>
        </div>

        {/* Role Radio Button Input */}
        <div className="input">
          <InputLabel label="Please Specify Your Role :" />

          <div className="radiobuttons">
            {roles.map((role) => (
              <div key={role}>
                <input
                  type="radio"
                  name="role"
                  value={role}
                  onChange={handleFormInput}
                />
                <label htmlFor="">{role}</label>
                <br />
              </div>
            ))}
          </div>
        </div>

        {/*Signon Checkbox Input */}
        <div className="input">
          <InputLabel label="Single Sign on to the following :" />
          <div className="checkbox">
            {checkboxes.map((checkbox) => (
              <div key={checkbox.name}>
                <input
                  type="checkbox"
                  name={checkbox.name}
                  onChange={handleFormInput}
                />
                <label>{checkbox.label}</label>
                <br />
              </div>
            ))}
          </div>
        </div>

        {/* Submit And Reset Input */}
        <div className="input">
          <InputLabel label="" />
          <input type="submit" value="Login" />
          <input type="reset" value="Reset" />
        </div>
      </form>
    </div>
  );
}

export default Form;
