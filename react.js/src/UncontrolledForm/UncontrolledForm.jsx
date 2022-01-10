import React, { useRef } from "react";
import "./UncontrolledForm.css";
import Input from "./Input";
import InputLabel from "./InputLabel";
import Select from "./Select";

const servers = ["Server 1", "Server 2", "Server 3", "Server 4"];

const roles = [
  { name: "admin", label: "Admin" },
  { name: "engineer", label: "Engineer" },
  { name: "manager", label: "Manager" },
  { name: "guest", label: "Guest" },
];

const checkboxes = [
  { name: "mail", label: "Mail" },
  { name: "payRoll", label: "Payroll" },
  { name: "selfService", label: "Self-Service" },
];

function UncontrolledForm() {
  const formDetails = useRef({});

  const getInputRef = (e, name) => {
    formDetails.current[name] = e;
  };

  // This method is used for Validation of Password filed
  const validateForm = (e) => {
    // Helper Function
    let password = formDetails.current.password.value;
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
      <h1>Uncontrolled form</h1>
      <form onSubmit={validateForm}>
        {/* Username Input */}
        <Input
          label="Username : "
          type="text"
          name="userName"
          placeholder="Enter Your Username Here"
          inputRef={(e) => getInputRef(e, "userName")}
          isRequired={true}
          classes={["input"]}
        />

        {/* Password Input */}
        <Input
          label="Password"
          type="password"
          name="password"
          placeholder="Enter Your Password Here"
          inputRef={(e) => getInputRef(e, "password")}
          isRequired={true}
          classes={["input"]}
        />

        {/* Employeement Input */}
        <Input
          label=" City Of Employeement :"
          type="text"
          name="city"
          placeholder="Enter Your City Of Employeement"
          inputRef={(e) => getInputRef(e, "city")}
          classes={["input"]}
        />

        {/*Select Server Input */}
        <Select
          label="Web Server :"
          name="server"
          defaultValue="default"
          inputRef={(e) => getInputRef(e, "server")}
          options={servers}
        />

        {/* Role Radio Button Input */}
        <div className="input">
          <InputLabel label="Please Specify Your Role :" />
          <div className="radiobuttons">
            {roles.map(({ name, label }) => (
              <Input
                type="radio"
                name="role"
                value={name}
                inputRef={(e) => getInputRef(e, name)}
                optionLabel={label}
                key={name}
              />
            ))}
          </div>
        </div>

        <div className="input">
          <InputLabel label="Single Sign on to the following :" />
          <div className="checkbox">
            {checkboxes.map(({ name, label }) => (
              <Input
                classes={[]}
                key={name}
                type="checkbox"
                name={name}
                inputRef={(e) => getInputRef(e, name)}
                optionLabel={label}
              />
            ))}
          </div>
        </div>

        {/* Submit And Reset Input */}
        <div className="input">
          <InputLabel label="" />
          <Input type="submit" value="Login" />
          <Input type="reset" value="Reset" />
        </div>
      </form>
    </div>
  );
}

export default UncontrolledForm;
