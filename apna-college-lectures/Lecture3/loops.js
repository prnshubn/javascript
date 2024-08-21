// for loop
for (let i = 1; i <= 5; i++) {
  console.log("inside for loop: ", i);
}
console.log("for loop ended");

// while loop
let j = 1;
while (j <= 5) {
  console.log("inside while loop: ", j);
  j++;
}
console.log("while loop ended");

// do-while loop
let k = 1;
do {
  console.log("inside do-while loop: ", k);
  k++;
} while (k <= 5);
console.log("do-while loop ended");

// for-of loop (for-each loop in java) -> generally used for strings and arrays
let str = "string variable";
for (let s of str) {
  console.log(s);
}

// for-in loop -> generally used for objects and arrays
let student = {
  name: "Priyanshu Bandyopadhyay",
  age: 24,
  gender: "Male",
  phoneNumber: 9163760725,
  isPass: true,
};
for (let key in student) {
  console.log(key); //prints the keys of the student object
  console.log("key is ", key, " and value is ", student[key]); // for key-value pair
}
