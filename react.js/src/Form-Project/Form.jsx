import React, { useState } from "react";
import "./Form.css";

const servers = ["Server 1", "Server 2", "Server 3", "Server 4"];
const roles = ["Admin", "Engineer", "Manager", "Guest"];
const checkboxes = ["Mail", "Payroll", "Self-service"];

function Form() {
  const [formDetails, setFormDetails] = useState({
    userName: "",
    password: "",
    cityOfEmployeement: "",
    webServer: "",
    role: "",
    checkbox: [],
  });

  const handleFormOnChange = (e) => {
    switch (e.target.id) {
      case "userName":
        setFormDetails({ ...formDetails, userName: e.target.value });
        break;
      case "password":
        setFormDetails({ ...formDetails, password: e.target.value });
        break;
      case "city":
        setFormDetails({ ...formDetails, cityOfEmployeement: e.target.value });
        break;
      case "server":
        setFormDetails({ ...formDetails, webServer: e.target.value });
        break;
      default:
    }
  };

  // For handling radio button
  const handleOnClickRole = (event) => {
    setFormDetails({ ...formDetails, role: event.target.value });
  };

  // For Handling checkbox value
  const handleOnClickCheckbox = (event) => {
    let clickedCheckboxValue = event.target.value;
    let currentCheckBox = formDetails.checkbox;

    if (currentCheckBox.indexOf(clickedCheckboxValue) !== -1) {
      const newCheckBox = currentCheckBox.filter(
        (value) => value !== clickedCheckboxValue
      );
      setFormDetails({ ...formDetails, checkbox: newCheckBox });
    } else {
      setFormDetails({
        ...formDetails,
        checkbox: [...currentCheckBox, clickedCheckboxValue],
      });
    }
  };

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
          <div className="label" htmlFor="username">
            Username :
          </div>
          <input
            type="text"
            name="username"
            placeholder="Enter Your Username Here"
            id="userName"
            required
            onChange={handleFormOnChange}
          />
        </div>

        {/* Password Input */}
        <div className="input">
          <div className="label" htmlFor="password">
            Password :
          </div>
          <input
            type="password"
            name="password"
            placeholder="Enter Your Password Here"
            id="password"
            required
            onChange={handleFormOnChange}
          />
        </div>

        {/* Employeement Input */}
        <div className="input">
          <div className="label" htmlFor="city">
            City Of Employeement :
          </div>
          <div>
            <input
              type="text"
              name="city"
              id="city"
              placeholder="Enter Your City Of Employeement"
              onChange={handleFormOnChange}
            />
          </div>
        </div>

        {/*Select Server Input */}
        <div className="input">
          <div className="label">Web Server :</div>
          <select
            id="server"
            name="server"
            defaultValue="default"
            onChange={handleFormOnChange}
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
          <div className="label" htmlFor="">
            Please Specify Your Role :
          </div>
          <div className="radiobuttons">
            {roles.map((role) => (
              <div key={role}>
                <input
                  type="radio"
                  name="role"
                  onClick={handleOnClickRole}
                  value={role}
                />
                <label htmlFor="">{role}</label>
                <br />
              </div>
            ))}
          </div>
        </div>

        {/*Signon Checkbox Input */}
        <div className="input">
          <div className="label">Single Sign on to the following :</div>
          <div className="checkbox">
            {checkboxes.map((checkbox) => (
              <div key={checkbox}>
                <input
                  type="checkbox"
                  name="signon"
                  onClick={handleOnClickCheckbox}
                  value={checkbox}
                />
                <label>{checkbox}</label>
                <br />
              </div>
            ))}
          </div>
        </div>

        {/* Submit And Reset Input */}
        <div className="input">
          <div className="label"></div>
          <input type="submit" value="Login" />
          <input type="reset" value="Reset" />
        </div>
      </form>
    </div>
  );
}

export default Form;
