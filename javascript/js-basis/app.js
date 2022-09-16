let selectedColors = ['red', 'blue'];
selectedColors[2] = 'green';
console.log(selectedColors);



let selectedColors = ['red', 'blue'];
selectedColors[2] = 'green';
console.log(selectedColors.length);



function greet(name) {
    console.log('hello ' + name);
}

greet('Rayan');


function greet(name) {
    console.log('hello ' + name);
}

greet('Rayan');
greet('Forest');
greet('Frost');
greet('Maya');


// performing a task //




function greet(name, lastName) {
    console.log('hello ' + name + ' ' + lastName);
}

greet('Rayan', 'Wolf');
greet('Forest', 'Rodus');


// calculate a value  //

function square(number) {
    return number * number;
}

let number = square(2)
console.log(number);



const person = {
    name: "Raul", age: 32
};

alert(person.name + " " + person.age);





const car = {
    type: "SUV",
    model: "1000",
    color: "Skyblue"
};

console.log(car);





var sum = 147 + 235;
console.log(sum);


var difference = 456 - 231;
console.log(difference);

var product = 342 * 217;
console.log(product);

var quotient = 456 / 4;
console.log(quotient);


var remainder = 3456 % 24;
console.log(remainder);


var myloss = 20;
myloss = myloss - 1;
console.log(myloss);

var myloss = 199;
myloss = myloss + 1;
console.log(myloss);


var mygain = 45;
mygain += mygain;
console.log(mygain);



var a = 56;
var b = 42;
var c = 72;

a = a + 129;
b = b + 217;
c = 373 + c;

console.log(a, b, c);




var x = 367;
var y = 903;
var z = 775;

x += 1483;
y += 297;
z += 1055;

console.log(x, y, z);




var p = 870;
var q = 431;
var r = 739;

p -= 383;
q -= 130;
r -= 377;

console.log(q, r, s);



var x = 367;
var y = 903;
var z = 775;

x *= 1483;
y *= 297;
z *= 1055;

console.log(x, y, z);



var a = 56;
var b = 42;
var c = 72;

a = a / 7;
b = b / 6;
c = c / 8;

console.log(a, b, c);



var myFirstName = "Raul";
var myLastName = "Forest";
console.log(myFirstName, myLastName);


var student = {
    name: "James",
    age: "16",
    hobby: "football"
};
console.log(student);

/*

There are three ways to convert a string to a number:

    parseInt(), which parses the string for an integer.
    parseFloat(), which parses the string for a floating-point number.
    The Number() function, which parses a string as if it's a number literal and supports many different number representations.
*/

/*
Everything else is known as an Object. Common object types include:

    Function
    Array
    Date
    RegExp
    Error
*/

/*
Data types

Let's start off by looking at the building blocks of any language: the types. JavaScript programs manipulate values, and those values all belong to a type. JavaScript offers seven primitive types:

    Number: used for all number values (integer and floating point) except for very big integers.
    BigInt: used for arbitrarily large integers.
    String: used to store text.
    Boolean: true and false — usually used for conditional logic.
    Symbol: used for creating unique identifiers that won't collide.
    Undefined: indicating that a variable has not been assigned a value.
    Null: indicating a deliberate non-value.

*/


const age = 25;
console.log("I am " + age + " years old."); // String concatenation
console.log(`I am ${age} years old.`); // Template literal



let a;
let name = "Simon";

// myLetVariable is *not* visible out here

for (let myLetVariable = 0; myLetVariable < 5; myLetVariable++) {
    // myLetVariable is only visible in here
}

// myLetVariable is *not* visible out here




// Arrays

// Arrays in JavaScript are actually a special type of object. 
// They work very much like regular objects (numerical properties can naturally be accessed only using [] syntax) but 
// they have one magic property called length. 
// This is always one more than the highest index in the array.

const a = ["dog", "cat", "hen"];
a[100] = "fox";
console.log(a.length); // 101
console.log(a); // ['dog', 'cat', 'hen', empty × 97, 'fox']



















