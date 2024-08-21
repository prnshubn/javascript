/* 
    Prompt the user to enter their full name. Generate a username for them based on the input.
    eg: inputs: fullname = "shradhakhapra", number: "13"
        output: username should be "@shradhakhapra13"
*/

let name = prompt("Enter name");
let number = prompt("Enter number");
let username = `@${name}${number}`;
console.log("username is ", username);
