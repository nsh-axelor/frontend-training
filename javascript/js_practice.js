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
