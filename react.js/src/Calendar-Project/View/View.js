import React from 'react';
import "./View.css"



const CalendarComponent = ({ month, year }) => {

    // Array of weekdays
    const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]

    // Creating TH elemement for calendar header
    const days_th = []
    days.forEach((day) => {
        days_th.push(<th>{day}</th>)
    })


    // This function will complete calendar
    const createCalendar = (month, year) => {

        let day = 1
        const calendar_tr = []
        let calendar_td = []
        const date = new Date(year, month);
        const daysInMonth = 32 - new Date(year, month, 32).getDate();
        
        // Filling empty spaces whenever month does not start with sunday
        if (date.getDay() !== 0) {
            for (let i = 0; i < date.getDay(); i++) {
                calendar_td.push(<td empty = "true"></td>)
            }
        }

        // Filling dates with respect to their weekday
        while (day <= daysInMonth) {
            if (calendar_td.length === 7) {
                calendar_tr.push(<tr>{calendar_td}</tr>)
                calendar_td = []
            }
            calendar_td.push(<td>{day}</td>)
            if (day === daysInMonth) {
                calendar_tr.push(<tr>{calendar_td}</tr>)
            }
            day++


        }
        
        return calendar_tr
    }



    return (
        <div className='calendarComponent'>
            <table>
                <thead>
                    <tr>
                        {days_th}
                    </tr>

                </thead>
                <tbody>
                    {(year >= 1970) && (year <= 2050) && (createCalendar(month, year))}
                </tbody>
            </table>
        </div>
    )
}

export default CalendarComponent;