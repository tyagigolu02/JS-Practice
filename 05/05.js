//iterables---> jinpr hm for of loop lga skte hai,exp- String, Array
//string
const firstName = "Golu";
for(let char of firstName)
{
    console.log(char);
};

//array
const items = ['item1','item2','item3','item4'];
for(let item of items)
{
    console.log(item);
};
//array like object---> jinke paas length property hoti hai & index kr skte hai, exp-string


//sets ---- iterable :::::: no index , no fix order , unique items

const numbers = new Set([1,2,3,1,4]); //no duplicate
console.log(numbers);


const empty = new Set();
console.log(empty);

//add in set
empty.add(78);
empty.add(99);
empty.add('item');
empty.add(true);

console.log(empty);

if(empty.has(99)){
    console.log(`hai bhai`);
};

//length of set
let len = 0;
for(let a of numbers){
    len++;
};
console.log(`length : ${len}`);

//maps--->iterable :::::: key,value pairs
const person = new Map();
person.set('fname', 'Golu');
person.set('lname', 'Tyagi');
person.set('age', 99);
console.log(person.get('fname'));
console.log(person.get('age'));
console.log(person.keys);
for(let key of person){
    console.log(key , typeof key);
};


//cloning the object

const obj = {
    key1 : 'val1',
    key2 : 'val2',
    key3 : 'val3',
};

const obj2 = {...obj};
obj.key4 = 'val4';
console.log(obj);
console.log(obj2);


const obj3 = Object.assign({},obj);
console.log(obj3);

//optional chaining

//obj ke ander obj

