//logs to console 
console.log("Hello World");

//The below grabs the element from doc with ID dateNow and sets inner HTML to new date
document.getElementById('dateNow').innerHTML = new Date();

//Variables

//old style
var myName = 'Kallum'; //string
var country; //undefined

//var has global/function scope

//ES6 2016
let firstName = 'Kallum'; //this variable can be changed and reassigned
console.log(firstName);
firstName = 'Bill'; //when reassigning don't need the let keyword
console.log(firstName);

//let has block scope

const PI = 3.14; //const keyword declares variable that cannot change


/* Naming Convention
camel case (first letter lowercase, next words first letter capitalised)
variables can start with letter, $ or underscore (_)
*/

// ----Data Type----

// Numbers (whole numbers include positive and negative, and decimals)

let numberOfSubscribers = 100;
let price = 99.99;

let numberOfAnimalsInZoo = 12;

//string

let reviewComments = 'This is a review';

//string literals
let zooComments = `the number of animals is ${numberOfAnimalsInZoo}`;

console.log(zooComments);

//array (this is classed as an object) 0 - indexed

let names = [];
//can mix data types
let mixedArray = [12,'kallum'];

console.log(mixedArray[0]); //will log 12 to the console.

const  countries = ['England', 'France'];

countries.push('Spain');

//objects
//Made up of key:value pairs
const productInfo = {
    name: 'heater',
    price: 49.99,
    reviews: []
};

const review = {
    date: new Date,
    rating: 4,
    comment: 'Pretty Good'
}
//access things in object by dot notation, or [] notation
productInfo.reviews.push(review);

productInfo['reviews'].push({
    date: new Date,
    rating: 1,
    comment: 'Bad'
});

console.log(productInfo);

//Boolean
//can be true or false, then there are falsy and truthy values
let isItRaining = false;

//null - intensional missing value

let response = null;
console.log(response);

//undefined

let thisIsUndefined;
console.log(thisIsUndefined);

// to check the type of variable

let footballTeam = 'Man U';
console.log(typeof footballTeam);
console.log(typeof [0,1,2]);

//multidimensional array

let shoppingBasket = [
    ['apples', 3, 0,4],
    ['pears', 4, 0.6]
];

//access array by index and [] notation
console.log('This should be Apple', shoppingBasket[0][0]);
console.log(`This should be Pears ${shoppingBasket[1][0]}`);

//JSON Java script object notation

//This is not JSON ...not quite
const person = {
    name: 'Kallum',
    age: 23,
    address: {
        number: 30,
        street: 'Barnmeadow'
    }
}

//this allows you to turn an object into JSON
console.log('Person object', person);
console.log('Person as JSON object', JSON.stringify(person));
console.log(typeof JSON.stringify(person));

//Objects can contain functions

const car = {
    manufactorer: 'Ford',
    model: 'Fiesta',
    describe() {
        return `${this.manufactorer} ${this.model}`; //this keyword references the object it is being called within
    }
}

console.log(car.describe());

//JSON parse takes JSON and converts it to an object

const personAsString = JSON.stringify(person);
console.log(personAsString);

const personAsObj = JSON.parse(personAsString);
console.log(personAsObj);

//JSON cannot contain functions they are droped when changing from object to JSON
console.log(car);
console.log(JSON.stringify(car));

//object example of adding key value through predefined variable

let bikeName = 'Rayleigh';
let bike = {
    bikeName, // bikeName: "Rayleigh"
    age: 45
}

console.log(bike);

//Date, has lots of built in methods

const dateNow = new Date();

console.log(dateNow);