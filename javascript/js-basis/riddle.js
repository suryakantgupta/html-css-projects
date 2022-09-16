let person = {
    name: 'Frost',
    age: 32
};

console.log(person);

// dot notation //

person.name = 'Forest';

console.log(person.name);

// bracket notation  //

let selection = 'name';

person['selection'] = 'Master';

console.log(person.name)



var studyAbroad = 15;
var properWayTo = 220;
var collerOffice = 15;

studyAbroad += 25;
properWayTo -= 28;
collerOffice += 35;
console.log(studyAbroad, properWayTo, collerOffice);



function square(number) {
    return number * number;
}
console.log(number);


function cube(number) {
    return number * number * number;
} let number = cube(7);
console.log(number);



let x = 5;
let y = 10;
let z = x + y;
console.log("The value of z is", z);


var bikeName;
bikeName = "Yamaha";
document.write(bikeName);


bikeName = "Suzuki";
document.write(bikeName);



const fruits = ["Banana", "Orange", "Apple", "Mango"];
let length = fruits.length;
console.log(length);

const fruites = ["Banana", "Orange", "Apple", "Mango"];
let fruit = fruits[fruits.length - 1];
console.log(fruit);


const fruity = ["Banana", "Orange", "Apple", "Mango"];
let fLen = fruity.length;

let text = "<ul>";
for (let i = 0; i < fLen; i++) {
    text += "<li>" + fruity[i] + "</li>";
}
text += "</ul>";
console.log(text);


/* result will be

<ul>

<li>Banana</li>
<li>Orange</li>
<li>Apple</li>
<li>Mango</li>
</ul>

*/


let str = "Apple, Banana, Kiwi";
let part = str.slice(-12, -6); console.log(part);

/* result Banana */

let strep = "Apple, Banana, Kiwi";
let parted = str.slice(7, 13); console.log(part);

/*   result Banana */


let texture = "Forest is vast area!";
let newTexture = texture.replace("Desert is the vast area");
console.log(newTexture);


text = "Halla " + " " + "Madrid!";
text = "Halla".concat(" ", "Madrid!");
console.log(text);


let text43 = "Please visit Barcelona!";
let newText = text43.replace(/BARCELONA/i, "Alaska");
console.log(newText);


let text1 = "      Hello World!      ";
let text2 = text1.trim();
console.log(text2);



let text11 = "      Hello World!      ";
let text12 = text11.trimStart();
console.log(text12);


let text13 = "      Hello World!      ";
let text20 = text13.trimEnd();
console.log(text20);


let text10 = "HELLO WORLD";
let char = text10.charAt(0);
console.log(char);

/* result will be "H"   */


let text27 = "HELLO WORLD";
let char1 = text27.charCodeAt(0);
console.log(char1);

/* result will be in specific Number   */

let text31 = "No pain no gain is the movtive like rain like kain";
text31.match(/ain/gi);


let text77 = `He's often called "Rayan"`;
console.log(text);

let firstName = "Juan";
let lastName = "Mata";

let text23 = `Welcome ${firstName}, ${lastName}!`;
console.log(text23);


let text35 =
    `The quick
brown fox
jumps over
the lazy dog`;
console.log(text35);


let price = 10;
let VAT = 0.25;

let total = `Total: ${(price * (1 + VAT)).toFixed(2)}`;
console.log(total);

/* result will be 12.50 */


var student = {
    name: "Braindon lyken",
    age: "27",
    country: "England",
    hobby: "Football"
};
console.log(student);

let g = 24;
let h = 32;
let i = g + h;
console.log(i);


let a = (0.5 * 2.9 + 1.5 * 5) / 2;
console.log(a);

let s = "25";
let t = 5;
let u = s / t;
console.log(u);



let p = "25";
let q = "5";
let r = p / q;
console.log(r);


let d = 234;
let e = 346;
let f = "124";
let result = d + e + f;
console.log(result);

// result will be this 580124 Because "f" cannot be add 

let aa = 121;
let bb = 343;
let cc = aa * bb;
console.log(cc);

let gain = 2456;
let loss = 1342;
let profit = gain - loss;
console.log(profit);


let jam = 230 / "papaya";
console.log(jam);

// result will be NaN

let rauu = NaN;
let sauu = "20";
let mauu = rauu * sauu;
console.log(mauu);

// answer will be NaN

let jhon = 20 / 0;
console.log(jhon);

