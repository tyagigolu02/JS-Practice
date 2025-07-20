//Closures
function outerFun(){
    function innerFun(){
        console.log("ho to gya bhai...");
    }
    return innerFun;
}
const ans = outerFun();
// console.log(ans);
ans();

function name(fName,lName){
    function printName(){
        console.log(fName,lName);
    }
    return printName;
}
const anss = name("Golu","Bhai");
anss();



//exp 1

function hello(x){
    const a = "varA";
    const b = "varB";
    return function(){
        console.log(a,b,x);
    }
}
const an = hello("arg");
an();

// exp 2

function myFun(power){
    return function(number){
        return number ** power;
    }
};
const sq = myFun(2);
console.log(sq(3));

//exp 3

function func(){
    let counter = 0;
    return function(){
        if(counter<1){
            console.log("Giyaan ho tum ..... ");
            counter ++;
        }else{
            console.log("nobita ki shadi kisse hogi ???");
        }
    }
};
const my = func();
my();
my();
my();