// the escape character are like this
var mystr = "I am Game \"double layer\" hard level \" standard level\"";
console.log(mystr);

var mysite = '<a href="http://www.youtube.com" target="_blank">link</a>';


var myline = "FirstLine\n\t\\SecondLine\nthirdLine";
console.log(myline);

var myrank = "He come first " + "that one second.";
console.log(myrank);

var rewards = "Frost get Gold, " + "Rayan got Silver";
console.log(rewards);


var ourposition = "Mark come first.";
ourposition += "Jack come second.";
console.log(ourposition);

var ourLeague = "Rayan in Ace, ";
ourLeague += "Frost in Diamond. ";
console.log(ourLeague);


var anAdjetive = "Awesome";
var ourmoto = "Kobe kingston is ";
ourmoto += anAdjetive;
console.log(ourmoto);

var ourName = "Sleeping Forest";
var ourfriends = "Hello, my name is " + ourName + ", how are you?";

console.log(ourfriends);


var outcome = "Skylar Rodux";
var ourresult = "Hi, My Name is " + outcome + " I am Well!";

console.log(ourresult);


var firstNameLength = 0;
var firstName = "JuanMata";
firstNameLength = firstName.length;

console.log(firstNameLength);


var student = {
    name: "Forest",
    age: "27",
    country: "Japan",
    hobby: "Basketball"
};
console.log(student);


var lastNamelength = 0;
var lastName = "Foster";
lastNamelength = lastName.length;
console.log(lastNamelength);



var firstLetterOfFirstName = "";
var firstName = "Adam";

firstLetterOfFirstName = firstName;
console.log(firstLetterOfFirstName);

/*  result well be Adam */



var firstLetterOfFirstName = "";
var firstName = "Adam";

firstLetterOfFirstName = firstName[0];
console.log(firstLetterOfFirstName);

/* result will A because A = o */

var firstLetterOfFirstName = "";
var firstName = "Adam";

firstLetterOfFirstName = firstName[1];
console.log(firstLetterOfFirstName);

/* result will be d because d = 1 */


var firstLetterOfLastName = "";
var lastName = "Cluster";

firstLetterOfLastName = lastName[0];
console.log(firstLetterOfLastName);



var firstName = "Viper";
var secondLetterOfFirstName = firstName[1];
console.log(secondLetterOfFirstName);

/*  result will be i , because i = 1  */


var lastName = "Crick";
var thirdletterOfLastName = lastName[2];
console.log(thirdletterOfLastName);

/* result will be i, because i = 2 */


var firstName = "Rolex";
var lastLetterOfFirstName = firstName[firstName.length - 1];
console.log(lastLetterOfFirstName);


var lastName = "Silvia";
var lastLetterOfLastName = lastName[lastName.length - 2];
console.log(lastLetterOfLastName);



let text1 = "Rayan";
let text2 = "Doe";
let text3 = text1 + " " + text2;

console.log(text3);



function wordBlanks(myNoun, myAdjective, myVerb, myAdverb) {
    var result = "";
    result += "The " + myAdjective + " " + myNoun + " " + myVerb + " to the store " + myAdverb
    return result;
}

console.log(wordBlanks("dog", "big", "ran", "quickly"));
console.log(wordBlanks("bike", "slow", "flew", "slowly"));


var ourArray = ["Raul", 27];
console.log(ourArray);


var ourArray = [["The Multiverse", 55], ["Founded", 2022]];
console.log(ourArray);


var myArray = [["Kolkata Knight Raiders", 243], ["Delhi Cpitals", 195]];
console.log(myArray);


var kidArray = [125, 321, 545];
var ourData = kidArray[0];
console.log(ourData);


var ourArray = [343, 256, 144];
ourArray[1] = 400;
console.log(ourArray);

var myArray = [[24, 35, 56], [32, 47, 87], [55, 44, 77], [54, 69, 83]];
var myData = myArray[3][0];
console.log(myData);


var ourArray = ["Mikelson", "Frost", "kol"];
ourArray.push(["Demon", "Katherine"]);
console.log(ourArray);


