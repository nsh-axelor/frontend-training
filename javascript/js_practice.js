// Arrow Function Example
const arrow_function = (a) => {
    console.log("Arrow Function Called " + a)
}
arrow_function("Nandit")

// Object Example
console.log("Object Example");
const intern = {
    name: "Nandit",
    surname: "Shah",
    age: 21,
    semester: 7,
    duration: "6 Months",
    cgpa: 9.50,
    fullName: function () {
        return this.name + " " + this.surname;
    }
};
console.log("Name - " + intern.name + " CGPA - " + intern["cgpa"] + " FullName - " + intern.fullName());

// String Method Examples
console.log("CharAt Example");
console.log("nandit".charAt(0));
console.log("nandit".charCodeAt(2));

console.log("Slice Example");
console.log("nandit".slice(2, 5));
console.log("nandit".slice(-5, -2));

console.log("Substring example");
var s = "Hello World"
console.log(s.substring(2, 5));


console.log("Substr Example");
console.log(s.substr(2, 5));

console.log("uppercase and lowercase example");
console.log(s.toLowerCase());
console.log(s.toUpperCase());

console.log("Split Example");
console.log(s.split(" "));

console.log("PadStart end PadEnd example");
console.log("S".padStart(30, "H"));
console.log("C".padEnd(12, "d"));



// Arrays Example
var interns = ["Nandit", "Kaif", "Kishan", "Jaydeep", "Hemang"]

console.log("toString Example");
console.log(interns.toString());

console.log("Join example");
console.log(interns.join(" ,"));

console.log("Push and Pop Example");
interns.push("Parvesh")
console.log(interns);
interns.pop()
console.log(interns);

console.log("Shift And UnShift Example")
interns.shift()
console.log(interns);
interns.unshift("Nandit")
console.log(interns);

console.log("Length Exampple")
console.log(interns.length);

console.log("Delete Example");
delete interns[interns.length - 1]
console.log(interns.toString());

console.log("Splice Example");
interns.splice(3, 0, "Harshil", "Madhusudan")
console.log(interns.toString());

console.log("Reverse The Array");
console.log(interns.reverse());

console.log("Sort Example for String");
console.log(interns.sort());

console.log("Sort Example for Numbers");
// Ascending Order
var numbers = [53, 1, 6, 67, 12, 4, 78, 23, 5]
console.log(numbers.sort((a, b) => {
    return a - b;
}))
// Decending Order
console.log(numbers.sort((a, b) => {
    return b - a;
}))



// Array Interation Example
var numbers = [53, 1, 6, 67, 12, 4, 78, 23, 5]

console.log("forEach Example");
var square_numbers = []
numbers.forEach((value) => {
    square_numbers.push(value ** 2)
})
console.log(square_numbers);


console.log("Map Example");
var square_numbers = []
numbers.forEach((value) => {
    square_numbers.push(value ** 2)
})
console.log(square_numbers);


console.log("Filter Example");
var numbers_gt_50 = numbers.filter((value) => {
    return (value > 50)
})
console.log(numbers_gt_50);


console.log("Reduce Example");
var numbers_sum = numbers.reduce((sum, value) => {
    return sum + value
})
console.log(numbers_sum);

console.log("Every Example");
var all_numbers_gt_50 = numbers.every((value) => {
    return (value > 50)
})
console.log("All numbers are greater than 50 -- " + all_numbers_gt_50);


console.log("Some Example");
var some_numbers_gt_50 = numbers.some((value) => {
    return (value > 50)
})
console.log("Some numbers are greater than 50 -- " + some_numbers_gt_50);


// Date Example
function getDateAndTime() {
    var d = new Date()
    var info = `Date -- ${d.getDate()} || Month -- ${d.getMonth()} || Year -- ${d.getFullYear()} || Day -- ${d.getDay()} || Hour -- ${d.getHours()} || Minutes -- ${d.getMinutes()} || Seconds -- ${d.getSeconds()}`
    document.getElementById("info").innerHTML = info
}



