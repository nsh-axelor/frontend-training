import React, { useState } from 'react'
import CalendarComponent from './CalendarComponent/CalendarComponent';
import TimeInput from './TimeInput/TimeInput';

const Calendar = () => {
    const today = new Date();

    const [month, setMonth] = useState(today.getMonth())
    const [year, setYear] = useState(today.getFullYear())
    console.log(year);
    return (
        <div>
            <TimeInput year = {year} month={month} setMonth={setMonth} setYear={setYear}/>
            <CalendarComponent />
            This is calendar Project
        </div>
    )
}


export default Calendar;