var myArray = [["Kolin", 25], ["Tyler", 31]];
myArray.push(["Wolf", 12]);
console.log(myArray);


var ourArray = [12, 22, 36];
var removedFromOurArray = ourArray.pop();
console.log(ourArray);

/*  by this it's removed no. 36 , only remain 12,22 */


var myArray = [["John", 25], ["Riddle", 22]];
var removedFromMyArray = myArray.pop();
console.log(myArray);

/*  by this it's removed ["Riddle", 22] , only remain ["John", 25] */


var myArray = [["Linda", 23], ["Maya", 25]];
var removedFromMyArray = myArray.shift();
console.log(myArray);

/*  by this it's removed ["Linda", 23] , only remain ["Maya", 25] */


var myArray = [["Aixel", 27], ["Brain", 28]];
myArray.shift();
myArray.unshift(["Maxwell", 30]);
console.log(myArray);

/* in this ["Aixel", 27] replaced by (["Maxwell", 30])  because of doing unshift */


/* nested array  */

var myList = [["Eggs", 24], ["Banana", 12], ["Dargonfruit", 7], ["Apple", 10], ["Chocolate", 15]];
console.log(myList);


const fruity = ["Grapes", "Cherry", "Strawberry", "Papaya"];
let fLen = fruity.length;

let text = "<ul>";
for (let i = 0; i < fLen; i++) {
    text += "<li>" + fruity + "</li>";
}

text += "</ul>";
console.log(text);



function ourReusableFunction() {
    console.log("Hello, Charle");

}
ourReusableFunction();

function reusableFunction() {
    console.log("Hi, Rayan");

}
reusableFunction();

/*   fuction reuable end   */


function ourReusableFunctionWithArgs(a, b) {
    console.log(a - b);
}
ourReusableFunctionWithArgs(3224, 2312);



function ourReusableFunctionWithArgs(x, y) {
    console.log(x + y);
}
ourReusableFunctionWithArgs(450893, 32099);



function ourReusableFunctionWithArgs(p, q) {
    console.log(p * q);
}
ourReusableFunctionWithArgs(23109, 3087);



function ourReusableFunctionWithArgs(c, d) {
    console.log(c / d);
}
ourReusableFunctionWithArgs(16581375, 255);



const items = ["Books", "Pencil", "Boxes", "Pens", "Colors"];
let tItems = items.length;

let text5 = "<ul>";
for (let i = 0; i < tItems; i++) {
    text5 += "<li>" + items[i] + "</li>";
}

text5 += "</ul>";
console.log(text5);

<ul>
    <li>Books</li>
    <li>Pencil</li>
    <li>Boxes</li>
    <li>Pens</li>
    <li>Colors</li>
</ul>


const superCar = {
    list: "Limbo",
    model: "Venano",
    color: "Orange",
    horsePower: "750",
}
console.log(superCar);



let text7 = "Time to play the game of destruction";
let text8 = text7.toUpperCase();
console.log(text8);


let text11 = "Desert is the place where nobody wants to go because of high temperature";
let text12 = text11.toLowerCase();
console.log(text12);



var myGlobal = 10;

function fun1() {
    oopsGlobal = 5;
}

function fun2() {
    var output = "";
    if (typeof myGlobal != "undefined") {
        output += "myGlobal: " + myGlobal;
    }
    if (typeof oopsGlobal != "undefined") {
        output += " oopsGlobal: " + oopsGlobal;
    }
    console.log(output);
}
fun1();
fun2();


let text55 = "Please visit Hudacity and Seawoods";
let newText = text55.replace("Seawoods", "Southcity");
console.log(newText);


let firstName = "Rayan";
let lastName = "Forest";

let text23 = `Welcome to the Jungle ${firstName}, ${lastName}!`;
console.log(text23);



let header = "Templates Literals";
let tags = ["template literals", "javascript", "es6"];

let html = `<h2>${header}</h2><ul>`;
for (const x of tags) {
    html += `<li>${x}</li>`;
}

