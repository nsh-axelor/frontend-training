// Getting todays date
var today = new Date()

document.addEventListener('load',displayCalendar(today.getMonth()))

function displayCalendar(month){
    // Getting given months day-1 date
    var date = new Date(today.getFullYear(),month);

    // How Many days are there in that perticular month
    var daysInMonth = 32 - new Date(today.getFullYear(),month, 32).getDate();


    const calender = document.createElement('tbody');
    for(let i = 0;i<=6;i++){
        calender.appendChild(document.createElement('tr'))
    }

    const calendarTable = document.getElementById("calendar_table")


    if(calendarTable.children[1] != null){
        calendarTable.removeChild(calendarTable.children[1])
    }
    calendarTable.appendChild(calender)



    let row = 0
    let k = 1
        if(date.getDay() != 0){
            for(var i =0;i<date.getDay();i++){
                const td = document.createElement("td");
                calender.children[0].appendChild(td)
            }
        }

        while(k <= daysInMonth){
            for(var i = 0;i<=6;i++){
                if (calender.children[row].childElementCount >=7 ){
                    row ++;
                    break
                }

                const td = document.createElement("td");
                const textNode = document.createTextNode(k)
                k++
                td.appendChild(textNode)
                calender.children[row].appendChild(td)

                if(k >= daysInMonth){
                    break
                }
            }
        }
}





let monthSelect = document.getElementById("month_select");
monthSelect.addEventListener('change',handleOnChange)
function handleOnChange(){
    displayCalendar(Number(monthSelect.value));
}