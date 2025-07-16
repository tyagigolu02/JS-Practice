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