// If Example
function checkVoteEligibility(){
    const age = document.getElementById("age_check").value;
    var vote_result = document.getElementById("vote_result");
    if(age < 18){
        vote_result.innerText = "You are too small for voting"
    }else if(age >= 71){
        vote_result.innerText = "You are too old for voting"
    }else{
        vote_result.innerText = "You are elidigible for voting"
    }

}


// If Example
function checkWeekendStatus(){
    var vote_result = document.getElementById("weekend_result");
    switch(new Date().getDay()){
        case 4:
        case 5:
            vote_result.innerText = "Soon it is Weekend";
          break;
        case 0:
        case 6:
            vote_result.innerText = "It is Weekend";
          break;
        default:
            vote_result.innerText = "Looking forward to the Weekend";
    }
}


// For Exxample
const intern_list = document.getElementById("intern_list");
for(let i = 0;i<interns.length;i++){
    intern_list.innerHTML += "<li>"+interns[i]+"</li>"
}


// For of Example
const numbers_list = document.getElementById("numbers_list")
for(let number of numbers){
    numbers_list.innerHTML += "<li> Square of "+number+" is "+Math.pow(number,2)+"</li>"
}


// For In Example
const intern_data_list = document.getElementById("intern_detail");
for(let data in intern){
    intern_data_list.innerHTML += "<li> "+data+" : "+intern[data]+"</li>"
}

// While Example
function getSum(n){
    let i = 1
    let sum = 0
    while (i <= n){
        sum += i
        i++
    }
    document.getElementById("while_result").innerText = "The sum of total 1 to "+n+" number is "+sum;  
}



// Set Example
console.log("Set Example");
const set = new Set([1,2,3])
set.add(4)
set.add(1)
set.add(2)
// Size Example
console.log("Set Size Example"+set.size);
set.delete(1)
console.log(set.has(5))


// Map Example
console.log("Map Example");




// Map Example
console.log("Map Example");
var map = new Map([["name","Nandit"],["surname","Shah"],["age",21]])
map.set("semester",7)
map.set("duration","6 Months")
map.set("CGPA",9.50)
console.log(map.get('CGPA'));
console.log(map.has("CPI"));
map.delete("age")
console.log(map.has("age"));
console.log(map.size);
// Entries Example
for(entry of map.entries()){
    console.log(entry);
}



// Decimal to binary
function getBinary(decimal){
    document.getElementById("binary_result").innerHTML = (decimal >>> 0).toString(2);
} 

// Binary to decimal
function getDecimal(binary){
    document.getElementById("decimal_result").innerHTML = parseInt(binary,2).toString(10);
}


// Exception Handling
function exceptionFunction(num) {
    const message = document.getElementById("exception_result");
    message.innerHTML = "";
    try {
      if(num == "") throw "is empty";
      if(isNaN(num)) throw "is not a number";
      x = Number(num);
      if(num > 10) throw "is too high";
      if(num < 5) throw "is too low";
    }
    catch(err) {
      message.innerHTML = "Error: " + err + ".";
    }
    finally {
      document.getElementById("exception_input").value = "";
    }
}




// Class Example
console.log("Class Example");
class Intern{
    constructor(name,surname,age,frontend){
        this.name = name;
        this.surname = surname;
        this.age = age;
        this.frontend = frontend;
    }

    fullname(){
        return this.name+" "+this.surname;
    }
}
var nandit = new Intern("Nandit","Shah",20,true)
console.log("Full Name of Intern -- "+nandit.fullname());
console.log("Age of the Intern -- "+nandit.age);
console.log("Is Intern from frontend section -- "+(nandit.frontend ? "Yes" : "No"));



// Converting Simple strong to JSON object
console.log("JSON Example");
let json_string = '{"interns" : [{"name":"Shah Nandit"},{"name":"Mo Kaif"},{"name":"Jani Kishan"},{"name":"Ladva Jaydeep"}],'+
'"employees":[{"name":"Mayank Sir"},{"name":"Rohan Sir"},{"name":"Chirag Sir"}]}';
    
var json_obj = JSON.parse(json_string)

console.log(json_obj);
console.log(json_obj.interns[3].name);
console.log(json_obj.employees[1].name);
