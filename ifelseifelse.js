const prompt = require("prompt-sync")();


let a  = prompt("enter the age: ")

if (a<0) {
    console.log("this is an invalid age")
}
else if (a<9) {
    console.log("you are a kid")
}
else if(a<18 && a>=9){
    console.log("you are a kid")
}
else{
    console.log("you can drive")
}