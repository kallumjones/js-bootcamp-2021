console.log('Session 4');

//destructuring:

const numbers = [1,2,3];

const [firstNumber] = numbers;

console.log('firstNumber:', firstNumber);

const person = {
    name: 'Jill Smith',
    age: 23
};

//give an alias though object destructuring
const {name: fullName} = person;

console.log(fullName);

//If Statement:
//fasely values can be used in if statemnets

let values;

if (values) {
    console.log('Values is fasly so will not log')
}

//Operators:
//defaulting in variables
let count = null;
let text = '';

let qty = count || 44;
console.log(qty); //would log 44 due to 0 is falsy

let hello = text || 'Hello';

console.log(hello); //would log Hello due to '' is fasly

//coalesce Operator:

let food = null ?? 'There is no food';
console.log(food);

//Chaining  Operator (Optional Chaining)

const zoo = {
    lions: ['leo'],
    zooKeeper: {name: 'Brenda'}
};

const leo = zoo.lions[0];
console.log(leo);

const bungleTheBear = zoo?.bears?.[0];
console.log(bungleTheBear);

//if you do not include the chaining operator zoo.bears[0] does not exist so would 
//spit out an error, using the ?. would give undefined and allow to check

//similar if a function does not exist in the object

//zoo.describe() //Throws an error cause does not exist
zoo.describe?.() //does not throw an error

//Can combo this and turthy/falsy assignment in scenarios like below
const timTheTiger = zoo?.tigers?.[0] || 'No tigers in Zoo';
console.log(timTheTiger);

