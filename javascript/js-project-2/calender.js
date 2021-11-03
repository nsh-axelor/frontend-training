// Getting todays date
var today = new Date()
let monthSelect = document.getElementById("month_select");
const calendarTable = document.getElementById("calendar_table")


document.addEventListener('load', handleOnLoad())

// Function for loading the calendar
function handleOnLoad(){
    monthSelect.children[today.getMonth()].selected = 'selected'
    displayCalendar(today.getMonth())
}


function displayCalendar(month) {
    // How Many days are there in that perticular month
    var daysInMonth = 32 - new Date(today.getFullYear(), month, 32).getDate();

    var date = new Date(today.getFullYear(), month);

    // Creating Table Body and 7 TR elements 
    const calender = document.createElement('tbody');
    for (let i = 0; i <= 6; i++) {
        calender.appendChild(document.createElement('tr'))
    }


    // If Table Body of another month is there then remove that table body
    if (calendarTable.children[1] != null) {
        calendarTable.removeChild(calendarTable.children[1])
    }

    // Append Table body to the the table 
    calendarTable.appendChild(calender)

    let row = 0
    let k = 1

    // If 1st day of month is not the sunday than fill that cell with empty space
    if (date.getDay() != 0) {
        console.log(date);
        for (var i = 0; i < date.getDay(); i++) {
            const td = document.createElement("td");
            calender.children[0].appendChild(td)
        }
    }

    // Main Calendar Loop 
    while (k <= daysInMonth) {
        for (var i = 0; i <= 6; i++) {
            
            if (calender.children[row].childElementCount >= 7) {
                row++;
                break
            }

            const td = document.createElement("td");
            const textNode = document.createTextNode(k)
            k++
            td.appendChild(textNode)
            calender.children[row].appendChild(td)

            if (k >= daysInMonth) {
                break
            }
        }
    }
}


monthSelect.addEventListener('change', handleOnChange)
function handleOnChange() {
    displayCalendar(Number(monthSelect.value));
}