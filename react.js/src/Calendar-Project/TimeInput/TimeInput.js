import React, { useEffect } from 'react';
import "./TimeInput.css"

const TimeInput = ({month,year,setMonth,setYear}) => {
    const months = {
        0 : "January",
        1 : "February",
        2 : "March",
        3 : "April",
        4 : "May",
        5 : "June",
        6 : "July",
        7 : "August",
        8 : "September",
        9 : "October",
        10 : "November",
        11 : "December"
    }
    const keys = Object.keys(months)

    const handleMonthChage= (e) => {
        setMonth(e.target.value)
    }


    const handleYearChange= (e) => {
        setYear(e.target.value)
    }

    const options = []
    keys.forEach((key) => {
        if(key == month){
            options.push(<option value={key} selected key = {key}>{months[key]}</option>  )
        }else{
            options.push(<option value={key} key = {key}>{months[key]}</option>)
        }
           
    })

    // console.log(<input className="input" onChange= {handleYearChange} type="number" value={year} name="year" id="year_input" required></input>);
    return(
        <div className='timeInput'>
            <select className="input" onChange={handleMonthChage} name="" id="month_select">
                {/* <option value="0">January</option>
                <option value="1">February</option>
                <option value="2">March</option>
                <option value="3">April</option>
                <option value="4">May</option>
                <option value="5">June</option>
                <option value="6">July</option>
                <option value="7">August</option>
                <option value="8">September</option>
                <option value="9">October</option>
                <option value="10">November</option>
                <option value="11">December</option> */}
                {options}
            </select>
            <input className="input" onChange= {handleYearChange} type="number" value={year} name="year" id="year_input" required></input>
        </div>       
    )
}

export default TimeInput;