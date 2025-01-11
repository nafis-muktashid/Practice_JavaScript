//
//
// Needed to install new npm package called prompt-sync
// run "npm install prompt-sync"
// make a prompt variable and use it as Cin.
//
//
//
const prompt = require("prompt-sync")();

const num = prompt("Enter a year: ");

if (num % 400 == 0) {
  console.log("This is a leap year.");
} else if (num % 4 == 0 && num % 100 != 0) {
  console.log("This is a leap year");
} else {
  console.log("This is not a leap year.");
}
