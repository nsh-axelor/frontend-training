import React from 'react';
import "./CalendarComponent.css"



const CalendarComponent = () => {

    const days = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"]

    const days_th = []

    const date = new Date()

    days.forEach((day) => {
        days_th.push(<th>{day}</th>)
    })


    // Creating table
    const createTable = (month,year) => {

        var day = 1
        const calendar_tr = []
        var calendar_td = []
        const daysInMonth = 32 - new Date(year, month, 32).getDate();
        console.log(daysInMonth);
        if(date.getDay() != 0){
            for(var i = 0;i<=date.getDay();i++){
                calendar_td.push(<td></td>)
            }
        }

        while (day <= daysInMonth){
            if (calendar_td.length === 7){
                calendar_tr.push(<tr>{calendar_td}</tr>)
                calendar_td = []
            }
            calendar_td.push(<td>{day}</td>)
            if(day === daysInMonth){
                calendar_tr.push(<tr>{calendar_td}</tr>)
            }
            day++


        }
        return calendar_tr
    }
    return(
        <div className='calendarComponent'>
            <table>
            <thead>
                <tr>
                    {days_th}
                </tr>

            </thead>
            <tbody>
                {createTable(date.getMonth(),date.getFullYear())}
            </tbody>
            </table>
        </div>
    )
}

export default CalendarComponent;