/** PRACTICE ASSIGNMENTS */
/*
let js = "amazing";
// Use console.log() to log results in the Google Chrome Inspector
console.log("Hello World!");
console.log(js);
*/

/** DATA TYPES */
/*
let javascriptIsFun = true; //boolean
console.log(typeof javascriptIsFun);

javascriptIsFun = "Yes!"; //string
console.log(typeof javascriptIsFun);

// declaring a variable without assigning a value will make the variable of typ undefined with undefined content
let year;
console.log(typeof year); //undefined type
console.log(year); //undefined content

console.log(typeof null); //JS legacy bug will return object but should be null instead
*/

/** LET, CONST AND VAR */
/*
let age = 30;
age = 31;
*/

/** BASIC OPERATORS */
/*
const currentYear = 2037;
const ageSpiros = now - 1996;
const ageGeorge = now - 2004;
console.log(ageSpiros, ageGeorge);

console.log(ageSpiros * 2, ageSpiros / 10, 2 ** 3); //** is the power operator

//string concatenation with + operator
const firsName = "Spiros";
const lastName = "Zervos";
console.log(firsName + " " + lastName);

//assignemnt operators = += -= -- etc
//comparison operators > < === !== etc
*/

/** BASIC OPERATORS */
/*
const firsName = "Spiros";
const lastName = "Zervos";
const spirosJob = "programmer";

const spiros = "I'm " + firsName + " " + lastName + " a " + spirosJob;
console.log(spiros);

const spirosNew = `I'm ${firsName} ${lastName} a ${spirosJob}`; //template literal introduced in ES6
console.log(spirosNew);
*/

/** TYPE CONVERSION AND COERCION */
/*
//type conversion
const inputYear = "1991";
console.log(Number(input)); // original value is not converted

//type coercion
console.log("I am " + 23 + " years old");

//mix conversion and coercion
let n = "1" + 1;
n = n - 1;
console.log(n);
*/

/** TRUTHY AND FALSY VALUES */
/*
console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean(""));
console.log(Boolean("Spiros"));
console.log(Boolean(NaN));
console.log(Boolean(null));
*/

/** EQUALITY OPERATORS */
/*
const age = 18;
if ("18" == 18) {
  console.log("You just became an adult.");
}

const favouriteNumber = prompt("What's your favourite number?");
console.log(favouriteNumber);
console.log(typeof favouriteNumber); //returns a Sting

if (favouriteNumber == 23) {
  console.log("23 is nice 😀");
} else if (Number(favouriteNumber) === 24) {
  console.log("24 is nice 😀");
} else {
  console.log(`${favouriteNumber} 24 is nice 😀`);
}
*/