// answer will be Infinity everytime we solve sums like this answer will Infinity



let xx = 9.656;
xx.toFixed(4);

// result will this '9.6560'

let k = 9.656;
k.toFixed(6);

// result will this '9.656000'


let j = 9.656;
j.toPrecision(4);

// result will this  '9.656'


let o = 9.656;
o.toPrecision(6);
// result will this  '9.65600'

Number = ("23.31");
// answer will be 23.31

Number = ("Maya");
// answer will be NaN 

Number = ("21, 87");
// answer will be '21, 87'

Number = ("21  87");
// answer will be '21  87'

Number = ("1970-01-01");
// asnwer will be '1970-01-01'

Number = ("2022-08-31");
// answer will be '2022-08-31'

parseFloat("10");
// answer will be 10

parseFloat("10.45");
// answer will be 10.45

parseFloat("10, 65");
// answer will be 10

parseFloat("10, 54, 87");
// answer will be 10

parseInt("-10");
// answer will be -10

parseInt("10, 27");
// answer will be 10

parseInt("10, 53, 42");
// answer will be 10

parseInt("years 10");
// answer will be NaN


const cars = new Array("Saab", "Volvo", "BMW");
let car = cars(0);
console.log(car);
// answer will be Saab


const lists = new Array("Saab", "Volvo", "BMW");
let list = lists(0);
console.log(list);
// answer will be Saab


let ab = 9.656;
ab.toExponential(2);
// answer will be '9.66e+0'


let bc = 9.656;
bc.toExponential(4);
// answer will be '9.6560e+0'




let xy = 9.656;
xy.toFixed(0);
// answer will be '10'

let xa = 9.656;
xa.toFixed(2);
// answer will be '9.66'

let xb = 9.656;
xb.toFixed(4);
// answer will be '9.6560'

let pq = 9.656;
pq.toPrecision(2);
// answer will be '9.7'

let rs = 9.656;
rs.toPrecision(4);
// answer will be '9.656'

let sr = 9.656;
sr.toPrecision(6);
// answer will be '9.65600'


const fruitie = ["Papaya", "Banana", "Apple"];
fruitie[fruitie.length] = "Pineapple";

// answer will be `Pineapple`

const label = ["Banana", "Orange", "Apple"];
label[6] = "Lemon";

// answer will be `Lemon`

const person = [];
person[0] = "John";
person[1] = "Doe";
person[2] = 46;
person.length;
// answer will be 3

const person = [];
person[0] = "John";
person[1] = "Doe";
person[2] = 46;
person[0];
// answer will be 'John'

const person = [];
person[0] = "John";
person[1] = "Doe";
person[2] = 46;
person[1];
// answer will be 'Doe'

const person = [];
person[0] = "John";
person[1] = "Doe";
person[2] = 46;
person[2];
// answer will be 46

const points = new Array(40, 100, 1, 5, 25, 10);
console.log(points);

// answer will be [40, 100, 1, 5, 25, 10]
// 0: 40
// 1: 100
// 2: 1
// 3: 5
// 4: 25
// 5: 10
// length: 6


// A common question is: How do I know if a variable is an array?

// The problem is that the JavaScript operator typeof returns "object":

const sunny = ["Banana", "Orange", "Apple"];
let type = typeof sunny;
console.log(type);
// answer will be object


// The instanceof operator returns true if an object is created by a given constructor:

const rider = ["Soap", "Powder", "Brush"]
rider instanceof Array;
// answer will be "true"


let str1 = "GoodBye";
let str2 = "Jackson";
alert(str1 + str2);
// answer will be goodBye Jackson


var txte = "Come to Dubai";
txte = txte.toUpperCase();
// answer will be "COME TO DUBAI"

var txte = "Come to Dubai";
txte = txte.toLowerCase();
// answer will be "come to dubai"

// The pop() method removes the last element from an array:
const frie = ["Banana", "Orange", "Apple", "Mango"];
frie.pop();
// in this mango will be out 


// The push() method adds a new element to an array (at the end):
const f1 = ["Banana", "Orange", "Apple", "Mango"];
f1.push("Kiwi");
// answer will be 5


// sort() method to put in asecnding order
const fruitses = ["Papaya", "Banana", "Mango", "Apple"];
fruitses.sort();
Array(4)["Apple", "Banana", "Mango", "Papaya"]





