let fruits = ['apple', 'banana', 'cherry'];
console.log(fruits[1]); // Output: banana
fruits[1] = 'blueberry';
console.log(fruits[1]); // Output: blueberry
fruits.push('date');
console.log(fruits); // Output: ['apple', 'blueberry', 'cherry', 'date']
fruits.pop();
console.log(fruits); // Output: ['apple', 'blueberry', 'cherry']
fruits.unshift('kiwi');
console.log(fruits); // Output: ['kiwi', 'apple', 'blueberry', 'cherry']
fruits.shift();
console.log(fruits); // Output: ['apple', 'blueberry', 'cherry']
fruits.splice(1, 1, 'orange');
console.log(fruits); // Output: ['apple', 'orange', 'cherry']
console.log(typeof fruits); // Output: object
console.log(Array.isArray(fruits)); // Output: true
console.log(fruits.length); // Output: 3
console.log(fruits.indexOf('cherry')); // Output: 2

//push ---> adds an element to the end of the array
//pop ---> removes the last element from the array
//shift ---> removes the first element from the array
//unshift ---> adds an element to the beginning of the array
//splice ---> adds/removes elements from the array
//indexOf ---> returns the index of the first occurrence of a specified value in the array
//concat ---> merges two or more arrays
//slice ---> returns a shallow copy of a portion of an array
//splice ---> adds/removes elements from the array


/*<---------------------------------------------------------------------------------------------------------->*/

let numbers = [1, 2, 3, 4, 5];
// let num = numbers;
let num = numbers.slice(); // Create a shallow copy of the array
let num1 =[].concat(numbers); // Another way to create a shallow copy
console.log(num); // Output: [1, 2, 3, 4, 5]
console.log(num1); // Output: [1, 2, 3, 4, 5]
console.log(num === numbers); // Output: true
num[0] = 10;
console.log(numbers); // Output: [10, 2, 3, 4, 5]
console.log(num); // Output: [10, 2, 3, 4, 5]

// The original array is modified because num is a reference to the same array
// To avoid this, we can use slice or concat to create a new array
/*<---------------------------------------------------------------------------------------------------------->*/
console.log('');
const arr1 = [1, 2, 3];
arr1[0] = 10;
// The original array is modified
console.log(arr1); // Output: [10, 2, 3]
arr1.push(4);
console.log(arr1); // Output: [10, 2, 3, 4]



/*<---------------------------------------------------------------------------------------------------------->*/
const arr2 = [1, 2, 3];
for(let element of arr2) {
    console.log(element); // Output: 1, 2, 3
}
for(let index in arr2) {
    console.log(index); // Output: 0, 1, 2 (indexes)
}

/*<---------------------------------------------------------------------------------------------------------->*/

const myArray = ["val1", "val2", "val3"];
// let myVar = myArray[0];
// let myVar2 = myArray[1];
// console.log(myVar); // Output: val1
// console.log(myVar2); // Output: val2
let [myVar, myVar2 ,myVar1] = myArray; // Destructuring assignment
console.log(myVar); // Output: val1
console.log(myVar2); // Output: val2
console.log(myVar1); // Output: val3


/*<---------------------------------------------------------------------------------------------------------->*/
const ob = {
    name: 'John',
    age: 30,
    city: 'New York',
    hobbies: ['reading', 'traveling', 'swimming']
}

const { name, age, city, hobbies } = ob; // Destructuring assignment
console.log(name); // Output: John
console.log(age); // Output: 30
console.log(city); // Output: New York
console.log(hobbies); // Output: ['reading', 'traveling', 'swimming']
ob.name = 'Jane'; // Modifying the original object
console.log(name); // Output: John (name is still 'John' because it's a copy)
ob.game = 'Chess'; // Adding a new property to the object
console.log(ob); // Output: { name: 'Jane', age: 30, city: 'New York', hobbies: ['reading', 'traveling', 'swimming'], game: 'Chess' }