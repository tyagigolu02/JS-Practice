//how to create many user 

const usersMethod = {
    about : function(){
        return `${this.fName} is ${this.age} years old.`;
    },
    is18 : function(){
        return this.age >= 18;
    }
}

function createUser(fName,lName,email,address,age){
    const user = Object.create(usersMethod);
    user.fName = fName;
    user.lName = lName;
    user.email = email;
    user.address = address;
    user.age = age;

    return user;
};
const uses1 = createUser('billu','sandha','billu.sandha@gmail.com','duniya hi iski hai',999);
console.log(uses1);
console.log(uses1.about());  // gives all of usersMethod in __proto__


//proto , prototype 
function hello(){
    console.log("Hello world ! ");
};
console.log(hello.name);

hello.myOwnProperty = "VK 18";
console.log(hello.myOwnProperty);
console.log(hello.prototype);//khaali jgh

//only function provide prototype property

if(hello.prototype){
    console.log("hai bhai....");
}else{
    console.log("nahi hai to m kya kru ..........")
};

hello.prototype.abc = "abc ";
console.log(hello.prototype);


//new keyword

function newUsers(fname,lname,age){
    this.fname = fname;
    this.lname = lname;
    this.age = age;
};
newUsers.prototype.about = function(){
    console.log(this.fname,this.lname);
}
const user1 = new newUsers("golu","tyagi","77");//new
user1.about();