html += `</ul>`;
console.log(html);
// for <h2>Templates Literals
// </h2 >
//     <ul>
//         <li>template literals</li>
//         <li>javascript</li>
//         <li>es6</li>
//     </ul>



const cars = [];
cars[0] = "Ford";
cars[1] = "Honda";
cars[2] = "BMW";
consolelog(cars);

// answer will be
// "Saab"
// "Volvo"
// "BMW"
// length: 3

const cars = new Array("Saab", "Volvo", "BMW");
consolelog(cars);
// answer will be
// "Saab"
// "Volvo"
// "BMW"
// length: 3

// below this is a slice method

var a = ["Shirt", "Pant", "t-shirt", "shoes", "tie"];
document.write(a + "<br><br>");
var b = a.slice(1, 4);
document.write(b + "<br><br>");

// answer will be 
// Shirt,Pant,t-shirt,shoes,tie

// Pant,t-shirt,shoes


// below this splice method

var a = ["Shirt", "Pant", "t-shirt", "shoes"];
document.write(a + "<br><br>");
a.splice(1, 0, "tie", "socks");
document.write(a + "<br><br>");

// answer will be 
// Shirt,Pant,t-shirt,shoes

// Shirt,tie,socks,Pant,t-shirt,shoes

var a = ["Shirt", "Pant", "t-shirt", "shoes"];
document.write(a + "<br><br>");
a.splice(2, 0, "tie", "socks");
document.write(a + "<br><br>");
// answer will be
// Shirt,Pant,t-shirt,shoes

// Shirt,Pant,tie,socks,t-shirt,shoes


var a = ["Shirt", "Pant", "t-shirt", "shoes"];
document.write(a + "<br><br>");
a.splice(2, 1, "tie", "socks");
document.write(a + "<br><br>");
// answer will Be
// Shirt,Pant,t-shirt,shoes

// Shirt,Pant,tie,socks,shoes


var a = ["Killer", "Sharpshooter", "Assasin"];
var b = a.concat("Thief", "Figther");
document.write(b);

// in this with b section add into a = Killer,Sharpshooter,Assasin,Thief,Figther

var a = ["Killer", "Sharpshooter", "Assasin"];
var b = ["Fighter", "Thief"];
var c = a.concat(b);

// in this with b section add into a = Killer,Sharpshooter,Assasin,Fighter,Thief



var a = ["Killer", "Sharpshooter", "Assasin"];
var b = ["Fighter", "Thief"];
var c = ["Thugs", "Pirates"];
var d = a.concat(b, c);
document.write(d);
// answwer will be Killer,Sharpshooter,Assasin,Fighter,Thief,Thugs,Pirates


var a = ["Killer", "Sharpshooter", "Assasin"];
var b = ["Fighter", "Thief"];
var c = a.concat(b);
document.write(c + "<br><br>");
var d = c.join(" ");
document.write(d);

// answer will be 
// Killer,Sharpshooter,Assasin,Fighter,Thief

// Killer Sharpshooter Assasin Fighter Thief


var a = ["Killer", "Sharpshooter", "Assasin"];
var b = ["Fighter", "Thief"];
var c = a.concat(b);
document.write(c + "<br><br>");
var d = c.join(" / ");
document.write(d);

// answer will be
// Killer,Sharpshooter,Assasin,Fighter,Thief
// Killer / Sharpshooter / Assasin / Fighter / Thief


const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
const citrus = fruits.slice(2);
console.log(citrus);
// answer will be "Lemon", "Apple", "Mango" ; first two has been slice


// JavaScript automatically converts an array to a comma separated string when a primitive value is expected.
const head = ["Jbl", "Leaf", "Boat", "Sony"];
const layer = head.toString();
console.log(layer);
// answer will be Jbl,Leaf,Boat,Sony



// const numbers = [45, 4, 9, 16, 25];
// let txt = "";
// numbers.forEach(myFunction);

// function myFunction(value, index, array) {
//   txt += value + "<br>";
// }

// console.log(numbers);
// asnswer will be (5) [45, 4, 9, 16, 25]


const numbers = [45, 4, 9, 16, 25];
let txt = "";
numbers.forEach(myFunction);

