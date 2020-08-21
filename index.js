// Contents: 
// Variables, Loops, Functions, IF/ELSE, 
// Switchs, Peramiters, Objects, JS Methods
// Async-Functions, Constructors, Arrow func(s)
// let-VS-var, global/local scope, "this"
// ES6-Classes, array.find(ES6), array.findIndex(ES6)
// ES6-Default params, hoisting


// Variables
var string = "string"; // string value (letters)
var intiger = 2; // number
var array = ["zero", "one", "two"]; // can hold int, string, bol
var bol = true; // OR false
const hello = "cant change" // a "const" variable cant change

// Loops
for(var i = 0; i <= 5; i++) {
    // console.log("Count: " + i)
}

while(1 < 5) {
    // console.log("something")
    break;
}

// Function
function printSomething() {
    console.log("something")
} // call function "printSomething()"


// if/else
function ifElse() {
    var x = 10
    var y = 10

    if(x == y) {
        console.log("values match")
    } else {
        console.log("values do NOT match")
    }
} // call function "ifElse()"


// Switch Statement
var argument = 10;
switch(argument) {
    case 9:
        console.log("9")
        break;
    case 10:
        console.log("10") 
        // prints 10 because argements matches this case
        break;
    default:
        console.log("No matches")
}