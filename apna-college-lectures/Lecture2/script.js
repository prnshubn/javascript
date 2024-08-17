// operators in JS

/* 1) Arithmatic operators (Same as Java) */
a = 10;
b = 2;
// Addition (+)
// Substraction (-)
// Multiplication (*)
// Division (/)
// Modulus (%)
// Exponentiation (**) - Different from Java
console.log("a=" + a + " & b=" + b);
console.log("a**b=" + a ** b); // returns 100

/* 2) Unary Operators (Same as Java) */
// Increment (++)
// Decrement (--)
// Can be used as post and pre like Java

/* 3) Assignment operators (same as Java) */
/* 
    =
    +=
    -=
    *=
    %=
    **=
*/

c = 14;
d = 14;
e = "14";
/* 4) Comparison Operators */
// Greater than (>)
// Less than (<)
// Greater than equals (>=)
// Less than equals (<=)
// Equal to (==)
// Not equal to (!=)
// Equal & type (===)
console.log("c=" + c + " & typeof c is " + typeof c);
console.log("d=" + d + " & typeof d is " + typeof d);
console.log("e=" + e + " & typeof e is " + typeof e);
console.log("c===d is " + (c === d)); // returns true
console.log("c===e is " + (c === e)); // returns false
console.log("c==e is " + (c == e)); // returns true - because when there are only numbers in a string
// JS automatically converts that string to number type and compares

// Not equal to & type (!==)
console.log("c!==d is " + (c !== d)); // returns false
console.log("c!==e is " + (c !== e)); // returns true

/* 5) Logical Operators */
// Logical AND (&&)
// Logical OR (||)
// Logical NOT (!)

/* 6) Ternary Operators */
// Same as Java
