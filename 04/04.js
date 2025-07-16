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
