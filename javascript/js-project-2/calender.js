var today = new Date() 
var date = new Date(today.getFullYear(),today.getMonth());

var daysInMonth = 32 - new Date(today.getFullYear(), today.getMonth(), 32).getDate();
console.log(daysInMonth);
console.log(date.getDay());
console.log(date.getDate());


const calender = document.getElementById("calender")
console.log(calender.children);
var j = 0;
var row = 0

if(date.getDay() != 0){
    for(var i =0;i<date.getDay();i++){
        const td = document.createElement("td");
        calender.children[row].appendChild(td)
    }
}

var k = 1
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
        if(k >= 31){
            break
        }
    }
}


console.log(calender.children);
