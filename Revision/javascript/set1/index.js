let name = {
    firstName: "Ryan",
    lastName: "Forest",
    printFullName: function(homeTown, state){
        console.log(this.firstName + " " + this.lastName + " from " + homeTown + "," + state);
    }
}
printFullName.call(name, "Bora Bora", "France");


let name2 = {
    firstName: "Frost",
    lastName: "lawman",
    // printFullName: function(){
    //     console.log(this.firstName + " " +this.lastName);
    // }
}


// function borrowing
printFullName.call(name2, "Patna", "Bihar");

// above this is call method of javascript

// apply method 

printFullName.apply(name2, ("Patna", "Bihar"));

// bind method

let printMyName = printFullName.bind(name2, "Patna", "Bihar");
console.log(printMyName);
printMyName();


// below this if/else/ else if method

// let age = 22;
// let hasVoterCard = "No";

// if(age >= 20 && hasVoterCard == "Yes") {
  
//   alert("He is  mature")
// }
// else if (age >= 20 && hasVoterCard != "Yes"){
  
//   alert ("Provide your age proof")
// }
// else {
//   alert("He is not mature")
// }


// below this nested if/else method

let age = 22;
let hasVoterCard = "No";

if(age >= 20) {
   
  if(hasVoterCard == 'Yes') {
    alert("You can Vote");
    }  else {
    alert ("Get your Voter Id Card!")
    }
}
else {
  alert("He is not mature")
}

















