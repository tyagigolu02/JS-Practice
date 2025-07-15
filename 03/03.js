/*----------------------------------------------------------------------------------------------------------*/

// Function Declaration
function f() {
    console.log("Hello ji , kya haal hai?");
}

function twoplusone() {
    return 2 + 1;
}
console.log(twoplusone());
f();

function sum(a, b) {
    return a + b;
}
console.log(sum(2, 3)); // function call (arguments)

function isEven (n){
    if(n %2 ===0)
    {
        return true;
    }
    return false;
}
console.log(isEven(4)); // true
console.log(isEven(5)); // false


function isOdd(m) {
    return m % 2 !== 0;
}
console.log(isOdd(4)); // false
console.log(isOdd(5)); // true


function findElement(arr,target)
{
    for( num of arr)
    {
        if(num === target)
        {
            return arr.indexOf(num);
        }
    }
    return -1;
}
console.log(findElement([1, 2, 3, 4, 5], 3)); // 2
console.log(findElement([1, 2, 3, 4, 5], 6)); // -1

/*----------------------------------------------------------------------------------------------------------*/

//Function Expression
const multiply = function(a, b) {
    return a * b;
};
console.log(multiply(2, 3)); // 6


// Arrow Function

const happyBirthday = name => {
    return `Happy Birthday ${name}!`;
};
console.log(happyBirthday("Golu bhai")); // Happy Birthday Golu bhai!

const cube = (num, power = 3) => {
    return num ** power;
};
console.log(cube(2)); // 8
console.log(cube(2, 4)); // 16

/*----------------------------------------------------------------------------------------------------------*/

//Hoisting

// hello();// Function Declaration can be called before its definition due to hoisting

// function hello() {
//     console.log(hello());
// }

/*-----------------------------------------------------------------------------------------------------------*/
//function inside function
const app = () => {
    const myFun = () => {
        console.log("Hello from my Fun!");
    }
    const adding = (a, b) => {
        return a + b;
    }
    console.log("inside app function");
    myFun();
    console.log(adding(2, 3)); // 5
    console.log("end of app function");
};
app(); // Call the app function to execute its contents

//lexical scope

const outFun = () => {
    const outVar = "I am from outer function";
    console.log(outVar); // Accessing outer variable
    const innFun = () => {
        console.log("Hello from inner function!");
        console.log(outVar); // Accessing outer variable from inner function
    }
    console.log("Hello from outer function!");
    innFun(); // Call the inner function
};
outFun(); // Call the outer function

//Block Scope
{
    let var1 = "golu bhai";
    const var2 = "golu tyagi";
    var var3 = "golu bhai tyagi";
};
// console.log(var1); // ReferenceError: var1 is not defined, as var1 is block scoped
// console.log(var2); // ReferenceError: var2 is not defined, as var2 is block scoped
console.log(var3); // "golu bhai tyagi", as var3 is function scoped and accessible here
{
// console.log(var1); // ReferenceError: var1 is not defined, as var1 is block scoped
// console.log(var2); // ReferenceError: var2 is not defined, as var2 is block scoped
console.log(var3); // "golu bhai tyagi", as var3 is function scoped and accessible here  
};

//callback function
function myFun(name){
    console.log(`Hello ${name}`);
};
function myFun2(callback) {
    callback("tyagi ji"); // Calling the callback function with name
}
myFun2(myFun); // Passing myFun as a callback to myFun2


//Returning function
const retFun =() => {
    function hello(){
        return "Hello from inner";
    }
    return hello; // Returning the inner function
};
const innerFunc = retFun(); // Getting the inner function
console.log(innerFunc()); // Calling the inner function
