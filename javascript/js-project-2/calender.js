// Getting todays date
var today = new Date()

// Getting given months day-1 date
var date = new Date(today.getFullYear(),today.getMonth());

// How Many days are there in that perticular month
var daysInMonth = 32 - new Date(today.getFullYear(), today.getMonth(), 32).getDate();


const calender = document.getElementById("calender")




let row = 0
let k = 1


if(date.getDay() != 0){
    for(var i =0;i<date.getDay();i++){
        const td = document.createElement("td");
        calender.children[row].appendChild(td)
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


