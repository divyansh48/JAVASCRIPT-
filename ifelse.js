const prompt = require("prompt-sync")();


let a  = prompt("enter the age: ")
a = Number.parseInt(a);
if (a==0) {
    console.log("this is invalid age")
}
else{
    console.log("this is the valid age")
}