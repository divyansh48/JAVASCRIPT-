const prompt = require("prompt-sync")();


// let a  = prompt("enter your age: ");

// console.log("you can", (a<18? "not drive":"drive"))
let b  = prompt("enter your age: ");
b = Number.parseInt(b)
console.log((b<10 && b>1) ? b:(b+1))
