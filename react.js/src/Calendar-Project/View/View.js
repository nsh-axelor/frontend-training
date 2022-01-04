import React from 'react';
import "./View.css"

// Array of weekdays
const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]

const CalendarComponent = ({ month, year }) => {

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
                calendar_td.push(<td empty = "true" key={"empty"+i}></td>)
            }
        }

        // Filling dates with respect to their weekday
        while (day <= daysInMonth) {
            if (calendar_td.length === 7) {
                calendar_tr.push(<tr key={day}>{calendar_td}</tr>)
                calendar_td = []
            }
            calendar_td.push(<td key = {day}>{day}</td>)
            if (day === daysInMonth) {
                calendar_tr.push(<tr key = {day}>{calendar_td}</tr>)
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
                        {
                            days.map((day) => (
                                (<th key={day}>{day}</th>)
                            ))
                        }
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