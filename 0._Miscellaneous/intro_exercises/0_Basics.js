// --------------------------------------
// Variables, strings, numbers
// --------------------------------------
// Exercise 1 - Console and constiables

const firstName = "Anders";
const lastName = "Latif";
const finalString = "My first name is " + firstName + "and my last name is " + lastName;

// Print out the following in the console:
// My first name is Anders and my last name is Latif

console.log(finalString)

console.log("My first name is", firstName + "and my last name is", lastName)

const meesage = `My first name is ${firstName} and my last name is ${lastName}`

//3 måder af definere string på
const messageVersionOne = "";
const messageVersionTwo = '';
//Inject variabler ind i stringen. 
const messageVersionThree = ``;

// --------------------------------------
// Exercise 2 - Numbers and Strings


// Add the year plus the number
// The result should be 2022
// You cannot touch line 1 or 2

const year = "2021";
const number = 1;
const result = parseInt(year) + number;
console.log(result)

const result1 = ~~year + number;
const result2 = Number(year) + number;
const result3 = +year +number

// --------------------------------------
