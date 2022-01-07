import React, { useState } from "react";
import "./Form.css";
import Input from "./Input";
import InputLabel from "./InputLabel";
import Select from "./Select";

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

  const handleInputChange = (e) => {
    let { value, name, type, checked } = e.target;

    setFormDetails({
      ...formDetails,
      [name]: type === "checkbox" ? checked : value,
    });

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
          handleChange={handleInputChange}
          isRequired={true}
          classes={["input"]}
        />

        {/* Password Input */}
        <Input
          label="Password"
          type="password"
          name="password"
          placeholder="Enter Your Password Here"
          handleChange={handleInputChange}
          isRequired={true}
          classes={["input"]}
        />

        {/* Employeement Input */}
        <Input
          label=" City Of Employeement :"
          type="text"
          name="city"
          placeholder="Enter Your City Of Employeement"
          handleChange={handleInputChange}
          classes={["input"]}
        />

        {/*Select Server Input */}
        <Select
          label="Web Server :"
          name="server"
          defaultValue="default"
          handleChange={handleInputChange}
          options={servers}
        />

        {/* Role Radio Button Input */}
        <div className="input">
          <InputLabel label="Please Specify Your Role :" />
          <div className="radiobuttons">
            {roles.map((role) => (
              <Input
                type="radio"
                name="role"
                value={role}
                handleChange={handleInputChange}
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
                handleChange={handleInputChange}
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
