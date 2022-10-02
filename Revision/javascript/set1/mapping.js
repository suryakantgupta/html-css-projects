// below this it's map only method

// let arr = [23, 27, 31]
// arr.map((value) => {
//   console.log(value)
// })

let aro = [3, 5, 9, 2, 1];
let bakeList = aro.map(function (element){
  return element * 2
})
console.log(bakeList);



// below this map and different method has been used

// let arr = [25, 27, 51]
// let a = arr.map((value, index, array) => {
//   console.log(value, index, array)
//   return value + 1
// })

// console.log(a)



// Array Map method

// let arr = [25, 27, 51]
// let a = arr.map((value, index, array) => {
//   console.log(value, index, array)
//   return value + index
// })

// console.log(a)



// Array filter method

let arr = [44, 55, 22, 3, 7, 14]
let a = arr.filter((a) => {
  return a < 10
})
console.log(a)



// Array reduce method

// let arr2 = [1, 3, 2, 5, 2, 1]
// arr2.reduce((c) => {

//   return c
// })



// <ii> method of reduce

let arr2 = [1, 2, 3, 2, 5, 1]
let newArr2 = arr2.reduce((g1, g2) => {
  return g1 + g2
})
console.log(newArr2)


// few more additional work
var ary = [21, 14, 36, 12,];
var b = ary.map(test);
document.write(b);
function test(x){
  return x * 10;
}

// next one 
var are = [2, 6, 15, 32, 54]
// pass a function to a map

const map = are.map(x => x * 10);
console.log(map);



