function myFunction(value, index, array) {
    txt += value + "<br>";
}

console.log(txt);
//answer will be 45<br>4<br>9<br>16<br>25<br>


const numbers1 = [45, 4, 9, 16, 25];
const numbers2 = numbers1.map(myFunction);

function myFunction(value) {
    return value * 2;
} console.log(numbers2);

// Answer will be (5)[90, 8, 18, 32, 50]


// 1 < n < 10
// Output Format

// The function must return the value of n
// sample input 0
// 4
// sample output 0
// 24

// we return the value of 
// 4! = 4 x 3 x 2 x 1 = 24
// solution below this 
// const factorial = (n) => (n - 1) > 0 ? n * factorial(n - 1) : 1;



// Complete the getGrade(score) function in the editor. 
// It has one parameter: an integer, score, denoting the number of points Julia earned on an exam. 
// It must return the letter corresponding to her grade according to the following rules:

// If 25 < score <= 30, then grade = A.
// If 20 < score <= 25, then grade = B.
// If 15 < score <= 20, then grade = C.
// If 10 < score <= 15, then grade = D.
// If 5 < score <= 10, then grade = E.
// If 0 < score <= 5, then grade = F.

// solution below ;-

function getGrade(score) {
    // Write your code here
    if (score > 25 && score <= 30) {
        return ("A");
    } else if (score > 20 && score <= 25) {
        return ("B");
    } else if (score > 15 && score <= 20) {
        return ("C");
    } else if (score > 10 && score <= 15) {
        return ("D");
    } else if (score > 5 && score <= 10) {
        return ("E");
    } else if (score > 0 && score <= 5) {
        return ("F");
    }

    return grade;
}



const numb = [45, 4, 9, 16, 25];
const over18 = numb.filter(myFunction);

function myFunction(value, index, array) {
    return value > 18;
}
console.log(over18);
// answer will be (2) [45, 25]


const num = [35, 65, 21, 42, 17];
let sum = num.reduce(myFunction);

function myFunction(total, value) {
    return total + value;
}
console.log(sum);
// answer will be 180


// Date objects are created with the new Date() constructor.

// There are 4 ways to create a new date object:

new Date()
new Date(year, month, day, hours, minutes, seconds, milliseconds)
new Date(milliseconds)
// new Date(date string)


Math.round(24);
//answer will be 20

Math.ceil(32.5);
// returns the value of x rounded up to its nearest integer:
// answer will be 33

Math.floor(46.1);
//  returns the value of x rounded down to its nearest integer
// answer will be 46

Math.trunc(56.7);
// Math.trunc(x) returns the integer part of x
// answer will be 56

Math.pow(13, 2);
// answer will be 169

Math.sqrt(196);
// answer will be 14

Math.abs(-44.3);
// Math.abs(x) returns the absolute (positive) value of x
// answer will be 44.3

Math.sin(90 * Math.PI / 180);     // returns 1 (the sine of 90 degrees)
// answer will be 1
// Math.sin(x) returns the sine (a value between -1 and 1) of the angle x (given in radians).
// If you want to use degrees instead of radians, you have to convert degrees to radians:
// Angle in radians = Angle in degrees x PI / 180.


Math.cos(0 * Math.PI / 180);     // returns 1 (the cos of 0 degrees)
// answer will be 1
// Math.cos(x) returns the cosine (a value between -1 and 1) of the angle x (given in radians).

Math.min(-234, 321, 104, 409, 54, -143);
// answer will be -234

Math.max(546, 309, 975, 1306, 342, 745, 344);
// answer will be 1306

Math.log(1);
0

Math.log(2);
0.6931471805599453

Math.log(3);
1.0986122886681096

// Math.E and Math.log() are twins.


Math.log2(x)

//returns the base 2 logarithm of x.

// How many times must we multiply 2 to get 8?

Math.log2(8);
// answer will be 3 times means if we multiply 2 three times answer will be 8


// Returns a random integer from 0 to 9:

