// Data Types

// JavaScript runs in two phases:
// 1. Memory Creation phase: Allocate memory for variables (initialized to undefined) and store functions as it as.
// 2. Code Execution phase: Execute the code line by line.

// 1.a using var


// a=> hoisting => it is behaviour to put all of the declaration on top before the code execution .
// b=> javascript is loosely type language , we don't defined data type of variable javascript figures out .


console.log(age);    // Outputs undefined instead of error.
                    

var age = 21;
var fullName = "swapnil";
var flag = true; 
var flag = false; // Re-declaration is allowed
var fruits = ['apple', 'guava', 'banana'];

console.log(age);
console.log(fullName);
console.log(flag);
console.log(fruits);

// let and const are introduced in es6 . which is more secured because it goes into temporal dead zone.

// 1.b using let
// console.log(age); // Results in a reference error due to the temporal dead zone

// temporal dead zone => it is the period between the creation of variable and initialization  of variable

let number = 21;
console.log(number);
// let number = 22; // Cannot re-declare a let variable
number = 23;        // we can re-assign
console.log(number);

// 1.c using const
const lastName = "gupta"; // Initialization is required if we don't initialize it will give syntax error
console.log(lastName);
// lastName = "singh"; // This would result in an error (type error )



//  2 Loops: while and for

// for loop => it is recomended to use when number of iterations is known .
// while loop => it is used when number of itertaions is unknown .
// for both of question for loop is more suitable.

//  i =>while loop
let i = 1;
while (i <= 10) {
    console.log(i);
    i++;
}
//  ii =>for loop
for (let i = 1; i <= 10; i++) {
    console.log(i);
}
// b
// for loop
for (let j = 1; j <= 100; j++) {
    console.log(j);
}

// 3.  Switch Case Statement

// The switch statement evaluates an expression, matching the expression's value against a series of case clauses using strict equality
//  and executes statements after the first case clause with a matching value, until a break statement is encountered.
// The default clause of a switch statement will be executed if no case matches the expression's value.

let dayNumber = 2;   
    switch (dayNumber) {
        case 1:
            console.log ("Sunday");
            break;
        case 2:
            console.log ("Monday");
            break;
        case 3:
            console.log ("Tuesday");
            break;
        case 4:
            console.log ("Wednesday");
            break;
        case 5:
            console.log ("Thursday");
            break;
        case 6:
            console.log ("Friday");
            break;
        case 7:
            console.log ("Saturday");
            break;
        default:
            console.log ("Invalid input");       // there is no need of break statement in default section
    }

//  4. Program Flow Function  (Area of Rectangle)

// Function => funtions help us to structure the code into smaller and reusable units.
// To Declare Function we use function keyword then function name and then list of parameters.

function calculateArea (length, width){
    return length*width;
}

// To Invoke a function we call it by its name followed by arguments.
console.log(calculateArea(40,50));
console.log(calculateArea(undefined, 2));  // => it will console NaN (it is special value in js , result of an operation that cannot produce a meaningful numeric value.)
console.log(calculateArea(undefined,null)); // NaN


// 5. Conditional Statements

// if else statement is used for block based conditions execution.
// block => it is group of statements combined together .

const checkNumber = function (number) {
    if (number > 0) {
        return "Positive";
    } else if (number < 0) {
        return "Negative";
    } else {
        return "Zero";
    }
}
// Functions are first-class citizens in JavaScript. In other words, we  can treat functions like variables.
console.log(checkNumber(21));
console.log(checkNumber(-21));
console.log(checkNumber(0));
console.log(checkNumber(Infinity))
console.log(checkNumber(-Infinity))

// 6. Program Flow - Loops
// Print even numbers
for (let i = 2; i <= 20; i += 2) {
    console.log(i);
}

// Factorial Calculation
 // using loop

const factorial = function(number) {
    let ans = 1;
    for (let i = 2; i <= number; i++) {
        ans *= i;
    }
    return ans;
};
let numberFactorial = 5;
console.log(factorial(numberFactorial));
 
// (ii) => using recursion 
function factorialRecursion(n) {
    // base case
    if (n === 0 || n === 1) {
        return 1;
    } 
    else {
        return n * factorialRecursion(n - 1);
    }
}

let num= 5;
// using template literals which allows us to write string dynamically in  a very easy way
console.log(`Factorial of ${num} is ${factorialRecursion(num)}`);

