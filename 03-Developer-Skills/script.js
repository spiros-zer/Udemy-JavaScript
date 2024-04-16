// Remember, we're gonna use strict mode in all scripts now!
"use strict";

function printForecast(arr) {
  let outputStr = "";
  for (let i = 0; i < arr.length; i++) {
    outputStr += `... ${arr[i]} in ${i + 1} day${i + 1 > 1 ? "s" : ""} `;
  }
  console.log(outputStr);
}

printForecast([20, 20, 22, 25, 20]);
