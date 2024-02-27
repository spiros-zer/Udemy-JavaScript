/** ACTIVATING STRICT MODE */
"use strict";

let hasDriversLicense = false;
const passTest = true;

if (passTest) {
  hasDriverLicense = true;
}

//undefined variable bug
/*
if (hasDriversLicense) {
  console.log("I can drive :D");
}
*/

//reserved word bug
/*
const private = 534;
*/

/** FUNCTIONS */

function fruitProcessor(apples, oranges) {
  const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
  return juice;
}

fruitProcessor(3, 5);
const juice = fruitProcessor(3, 5);
console.log(juice);

/** FUNCTION DECLARATIONS vs. EXPRESSIONS */
//function expression
const caclAge = function (birthYear) {
  return 2037 - birthYear;
};

const age = caclAge(1996);

/** ARROW FUNCTIONS */
//arrow function
const calcAge2 = (birthYear) => 2037 - birthYear;

const yearUntilRetirement = (birthYear) => {
  const age = 2037 - birthYear;
  const retirement = 65 - age;
  return retirement;
};

/** ARRAY */
const friends = ["Spiros", "George", "Neri"];
console.log(friends); //returns length + contents

const years = new Array(1996, 2004, 2023);
console.log(years);

friends[2] = "Neritshki"; //changes the value even tho array is const
console.log(friends);

/** BASIC ARRAY OPERATIONS */
friends.push("Maschini"); //adds at the end
const popped = friends.pop(); //pops the end
console.log(popped); //pop() returns the popped element

friends.unshift("Dimitra"); //adds at the beginning
friends.shift(); //removes from beginning

console.log(friends.indexOf("Neri"));
console.log(friends.includes("Spiros")); //uses strict equality

/** INTRODUCTION TO OBJECTS */
/*
const spirosArray = ["Spiros", "Zervos", 2037 - 1996, "programmer", friends];

or

const spirosArray = [
  "Spiros",
  "Zervos", 
  2037 - 1996, 
  "programmer", 
  friends
];
*/
//but if we wanted to reference these data by what they denote - eg job, name, surname, etc - we cannot. That's why we have the object!

const spiros = {
  firstName: "Spiros",
  lastName: "Zervos",
  age: 2037 - 1996,
  job: "programmer",
  friends: friends,
};
