const prompt = require('prompt-sync')();

let c = prompt("Enter your age:");
console.log(c);

if (c<18) {
    console.log("you are underage")
}
