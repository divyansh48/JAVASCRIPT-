
const prompt = require("prompt-sync")();

let a  = prompt("enter your age");
// promt will always give the string value even if you enter the integer value
console.log(typeof a);
// typecasting string to int

a = Number.parseInt(a);

console.log(a);

console.log(typeof a);
