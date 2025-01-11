//  0 - 39  = C
// 40 - 59  = B
// 60 - 69  = A-
// 70 - 79  = A
// 80 - 100 = A+
// These are the grading policy

let number = 80;

if (number >= 0 && number < 40) {
  console.log("You got C grade.");
} else if (number >= 40 && number < 60) {
  console.log("You got B grade.");
} else if (number >= 60 && number < 70) {
  console.log("You got A- grade.");
} else if (number >= 70 && number < 80) {
  console.log("You got A grade.");
} else if (number >= 80 && number < 100) {
  console.log("You got A+ grade.");
} else {
  console.log("Invalid number");
}
