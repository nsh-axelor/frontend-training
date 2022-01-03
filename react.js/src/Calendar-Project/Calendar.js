import React, { useState } from 'react'
import Button from './ButtonComponent/Button';
import CalendarComponent from './CalendarComponent/CalendarComponent';
import TimeInput from './TimeInput/TimeInput';

const Calendar = () => {
    const today = new Date();

    // Month of the calendar
    const [month, setMonth] = useState(today.getMonth())

    // Year of the calendar
    const [year, setYear] = useState(today.getFullYear())

    // For desabling buttons if it exeeds year limits.
    const [prevDisabled, setPrevDisabled] = useState(false)
    const [nextDisabled, setNextDisabled] = useState(false)



    // Handling onClick event of Next button 
    const increaseMonthByOne = () => {

        // If month is december then again set to january else just set the next month
        if(month === 11){

            // If the year is 2050 then disable the next button else just increase the year by 1
            if(year === 2050){
                setNextDisabled(true)
            }else{
                setMonth(0)
                setYear(year + 1)
            }
        }
        else{
            setMonth(month + 1)
            setPrevDisabled(false)
            setNextDisabled(false)
        }
    }



    // handling onclick event of prev button 
    const decreaseMonthByOne = () => {

        // If month is january then again set to december else just set the previous month
        if(month ===  0){

            // if the year is 1970 then disable the previous button else just decrease the year by 1
            if(year === 1970){
                setPrevDisabled(true)
            }else{
                setMonth(11)
                setYear(year - 1)
            }
        }
        else{
            setMonth(month - 1)
            setPrevDisabled(false)
            setNextDisabled(false)
        }
    }


    
    return (
        <div>

            {/* Month and Year Input Element */}
            <TimeInput year={year} month={month} setMonth={setMonth} setYear={setYear} />

            {/* Main Calendar Table Compoenent */}
            <CalendarComponent year={year} month={month} />

            {/* Previous and Next button compoenent */}
            <Button text = "Prev" handleOnClick = {decreaseMonthByOne} disabled = {prevDisabled}/>
            <Button text = "Next" handleOnClick = {increaseMonthByOne} disabled = {nextDisabled}/>
        
        </div>
    )
}


export default Calendar;
