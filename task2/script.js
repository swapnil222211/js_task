// 1  Data Structures: Arrays

function sumArray (array){
    let sum =0;
    for(let i=0;i<array.length;i++){
        sum+=array[i];
    }
    return sum;
}
numbers = [2,3,4,5,-1];
console.log(sumArray(numbers));

// 2. Data Structures: Objects

// object literal method for creating object.
// person object with name, age, and email properties
let person = {
    name: "Swapnil Gupta",
    age: 21,
    email: "swpanilgupta619@gmail.com"
};

// function to print person details
function printPersonDetails(person) {
    console.log(`Name: ${person.name}`);
    console.log(`Age: ${person.age}`);
    console.log(`Email: ${person.email}`);
}
printPersonDetails(person);

// 3.  function as a variables .
//     Functions are first-class citizens in JavaScript. In other words, we  can treat functions like variables.

//function that returns a greeting message
const greeting = function(name) {
    return `Hello, ${name}! Welcome to our website.`;
};

let message = greeting("Swapnil");
console.log(message);

// 4.  More on Objects and The "this" Keyword

// this => the "this" references the object of which the function is a property. 
// In other words, the this references the object that is currently calling the function.

// car object with properties and a method
let car = {
    brand: "Toyota",
    model: "Camry",
    start: function() {
        console.log(`Starting the ${this.brand} ${this.model}.`);
    }
};

car.start();

// 5. The old "var"
// var is function and global scope.
function printNumbers() {
    for (var count = 1; count <= 5; count++) {
        console.log(count);
    }
}

printNumbers();

console.log(`Outside loop:" ${count}`);

//6. Function binding
 
// user object with a property and a method
let user = {
    name: "Alice",
    sayName: function() {
        console.log(`My name is ${this.name}.`);
    }
};

// bind => The bind() method allows an object to borrow a method from another object without making a copy of that method. 
let boundSayName = user.sayName.bind(user);

boundSayName();

// 7 . Arrow function 'double' that doubles a given number

// Arrow Function => it is alternate way to write shorter syntax campared to noraml function expression.
  // In Arrow Function , If function does not have multiple line then you dont need to write "return" keyword.
const double = (number) => {
    return number * 2;
};

console.log(double(5)); // Output: 10



