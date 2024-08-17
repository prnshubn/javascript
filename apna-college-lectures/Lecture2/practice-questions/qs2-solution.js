/* Write a code which can give grades to students according to their score given below
 * 90 - 100 -> A
 * 80 - 89 -> B
 * 70 - 79 -> C
 * 60 - 69 -> D
 * 50 - 50 -> E
 * 0 - 49 -> F
 * other value -> Invalid
 */

let score = prompt("Enter score");
score = Number(score); // because promt function always returns a string

/*  
    When a user inputs something like "45XX", JavaScript's Number() function will try to convert 
    the string into a number. If the conversion fails due to the presence of non-numeric characters (like the "XX" in "45XX"), 
    Number(score) will return NaN (which stands for "Not-a-Number").
*/

if (score > 100 || score < 0 || isNaN(score)) {
  console.log("Invalid");
  alert("Invalid");
} else if (score > 90) {
  console.log("A");
  alert("A");
} else if (score > 80) {
  console.log("B");
  alert("B");
} else if (score > 70) {
  console.log("C");
  alert("C");
} else if (score > 60) {
  console.log("D");
  alert("D");
} else if (score > 50) {
  console.log("E");
  alert("E");
} else {
  console.log("F");
  alert("F");
}
