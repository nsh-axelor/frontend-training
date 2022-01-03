import React, { useState } from 'react'
import Button from './ButtonComponent/Button';
import CalendarComponent from './CalendarComponent/CalendarComponent';
import TimeInput from './TimeInput/TimeInput';

const Calendar = () => {
    const today = new Date();

    const [month, setMonth] = useState(today.getMonth())
    const [year, setYear] = useState(today.getFullYear())



    const increaseMonthByOne = () => {
        if(month === 11){
            setMonth(0)
            setYear(year + 1)
        }
        else{
            setMonth(month + 1)
        }
    }

    const decreaseMonthByOne = () => {
        if(month ===  0){
            setMonth(11)
            setYear(year - 1)

        }
        else{
            setMonth(month - 1)
        }
    }

    return (
        <div>
            <TimeInput year={year} month={month} setMonth={setMonth} setYear={setYear} />
            <CalendarComponent year={year} month={month} />
            <Button text = "Prev" handleOnClick = {decreaseMonthByOne}/>
            <Button text = "Next" handleOnClick = {increaseMonthByOne}/>
        
        </div>
    )
}


export default Calendar;
