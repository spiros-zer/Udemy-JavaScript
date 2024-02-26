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
