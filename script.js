//This is a SINGLE-LINE comment

/*A MULTI-LINE comment 
The code below is an example STATEMENT (instruction/command)
Every statement ends with a SEMICOLON
*/
console.log("Welcome to JS!");

//VARIABLES are named storage containers for data, like a box

//DECLARE a variable using the keyword LET
let username;

//ASSIGN a value to a variable
username = "lili";

// DECLARE + ASSIGN in one line
let pokemon = "pikachu";
let luckyNum = 5;
luckyNum = 13;

//see value stored in variable
console.log(username);
console.log(pokemon);
console.log(luckyNum);

//MATH OPERATIONS (with numbers)
let age = 18;
let ageInTen = age + 10;
let ageInDogYears = age / 7;
console.log(age);
console.log(ageInTen);
console.log(ageInDogYears);
// You can do math with: +, -, *, /

//combine 2 "literal" Strings with CONCATINATION 
console.log("My Age is " + "age");
//combine strings with variables
console.log("My Age is " + age);
console.log("In ten years I will be " + ageInTen);
console.log("My age in dog years " + ageInDogYears);
//using the plus sign with at least 1 "string"
//means you're combining (concatination) not doing addition