// Shifting is equivalent to popping, but working on the first element instead of the last.
// The shift() method removes the first array element and "shifts" all other elements to a lower index.
const f2 = ["Banana", "Orange", "Apple", "Mango"];
f2.shift();
// answer will be 'Banana'


// // The shift() method returns the value that was "shifted out":
const veges = ["Potato", "Onion", "Carrot", "Chilly"];
veges.shift(); // this thing remove first word potato
let vege = veges.shift(); // this thing add what we remove above potato
// // answer will be 'Potato'


const tools = ["Screw", "Hammer", "Driver", "Jack"];
tools.pop();  // this thing remove last word "Jack"
let tool = tools.pop();  // this thing bring back that work we remove before
// // answer will be 'Jack'


// // The unshift() method adds a new element to an array (at the beginning), and "unshifts" older elements:
const words = ["sana", "rona", "pillar", "gatle"];
words.unshift("pickle");
// // answer will be 5 because it add 1 more word


// Array elements can be deleted using the JavaScript operator delete.

// Using delete leaves undefined holes in the array.

// Use pop() or shift() instead.
const products = ["facewash", "lotion", "powder", "cream"];
delete products[0];


var choco = ["Oreo", "Vanilla", "Chocolava", "Mango"];
var lost = choco.slice(1, 2);
console.log(lost);
// answer will be "Vanilla"


var myArray = [];
myArray[0] = "Come to Mumbai";
console.log(myArray);


let xz = "Forest";
{
    let xz = "Ryan";
    console.log(x);
}
console.log(x);

// answer will be Ryan Forest


// let a = null;
// let b = 234;
// let c = Symbol("Daniel going somewhere");
// let d = "Daniel";
// let e = true;
// let f = BigInt("343") + BigInt("23");
// let g = undefined;
// console.log(a, b, c, d, e, f, g);
// console.log(typeof d); 


// NN SS BB U are 7 premitives data types in javascript

// objects are non-premitives data


// day3: array

var sArray = nums.sort(function (a, b) {
    return a - b;
});
var uSarray = sArray.filter(function (elm, index, self) {
    return index == self.indexOf(elm);
});
return uSarray[uSarray.length - 2];


/*
Day3: try, catch ,

 * Complete the reverseString function
 * Use console.log() to print to stdout.
 */
function reverseString(s) {
    (typeof s !== 'string')
        ? console.log("s.split is not a function")
        : (s = s.split('').reverse().join(''));

    console.log(s);

}


// in javascript 3 types of form work
// if statement
// if... else statement
//if..else if..else.. statement

// conditional expressions

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


// Q11 explore switch statement and write a basic program in the comment 

const expr = 'Papayas';
switch (expr) {
    case 'Oranges':
        console.log('Oranges are $0.59 a pound.');
        break;
    case 'Mangoes':
    case 'Papayas':
        console.log('Mangoes and papayas are $2.79 a pound.');
        // expected output: "Mangoes and papayas are $2.79 a pound."
        break;
    default:
        console.log(`Sorry, we are out of ${expr}.`);
}

// program using switch statement
let a = 1;

switch (a) {
    case "1":
        a = 1;
        break;
    case 1:
        a = 'one';
        break;
    case 2:
        a = 'two';
        break;

    default:
        a = 'not found';
        break;
}
console.log(`The value is ${a}`);




//  below this For Loops in JavaScript
// program to add first natural number in js

let sum = 0;
let n = prompt("Enter the value of n");
num = Number.parseInt(n);
for (let i = 0; i < n; i++) {
    sum += (i + 1)
    // console.log((i+1), "+");
}
console.log("sum of first " + n + " naural number is " + sum);

// again solve with in factorial


// hackerrank 
// Day 2 : Switch

function getLetter(s) {
    let letter;
    // write your code here
    switch (s.charAt(0)) {
        case 'a':
        case 'e':
        case 'i':
        case 'o':
        case 'u':
            letter = "A";
            break;
        case 'b':
        case 'c':
        case 'd':
        case 'f':
        case 'g':
            letter = "B";
            break;
        case 'h':
        case 'j':
        case 'k':
        case 'l':
        case 'm':
            letter = "C";
            break;
        case 'n':
        case 'p':
        case 'q':
        case 'r':
        case 's':
        case 't':
        case 'v':
        case 'w':
        case 'x':
        case 'y':
        case 'z':
            letter = "D";
            break;

    }
    return letter;
}


// 
Math.sin(3.5);
const circumference = 2 * Math.PI * r;


































