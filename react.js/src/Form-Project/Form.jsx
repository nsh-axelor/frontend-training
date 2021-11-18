import React, { useState } from 'react'
import "./Form.css"
function Form() {

    const [password, setPassword] = useState('')

    // This method is used for Validation of Password filed
    const validateForm = (e) =>  {

        // Helper Function
        function isAnyNumber(char) {
          var numArray = Array.from("0123456789");
          return numArray.includes(char);
        }
        // Fetching password
        let arrayPassword = password.split('')
        if (
          !(arrayPassword.some(isAnyNumber)) ||
          !(arrayPassword.length >= 8)
        ) {
            e.preventDefault()
            console.log("Hello");
            alert("Password should have atleast 8 character and it should include atleast 1 digit");
        }
    }

    return (
        <div>
            <h1>Projec-1 Form</h1>
            <form onSubmit={validateForm}>
                {/* Username Input */}
                <div className="input">
                    <div className="label" htmlFor="username">Username :</div>
                    <input
                        type="text"
                        name="username"
                        placeholder="Enter Your Username Here"
                        id="username"
                        required
                    />
                </div>

                {/* Password Input */}
                <div className="input">
                    <div className="label" htmlFor="password">Password :</div>
                    <input
                        type="password"
                        name="password"
                        placeholder="Enter Your Password Here"
                        id="password"
                        required
                        onChange={event => setPassword(event.target.value)}                        
                    />
                </div>

                {/* Employeement Input */}
                <div className="input">
                    <div className="label" htmlFor="city">City Of Employeement :</div>
                    <div>
                        <input
                            type="text"
                            name="city"
                            placeholder="Enter Your City Of Employeement"
                        />
                    </div>
                </div>

                {/*Select Server Input */}
                <div className="input">
                    <div className="label">Web Server :</div>
                    <select name="server" defaultValue='default'>
                        <option value="default" disabled>Choose Your Server</option>
                        <option value="server1">Server 1</option>
                        <option value="server3">Server 2</option>
                        <option value="server4">Server 3</option>
                        <option value="server4">Server 4</option>
                    </select>
                </div>


                {/* Role Radio Button Input */}
                <div className="input">
                    <div className="label" htmlFor="">Please Specify Your Role :</div>
                    <div className="radiobuttons">
                        <input type="radio" name="role" value="Admin" />
                        <label htmlFor="">Admin</label>
                        <br />
                        <input type="radio" name="role" value="Engineer" />
                        <label htmlFor="">Engineer</label>
                        <br />
                        <input type="radio" name="role" value="Manager" />
                        <label htmlFor="">Manager</label>
                        <br />
                        <input type="radio" name="role" value="Admin" />
                        <label htmlFor="">Admin</label>
                    </div>
                </div>

                {/*Signon Checkbox Input */}
                <div className="input">
                    <div className="label">Single Sign on to the following :</div>
                    <div className="checkbox">
                        <input type="checkbox" name="signon" value="Mail" />
                        <label>Mail</label>
                        <br />
                        <input type="checkbox" name="signon" value="Payroll" />
                        <label>Payroll</label>
                        <br />
                        <input type="checkbox" name="signon" value="Self-Service" />
                        <label>Self-Service</label>
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
    )
}

export default Form
