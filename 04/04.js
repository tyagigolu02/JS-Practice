const arr1 = [1,2,3,4,5,6,7];
function pArr1(number,index)
{
    console.log(`Index is : ${index}`);
    console.log(number*2);
}

// for (let i =0;i<arr1.length;i++)
// {
//     pArr1(arr1[i],i);
// }

arr1.forEach(pArr1);


const users = [
    {firstName: "golu", age: 23},
    {firstName: "kalu", age: 19},
    {firstName: "nitish", age: 76},
];
// users.forEach(Function(user){
//     console.log(user.firstName);
// });

// for(let user of users){
//     console.log(user.firstName);
// };

users.forEach((user,index)=>{
    console.log(user.firstName,index);
});


//Map Method

const arr2 =[1,2,5,7,8];
const square = function(number){
    return number*number;
};
const sqNum = arr2.map(square);
console.log(sqNum);


const userName = users.map((user)=>{
    return user.firstName;
});
console.log(userName);


//Filter method


const num = [1,3,5,4,2,7,8];
const isEven = function(numb){
    return numb%2 === 0;
}
const eNum = num.filter(isEven);
console.log(eNum);

//reduce method

const numbers = [1,2,3,4,5,6];
const sum = numbers.reduce((a,c)=>{
    return a+c;
},100);
console.log(sum);


//Sort Method

const uArray = [100,70,9,0,5,355,6];
uArray.sort();// sort for strings
console.log(uArray);

uArray.sort((a,b)=>{
    return a-b;
});
console.log(uArray);

// price H2L or L2H

const products = [
    {productId: 1, productName: "P1" , price: 2000},
    {productId: 2, productName: "P2" , price: 22000},
    {productId: 3, productName: "P3" , price: 20000},
    {productId: 4, productName: "P4" , price: 25000},
    {productId: 5, productName: "P5" , price: 6000},
    {productId: 6, productName: "P6" , price: 600},
]

//L2H
products.slice(0).sort((a,b)=>{ // 
    return a.price - b.price;
});
console.log(products);

//H2L
products.sort((a,b)=>{
    return b.price - a.price;
});
console.log(products);



//Find method

const myArray = ["sheru","taffy","simpoli","damru","gaangulli"];
function isLength(string){
    return string.length === 3;
}
console.log(isLength(myArray));

const prod = [
    {productId: 1, productName: "P1" , price: 2000},
    {productId: 2, productName: "P2" , price: 22000},
    {productId: 3, productName: "P3" , price: 20000},
    {productId: 4, productName: "P4" , price: 25000},
    {productId: 5, productName: "P5" , price: 6000},
    {productId: 6, productName: "P6" , price: 600},
];

const pp = prod.find((pro)=>pro.productId===4);
console.log(pp);

//every method

const numbs = [1,2,3,4,5,6,7];

const nu = numbs.every((number)=>number%2!==0);
console.log(nu);

//some method

const ni = numbs.some((number)=>number===0);
console.log(ni);


//fill method

const array = new Array(10).fill(0);
console.log(array);


//fill method
//value , start , end+1

array.fill(2,3,7);
console.log(array);

//splice method 
// start , delete , insert
array.splice(1,3,6);
console.log(array);