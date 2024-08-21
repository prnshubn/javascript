let str = "hello world!";
console.log(str);

// inbuilt length property in string (only length is a property)
let n = str.length;

// string methods (others are methods)
let strUpper = str.toUpperCase();
let strLower = str.toLowerCase();
str = str.trim();
str = str.slice(0, 5);

// to access characters from a string
let s1 = str[0]; //str[1], str[2], .....

// template literals in JS (also called string interpolation)
// first the value if calculated inside {} and then it gets converted to string
let obj = {
  item: "pen",
  price: 10,
};
// note the use of `` and not ""
let output = `The cost of ${obj.item} is ${obj.price} rupees`;
console.log(output);

// we can add here expressions as well
let addition = `This is a template litetral ${1 + 2 + 3}`;
console.log(addition);

// escape characters
// note that escape character length is always 1
// \n -> next line
// \t -> gives a tab

let a = "priyanshu"; // length will be 9
let b = "priyan\tshu"; //length will be 10
