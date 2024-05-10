const prompt = require("prompt-sync")();


let a  = prompt("enter the fruit name: ")
switch (a) {
    case "mango":
        console.log("king of fruits")
        break;

    case "banana":
        console.log("yellow coloured fruit")
        break;
    case "grapes":
        console.log("green coloured fruit")
        break;

    default:
        console.log("you have entered the wrong fruit name")
        break;
}