Math.floor(Math.random() * 10);
// answer will be 0
Math.floor(Math.random(4) * 10);
// answer will be 5
Math.floor(Math.random(6) * 10);
// answer will be 5
Math.floor(Math.random(7) * 10);
// answer will be 5



// Returns a random integer from 0 to 10:
Math.floor(Math.random() * 11);
// answer will be 10
Math.floor(Math.random(5) * 11);
// answer will be 4
Math.floor(Math.random(7) * 11);
// answer will be 1
Math.floor(Math.random(2) * 11);
// answer will be 1
Math.floor(Math.random(9) * 11);
// answer will be 10


// switch method

switch (new Date().getDay()) {
    case 0:
        day = "Sunday";
        break;
    case 1:
        day = "Monday";
        break;
    case 2:
        day = "Tuesday";
        break;
    case 3:
        day = "Wednesday";
        break;
    case 4:
        day = "Thursday";
        break;
    case 5:
        day = "Friday";
        break;
    case 6:
        day = "Saturday";
}





//   hackerrank

// Day 1: function
// Locked stub code in the editor reads a single integer, n , from stdin and passes it to a function named factorial.

/*
 * Create the function factorial here
*/
function factorial(n) {

    let finalVal = 1;

    for (let i = n; i > 0; i--) {
        finalVal *= i;
    }

    return finalVal;
}





/*

* Return a count of the total number of objects 'o' satisfying o.x == o.y.

* 

* Parameter(s):

* objects: an array of objects with integer properties 'x' and 'y'

*/



function getCount(objects) {

    var count = 0;



    Object.keys(objects).forEach((key, index) => {

        if (objects[key].x === objects[key].y) {

            count++;
        }

    })

    return count;



}



// Day 4: classes

/*
 * Implement a Polygon class with the following properties:
 * 1. A constructor that takes an array of integer side lengths.
 * 2. A 'perimeter' method that returns the sum of the Polygon's side lengths.
 */

class Polygon {
    constructor(sides) {
        this.sides = sides
    }
    perimeter() {
        return this.sides.reduce(function add(a, b) { return a + b; })
    }
}


// Day 5: inheritance

class Rectangle {
    constructor(w, h) {
        this.w = w;
        this.h = h;
    }
}

/*
 *  Write code that adds an 'area' method to the Rectangle class' prototype
 */
Rectangle.prototype.area = function () {
    return (this.w * this.h);
};

/*
 * Create a Square class that inherits from Rectangle and implement its class constructor
 */
class Square extends Rectangle {
    constructor(s) {
        super(s, s);
    }
}


// Day 2 : if else


function getGrade(score) {
    let grade;
    if (score > 25) grade = 'A';
    else if (score > 20) grade = 'B';
    else if (score > 15) grade = 'C';
    else if (score > 10) grade = 'D';
    else if (score > 5) grade = 'E';
    else grade = 'F';
    return grade
}


// below this conditional expression

let a = prompt("what is your age?");
a = Number.parseInt(a);  // convert string into number
if (a < 0) {
    alert("this is a valid age");
}

// below this further expansion

let a = prompt("what is your age?");
a = Number.parseInt(a);  // convert string into number
if (a < 0) {
    alert("this is a invalid age");
}
else if (a < 9) {
    alert("you are a kid and you cannot even think of driving");
}
else if (a < 18 && a > 9) {
    alert("you are young and you can think about driving");
}
else {
    alert("you can drive now as you are above 18");
}
console.log("Done");
console.log("You can", a < 18 ? "Not Drive" : "Drive");




// hackerrank Day 5: Template Literals 

// Complete the function in the editor so that it does the following:

//     Finds the initial values of s1 and s2 by plugging the area and perimeter values into the formula:

// $∗∗(s=(P+−sqrt(P−16A))/4)P

// $

//     where A is the rectangle’s area and P is its perimeter.

//     Creates an array consisting of s1 and s2 and sorts it in ascending order.
//     Returns the sorted array.

// Input Format

// The first line contains an integer denoting s1.

// The second line contains an integer denoting s2.

// Explanation 0

