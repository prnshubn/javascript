/* ----- first code ----- */
console.log("Hello World!");

/* ----- variables ----- */
/*  
    The 'var' keyword was used in all JavaScript code from 1995 to 2015.
    The 'var' keyword should only be used in code written for older browsers.

    The 'let' and 'const' keywords were added to JavaScript in 2015 for ES6 (ECMAScript 6).

    Use 'const' if the variable value or type should not be changed.

    var: Variable can be re-declared & updated. A global scope variable.
    let: Variable cannot be re-declared but can be updated. A block scope variable.
    const : Variable cannot be re-declared or updated. A block scope variable.
*/

let name = "Priyanshu Bandyopadhyay";
let age = 24;

console.log("My name is " + name + " and my age is " + age);

let pi = 3.14159;
let isIndian = true;

let x = null; // we know what this variable has but this is empty right now
let y = undefined; // we don't know what this variable has

console.log("Value of x is " + x + " and value of y is " + y);

/* 
    JS is a dynamically typed language.
    Unlike C++ or Java (both are staticly typed), variable type (data type) can be changed.
    You don't have to declare the the data type of the variable.
 */

console.log("Name is " + name);
name = 6969;
console.log("Same variable 'name' has changed to number - " + name);

/* ----- data types ----- */
// Primitive types : Number, String, Boolean, Undefined, Null, BigInt, Symbol
// Non-primitive types: Object (Arrays, Functions)

// example of object

const student = {
  // this is like a key:value
  name: "Priyanshu Bandyopadhyay",
  age: 24,
  gender: "Male",
  phoneNumber: 9163760725,
  isPass: true,
};

// console.log(student); -> write this line in console

console.log(typeof student); // prints the type of variable

// to access properties inside object, we use object["keys"] or object.key

console.log("Phone number from inside student: " + student["phoneNumber"]);
console.log("Phone number from inside student: " + student.phoneNumber);

/*
    Note that you can change the value of any key of an object even though object is 'const'.
    Mind that here you are changing field value and not the object itself so it is not any error.
*/

console.log("Student age before updation: " + student.age);
student.age = student.age + 1;
console.log("Student age after updation: " + student.age);
