import React from 'react';
import "./TimeInput.css"

const TimeInput = ({ month, year, setMonth, setYear }) => {

    // Months objects
    const months = {
        0: "January",
        1: "February",
        2: "March",
        3: "April",
        4: "May",
        5: "June",
        6: "July",
        7: "August",
        8: "September",
        9: "October",
        10: "November",
        11: "December"
    }

    // Creating array of OPTION tag
    const keys = Object.keys(months)
    const options = []

    keys.forEach((key) => {
        options.push(<option value={key} key={key}>{months[key]}</option>)
    })

    // Handling Month Change
    const handleMonthChage = (e) => {
        setMonth(Number(e.target.value))
    }

    // Handling Year Change
    const handleYearChange = (e) => {
        setYear(Number(e.target.value))
    }



    return (
        <div className='timeInput'>
            <select value={month} className="input" onChange={handleMonthChage} name="" id="month_select">
                {options}
            </select>
            <input className="input" onChange={handleYearChange} type="number" value={year} name="year" id="year_input" required></input>
        </div>
    )
}

export default TimeInput;