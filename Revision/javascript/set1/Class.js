// Q1 - Create a Class method named "age", that returns the Car age:

// class Car {
//     constructor(name, year) {
//       this.name = name;
//       this.year = year;
//     }
//     age() {
//       let date = new Date();
//       return date.getFullYear() - this.year;
//     }
// }
  
//   let myCar = new Car("Ford", 2014);
//   document.getElementById("demo").innerHTML =
//   "My car is " + myCar.age() + " years old.";


//   You can send parameters to Class methods:

class Car {
    constructor(name, year) {
      this.name = name;
      this.year = year;
    }
    age(x) {
      return x - this.year;
    }
}
  
  let date = new Date();
  let year = date.getFullYear();
  
  let myCar = new Car("Ford", 2014);
  document.getElementById("demo").innerHTML=
  "My car is " + myCar.age(year) + " years old."; 







  