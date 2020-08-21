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


// Peramiters
function peramiters(peram) {
    // prints whats passed to it by "peram"
    console.log(peram)
}
// takes "Corbin" && 10 and sends it to the peramiters function
peramiters("I am a peramiter") 
peramiters(10)



// Objects
var funObj = {
    truck: "Tundra",
    car: "Camry",
    fast: function() {
        return console.log("120mph")
    }
}
console.log(funObj.fast)


// passing a function as a peramiter
function first() {
    return "hello!"
}
function second(peram) {
    console.log("HELLO .. " + peram)
}
second(first()) // passed function in as a peramiter



// passing a string value to a function
function howFun(humm) {
    if(humm === "HI") {
        console.log("match")
    }
    else {
        console.log("Not matched")
    }
}
howFun("HI") // matched
howFun("hi") // not matched



// Splice Method
var example = [1, 2, 3, 4, 5]
var result = example.splice(0, 4) // example starts at the "0" index and deletes anything after the second argument (ex: 4)
console.log(result)



// async & non aysinc functions
async function takesTwoSeconds() {
    // JS async function allows our code to run without stopping and waiting for a single function to finish (API etc.)
    setTimeout(function(){ console.log("Hello"); }, 2000);
}
takesTwoSeconds()

function notAsync() { // this function will finish first because async allows us to run code block without waiting
    // Non async function must finish the function instructions before moving on to a new code block or function.
    console.log("Non Async")
}
notAsync()



// Constructor Function
function Person(phone, email, name, age) { // reusable object we can construct using the "new Person()" keyword
    this.phone = phone;
    this.email = email;
    this.name = name;
    this.age = age
}
var corbin = new Person("801-427-1089", "corbinbrckbnk76@gmail.com", "Corbin Brockbank", "24");
console.log(corbin)



// Arrow Function(s)
arrow = () => { // arrow function
    console.log("Arrow Function () =>");
}
arrow()

arrow2 = (value) => {
    console.log("Arrow Func w/parameter: " + value)
}
arrow2("HI!")



// let vs var
// let variables are blocked scopes ()
// The var variables belong to the global scope or local scope if they are declared inside a function:
var counterVar = 10 // can be reassigned
counterVar = 15
console.log("var: " + counterVar) // returns 15

let counterLet = 10 // let cannot be reassigned
// let counterLet = 15
console.log(counterLet) // throws error if reassigned




// Global scope vs local scope
var global = "globalScope" 
function canUseGlobalScope() { // can access varilables OUTSIDE of the function scope
    console.log(global)
}
canUseGlobalScope()

function globalCantAccess() { // global scope cannot access "localScope" since its declaired inside the function
    var localScope = "localScope"
}
globalCantAccess()
// console.log(localScope)




// "this" keyword
    // note: The JavaScript "this" keyword refers to the object it belongs to.
var thisIsCool = {
    firstName: "corbin",
    lastName: "Brockbank",
    fullName: function() {
        return this.firstName + " " + this.lastName
        // "this" is allowing us to access fields within our object
    }
}
console.log(thisIsCool)




// ES6 Class's
class Car { // example 1 (easy)
    constructor(carBrand) {
        this.carName = carBrand;
        return this.carName 
    }
}
corbinsCar = new Car("Toyota") // returns "Toyota"
console.log(corbinsCar)

class Truck {
    constructor(truckName) {
        this.truck = truckName
    }
    present(name) {
        return name + "I drive a Toyota " + this.truckName
    }
}
corbinsTruck = new Truck("Tundra") // returns "I drive a Toyota Tundra"





// Array.Find() ES6
    // find() allows you to search through an array and return an element that matches or meets a condition that you pass in
const people = [ // array full of objects
    {
        name: "Corbin",
        occupation: "Developer"
    },
    {
        name: "Mckell",
        occupation: "Stay at home mom"
    }
];
function isDeveloper(person) { // create a function to pass into the .find() method
    return person.occupation === "Developer";
}
console.log(people.find(isDeveloper).name) // returns the name "Corbin"
// console.log(people.find(isDeveloper)) // returns the "Corbin" object
// .reverse() returns your arguments in reverse as it goes top to bottom


// Array.findIndex(ES6) ** USING SAME ARRAY ABOVE
    // finds the index of the searched items array
console.log(people.findIndex(isDeveloper)) // returns "0" index




// ES6 Default Paramiters
    // ES6 allows function parameters to have default values.
    function myFunction(x, y = 10) {
        // y is 10 if not passed or undefined
        return x + y;
      }
      myFunction(5); // will return 15




// JS Hoisting example 
    // JS's default behavior moves all declorations to the top of the function scope
function hoisting() { // hoisting moves the variable decoloration to the top of the function scope once the code is ran
    x = 10; 
    console.log(x)
    var x; // once JS runs, this variable will be hoised to the top of the function scope (above x =10)

    // let & const variables are not hoisted
}
hoisting()

class Test {
    constructor(param) {
        this.param = param

    }
        yesSir() {
            console.log("Welcome ", this.param)
        }
}

class Admin extends Test {
    testing(user) {

        console.log("Hello,", this.param, "From ADMIN")
    }
}

var corbin = new Admin("Corbin")
corbin.testing()






