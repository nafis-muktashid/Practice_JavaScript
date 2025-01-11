//
//
// Needed to install new npm package called prompt-sync
// run "npm install prompt-sync"
// make a prompt variable and use it as Cin.
//
//
//
const prompt = require("prompt-sync")();

const num = prompt("Enter a Number");

if (num % 2 == 0) {
  console.log("The number is even.");
} else {
  console.log("The number is odd.");
}
