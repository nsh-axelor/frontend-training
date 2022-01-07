import React, { useState } from "react";
import "./Form.css";
import Input from "./Input";
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
    let { value, name } = e.target;

    e.target.type === "checkbox"
      ? setFormDetails({ ...formDetails, [name]: !formDetails[name] })
      : setFormDetails({ ...formDetails, [name]: value });

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
        <Input
          label="Username : "
          type="text"
          name="userName"
          placeholder="Enter Your Username Here"
          handleChange={handleFormInput}
          isRequired={true}
          classes={["input"]}
        />

        {/* Password Input */}
        <Input
          label="Password"
          type="password"
          name="password"
          placeholder="Enter Your Password Here"
          handleChange={handleFormInput}
          isRequired={true}
          classes={["input"]}
        />

        {/* Employeement Input */}
        <Input
          label=" City Of Employeement :"
          type="text"
          name="city"
          placeholder="Enter Your City Of Employeement"
          handleChange={handleFormInput}
          classes={["input"]}
        />

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
              <Input
                type="radio"
                name="role"
                value={role}
                handleChange={handleFormInput}
                optionLabel={role}
                key={role}
              />
            ))}
          </div>
        </div>

        <div className="input">
          <InputLabel label="Single Sign on to the following :" />
          <div className="checkbox">
            {checkboxes.map((checkbox) => (
              <Input
                classes={[]}
                key={checkbox.name}
                type="checkbox"
                name={checkbox.name}
                handleChange={handleFormInput}
                optionLabel={checkbox.label}
              />
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