// The locked code in the editor passes the following arrays to the tag function:

//     The value of literals is [ ‘The area is: ‘, ‘.\nThe perimeter is: ‘, ‘.’ ].
//     The value of expressions is [ 140, 48 ], where the first value denotes the rectangle’s area, A, and the second value denotes its perimeter, P.

// When we plug those values into our formula, we get the following:

// 1
// 2



// s1=
// s2=

// We then store these values in an array, [14, 10], sort the array, and return the sorted array, [10, 14], as our answer.

/*
 * Determine the original side lengths and return an array:
 * - The first element is the length of the shorter side
 * - The second element is the length of the longer side
 * 
 * Parameter(s):
 * literals: The tagged template literal's array of strings.
 * expressions: The tagged template literal's array of expression values (i.e., [area, perimeter]).
 */
function sides(literals, ...expressions) {
    const [a, p] = expressions;
    const value = Math.sqrt((p ** 2 - (16 * a)));

    return [((p - value) / 4), ((p + value) / 4)];
}




// Day 5: Arrow Functions 
// Complete the function in the editor. It has one parameter: an array, nums. It must iterate through the array performing one of the following actions on each element:

//     If the element is even, multiply the element by 2.
//     If the element is odd, multiply the element by 3.

// The function must then return the modified array.

// Input Format

// The first line contains an integer, n, denoting the size of nums.

// The second line contains n space-separated integers describing the respective elements of nums.

// Sample Input 0

// 1
// 2



// 5
// 1 2 3 4 5

// Sample Output 0

// 1



// 3 4 9 8 15

// Explanation 0

// Given nums = [1,2,3,4,5], we modify each element so that all even elements are multiplied by 2 and all odd elements are multipled by 3. 
// In other words, [1,2,3,4,5] => [13,22,33,42,5*3] -> [3,4,9,8,15]. We then return the modified array as our answer.

/*
 * Modify and return the array so that all even elements are doubled and all odd elements are tripled.
 * 
 * Parameter(s):
 * nums: An array of numbers.
 */
function modifyArray(nums) {
    return (nums || []).map(num => num * (num % 2 === 0 ? 2 : 3));
}



//  hackerrank day6: js Dates

// The days of the week are: "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
function getDayName(dateString) {
    let dayName;
    // Write your code here
    return ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'][(new Date(dateString)).getDay()];
    return dayName;
}

// result will be     
// Sunday
// Wednesday



// hackerrank Day 7: Regular Expression to evaluate a string.
// Task
// Complete the function in the editor below by returning a RegExp object, re, that matches any string s that begins and ends with the same vowel. Recall that the English vowels are a, e, i, o, and u.
// Constraints

//     The length of string s is >= 3.
//     String s consists of lowercase letters only (i.e., [a-z]).

// Output Format

// The function must return a RegExp object that matches any string s beginning with and ending in the same vowel.

/*
Sample Input 0

1 bcd

Sample Output 0

1 false

Explanation 0

This string starts with (and ends in) a consonant, so it cannot start and end with the same vowel.
Sample Input 1

1 abcd

Sample Output 1

1 false

Explanation 1

This string ends in a consonant, so it cannot start and end with the same vowel.
Sample Input 2

1 abcda

Sample Output 2

1 true

Explanation 2

This string starts and ends with the same vowel (a).
Sample Input 3

1 abcdo

Sample Output 3

1 false

Explanation 3

This string starts with the vowel a but ends in the vowel o.

*/

function regexVar() {
    /*
     * Declare a RegExp object variable named 're'
     * It must match a string that starts and ends with the same vowel (i.e., {a, e, i, o, u})
     */
    return new RegExp(/^([aeiou]).*\1$/);


    /*
     * Do not remove the return statement
     */
    return re;
}

// 2 nd method

function regexVar() {
    /*
     * Declare a RegExp object variable named 're'
     * It must match a string that starts and ends with the same vowel (i.e., {a, e, i, o, u})
     */
    const re = /^([aeiou]).\1$/;


    /*
     * Do not remove the return statement
     */
    return re;
}















































