import React, { useRef,useState } from "react";
import "./UncontrolledForm.css";
import Input from "./Input";
import InputLabel from "./InputLabel";
import Select from "./Select";

const servers = ["Server 1", "Server 2", "Server 3", "Server 4"];
const roles = ["Admin", "Engineer", "Manager", "Guest"];
let checkboxes = [
  {
    name: "mail",
    label: "Mail",
    isChecked:false
  },
  {
    name: "payRoll",
    label: "Payroll",
    isChecked:false
  },
  {
    name: "selfService",
    label: "Self-Service",
    isChecked:false
  },
];

function UncontrolledForm() {

  const [checked, setChecked] = useState({
    mail:false,
    payRoll:false,
    selfService:false
  })

  const handleClick = (e) => {
    setChecked({...checked,[e.target.name]:[e.target.checked]})
  }

  const formDetails = useRef({})

  // This method is used for Validation of Password filed
  // const validateForm = (e) => {
  //   // Helper Function
  //   let password = formDetails.password;
  //   function isAnyNumber(char) {
  //     var numArray = Array.from("0123456789");
  //     return numArray.includes(char);
  //   }
  //   // Fetching password
  //   let arrayPassword = password.split("");
  //   if (!arrayPassword.some(isAnyNumber) || !(arrayPassword.length >= 8)) {
  //     e.preventDefault();
  //     alert(
  //       "Password should have atleast 8 character and it should include atleast 1 digit"
  //     );
  //   }
  // };

  return (
    <div>
      <h1>Uncontrolled form</h1>
      <form onSubmit={(e) => {
        e.preventDefault()
        console.log(formDetails.current.userName.value)
        console.log(formDetails.current.password.value)
        console.log(formDetails.current.city.value)
        console.log(formDetails.current.server.value)
        console.log(formDetails.current.role.value)
        console.log(formDetails.current.mail.value)
        console.log(formDetails.current.payRoll.value)
        console.log(formDetails.current.selfService.value)

        }}>
        {/* Username Input */}
        <Input
          label="Username : "
          type="text"
          name="userName"
          placeholder="Enter Your Username Here"
          inputRef = {(e) => formDetails.current['userName'] = e}
          // isRequired={true}
          classes={["input"]}
        />

        {/* Password Input */}
        <Input
          label="Password"
          type="password"
          name="password"
          placeholder="Enter Your Password Here"
          inputRef = {(e) => formDetails.current['password'] = e}
          // isRequired={true}
          classes={["input"]}
        />

        {/* Employeement Input */}
        <Input
          label=" City Of Employeement :"
          type="text"
          name="city"
          placeholder="Enter Your City Of Employeement"
          inputRef = {(e) => formDetails.current['city'] = e}
          classes={["input"]}
        />

        {/*Select Server Input */}
        <Select
          label="Web Server :"
          name="server"
          defaultValue="default"
          inputRef = {(e) => formDetails.current['server'] = e}
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
                // ref={(e) => formDetails.current['role'] = e}
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
                value={checked[checkbox.name]}
                handleClick={handleClick}
                inputRef={(e) => formDetails.current[checkbox.name] = e}
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

export default UncontrolledForm;
