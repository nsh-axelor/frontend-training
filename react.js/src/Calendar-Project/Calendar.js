import React, { useState } from 'react'
import Button from './ButtonComponent/Button';
import CalendarComponent from './CalendarComponent/CalendarComponent';
import TimeInput from './TimeInput/TimeInput';

const Calendar = () => {
    const today = new Date();

    const [month, setMonth] = useState(today.getMonth())
    const [year, setYear] = useState(today.getFullYear())
    const [prevDisabled, setPrevDisabled] = useState(false)
    const [nextDisabled, setNextDisabled] = useState(false)



    const increaseMonthByOne = () => {
        if(month === 11){
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



    const decreaseMonthByOne = () => {
        if(month ===  0){
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
            <TimeInput year={year} month={month} setMonth={setMonth} setYear={setYear} />
            <CalendarComponent year={year} month={month} />
            <Button text = "Prev" handleOnClick = {decreaseMonthByOne} disabled = {prevDisabled}/>
            <Button text = "Next" handleOnClick = {increaseMonthByOne} disabled = {nextDisabled}/>
        
        </div>
    )
}


export default Calendar;
