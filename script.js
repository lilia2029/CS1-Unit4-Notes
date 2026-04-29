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

/*FUNCTIONS:
  Reusable sets of code statements that perform a specific task/process
 */
//console.log is a built in FUNCTION we use a lot
//TASK: display data in console
console.log("I just used a function!");
//some functions need PARAMETERS (input)

//DEFINE (create) your own function
function skincare() {
    //STATEMENTS (actions) to exectue for this routine
    console.log("1.cleanse");
    console.log("2.Apply serums");
    console.log("3.moisturize");
}
//CALL the function to use it!
skincare();

//4 types of FUNCTIONS:
//input - yes or no? output - yes or no?

//SANDWICH - need input, provide output
// If you need input, list the (parameters)
function makeSandwich(filling, sauce, bread){
    //put the ingredients together
    let sandwich;
    sandwich = filling + " and " + sauce + " on " + bread;
    //if you give output use the word RETURN
    return sandwich;
}

//using a function with input 
// means YOU need to provide arguments in parenthesis
let mySandwich = makeSandwich("ham","mustard","brioche");
console.log(mySandwich);

/*Selection/ranching (CONDITIONALS)
a boolean expression is like a QUESTION
that has a boolean ANSWER (ture/false) */
console.log(5 < 28); //true is the answer
console.log("is 10 greater than 20");
console.log(10 > 20); //false

//check EQUALITY using == operator (or ===)
console.log(1 == 1);
console.log(1 != 5); //true (!= NOT equal)

// example: password matching
let password = "1234";
console.log("checking if the string matches the stored password")
console.log("heloobeautiful" == password);

//Using comparison operators with Strings
console.log("Lili" > "Amelie"); // L comes later than A, considered "greater than"
console.log("tova" < "Tova"); //false, t comes later than T 
// (based on ASCII table/like Alphabet)

//IF STATEMENTS use conditions to make decisions 
//conditions can be blooleans, or boolean expressions
let userAge = 16;
if (userAge >= 17){
    //code in curly brackets on runs if true
    console.log("you can get your NY license!");
    
}
//ELSE-IF BLOCKs test multiple options
else if(userAge == 16){
    console.log("You can get your learners permit!");
}

//ELSE BLOCK accounts for the "otherwise" case
else{
    console.log("to young to drive");
}
