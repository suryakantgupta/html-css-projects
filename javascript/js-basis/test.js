

// let ctitle = document.getElementsByClassName("card-title")[0]
// ctitle.style.color = "red"

// let ctitle = document.getElementById("first-card-title")
// ctitle.style.color = "red"

let ctitle = document.querySelectorAll(".card-title")
ctitle[0].style.color = "red"
ctitle[1].style.color = "orange"
ctitle[2].style.color = "blue"
console.log(ctitle);


// Q1- variable with number add with them

const str = "Mark";
const age = 27;
console.log(str, age);
// answer will be Mark 27

// let a = "Skylon";
// let b = 23;
// console.log(a + b);
//answer will be skylon23
// Q1 END HERE



// Q2 - in this find out string
console.log((a + b));   // answer will let a is a string

const a = 38;
const b = "Gamer";
console.log(typeof b);
// Answer will be "string"
// Q2 end her

// create const object in js and change it to hold a number later

const tri = {
    name: "Darklord",
    section: 5,
    isPrincipal: false
}
tri = "Darklord"       // or i use tri = 53

// answer is we cannot change object also hold a no. later always come error only

// Q3 end here



// try to add new key of  const object in question 3, is we able to do it

const tria = {                  // const tria is just a reference
    name: "Darklord",           //object stick with tria
    section: 5,                 //object stick with tria
    isPrincipal: false          //object stick with tria
}
tria["friend"] = "Skylar"    // answer will be 'skylar'
console.log(tria);
// answer will be
// {name: 'Darklord', section: 5, isPrincipal: false, friend: 'Skylar'}
// friend: "Skylar"
// isPrincipal: false
// name: "Darklord"
// section: 5
// Q4 end here

//Q5 write a word of js program to create word-maning dictionary of 5 words

const dic = {
    arrogant: "having or revealing an exaggerated sense of one's own importance or abilities.",
    hazard: "a potential source of danger.",
    sociopath: "a person with a personality disorder manifesting itself in extreme antisocial attitudes and behaviour.",
    narcissistic: "having or showing an excessive interest in or admiration of oneself and one's physical appearance.",
    benevolent: "well meaning and kindly."
}
console.log(dic);


// Q6 USE logical operator to find wheather the age of a person lies between 10 and 20

let age = prompt("What is your Age?");   // prompt work only in browser and replit
if (age > 10 && age < 20) {
    console.log("your age lies between 10 and 20");
}
else {
    console.log("your age doesn't lies between 10 and 20");
}


// Q7 demostrate the use of switch case statement in javascript

let age = prompt("what is your age");
switch (age) {
    case "12":
        console.log("your age is 12");
        break
    case "13":
        console.log("your age is 13");
        break
    case "14":
        console.log("your age is 14");
        break
    case "15":
        console.log("your age is 15");
        break
    default:
        console.log("your age is not special");
}


// Q8 write a javascript program to find a number is divisible by 2 and 3

let num = prompt("what is your age?");
num = Number.parseInt(num)
if (num % 2 == 0 && num % 3 == 0) {
    console.log("Your number is divisible by 2 and 3");
}
else {
    console.log("Your number is not divisible by 2 and 3");
}


// Q9 write a javascript program to find a number is divisible by either 2 and 3
let num = prompt("what is your age?");
num = Number.parseInt(num)
if (num % 2 == 0 && num % 3 == 0) {
    console.log("Your number is divisible by 2 or 3");
}
else {
    console.log("Your number is not divisible by 2 or 3");
}

// Q10 conditional expression by ternary operator
let age = 15;
let a = age > 18 ? "You can drive" : "You cannot drive"
console.log(a);

































