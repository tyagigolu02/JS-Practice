// /*<-----------OOPS------------->*/
// //function inside object

// function personInfo(){
//     console.log(`Person name is ${this.firstName} and age is ${this.age} .`);
// };

// const person1 = {
//     firstName : 'Golu',
//     age : 8,
//     about : personInfo
// };
// const person2 = {
//     firstName : 'Sonu',
//     age : 18,
//     about : personInfo
// };
// const person3 = {
//     firstName : 'Mohit',
//     age : 38,
//     about : personInfo
// };
// person1.about();
// person2.about();



// function myFun(){
//     console.log("Hello World !");
// };
// // window.myFun();
// // this.myFun(); both are same

// //call

// function hello(){
//     console.log("ram ram bhaiyo........");
// };
// hello.call();

// const user1 = {
//     firstName : 'Golu',
//     age : 8,
//     about : function(hobby){
//         console.log(this.firstName,this.age , hobby);
//     }
// }
// const user2 = {
//     firstName : 'Billu Sandha',
//     age : 40,
// }

// user1.about.call(user2,"cricket");

// function about(hobbies){
//     console.log(this.firstName,this.age , hobbies);
// };

// const users1 = {
//     firstName : 'Golu',
//     age : 8,
// }
// const users2 = {
//     firstName : 'Billu Sandha',
//     age : 40,
// }

// about.call(users1,"cricket");

// //apply
// about.apply(users2,["cricket"]);

// const u1 = user1.about;
// u1();

// //bind
// const myFF = user1.about.bind(user1);
// myFF();

//arrow function take 'this' own surrounding


//how to create many user 

const usersMethod = {
    about : function(){
        return `${this.fName} is ${this.age} years old.`;
    },
    is18 : function(){
        return this.age >= 18;
    }
}

function createUser(fName,lName,email,address){
    const user = {};
    user.fName = fName;
    user.lName = lName;
    user.email = email;
    user.address = address;
    user.is18 = usersMethod.is18;
    user.about = usersMethod.about;

    return user;
};
const uses1 = createUser('billu','sandha','billu.sandha@gmail.com','duniya hi iski hai');
console.log(uses1);

