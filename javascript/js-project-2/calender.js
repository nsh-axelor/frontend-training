// Getting todays date
var today = new Date()
let monthSelect = document.getElementById("month_select");
let yearInput = document.getElementById("year_input");

const calendarTable = document.getElementById("calendar_table")

document.addEventListener('load', handleOnLoad())

// Function for loading the calendar
function handleOnLoad(){
    monthSelect.children[today.getMonth()].selected = 'selected'
    yearInput.value = today.getFullYear()
    displayCalendar(today.getMonth(),today.getFullYear())
}


function displayCalendar(month,year) {
    // How Many days are there in that perticular month
    var daysInMonth = 32 - new Date(year, month, 32).getDate();

    var date = new Date(year, month);

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
    let day = 1

    // If 1st day of month is not the sunday than fill that cell with empty space
    if (date.getDay() != 0) {
        console.log(date);
        for (var i = 0; i < date.getDay(); i++) {
            const td = document.createElement("td");
            td.setAttribute("empty",true)
            calender.children[0].appendChild(td)
        }
    }

    // Main Calendar Loop 
    while (day <= daysInMonth) {
        for (var i = 0; i <= 6; i++) {
            
            if (calender.children[row].childElementCount >= 7) {
                row++;
                break
            }

            const td = document.createElement("td");
            const textNode = document.createTextNode(day)
            day++
            td.appendChild(textNode)
            calender.children[row].appendChild(td)

            if (day >= daysInMonth) {
                break
            }
        }
    }
}


monthSelect.addEventListener('change', handleOnChangeForMonth)
function handleOnChangeForMonth() {
    displayCalendar(Number(monthSelect.value),Number(yearInput.value));
}
    

yearInput.addEventListener('change',validateYearAndDisplayCalendar)
function validateYearAndDisplayCalendar(){
    let year = Number(yearInput.value);
    const nextButton = document.getElementById("next");
    const prevButton = document.getElementById("prev");
    if(year <= 1970 || year >= 3000){
        yearInput.style.backgroundColor="red"        
        yearInput.style.borderColor="red"
        prevButton.disabled = true;
        nextButton.disabled = true;
        nextButton.classList.add('diabled')
        prevButton.classList.add('diabled')
        monthSelect.disabled = true;
        alert("Enter Year Value between 1970 to 3000");
    }else{
        yearInput.style.backgroundColor="white"        
        yearInput.style.borderColor="green"
        displayCalendar(monthSelect.value,yearInput.value);
        prevButton.disabled = false;
        nextButton.disabled = false;
        nextButton.classList.remove('diabled')
        prevButton.classList.remove('diabled')
        monthSelect.disabled = false
    }
}




// Function for Next button
function nextMonth(){
    let nextMonth = Number(monthSelect.value) + 1
    let year = Number(yearInput.value)

    if(nextMonth >= 12){
        nextMonth = 0
        year += 1
    }
    console.log(nextMonth);
    yearInput.value = year
    monthSelect.children[nextMonth].selected = 'selected'
    displayCalendar(nextMonth,year);
}

// Function for Previous button
function prevMonth(){
    let prevMonth = Number(monthSelect.value) - 1 
    let year = Number(yearInput.value)
    console.log(prevMonth);
    if(prevMonth == -1){
        prevMonth = 11
        year -= 1
    }
    yearInput.value = year
    monthSelect.children[prevMonth].selected = 'selected'
    displayCalendar(prevMonth,year);
}




