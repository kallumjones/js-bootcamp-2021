//Session 3

const firstName = 'Kallum';


//length
console.log(firstName.length);

//Lower Case
console.log(firstName.toLowerCase());
//Upper Case
console.log(firstName.toUpperCase());

//substring (start, end (exclusive))
console.log(firstName.substr(0,4));

//split string to array, uses a splitter

const phoneNumber = '07969-149-140';
const phoneParts = phoneNumber.split('-');
console.log(phoneNumber, '=>', phoneParts);

//index of, -1 if not in the string
const emailAddress = 'foo@gmail.com';
const indexOfAtSymbol = emailAddress.indexOf('@');
console.log(indexOfAtSymbol);

//Arrays
//High Order Function - Is a function that takes another function as
//an argument or returns a function as it's result

const countries = ['England', 'France', 'Germany', 'Spain','Zimbabwe', 'Italy'];

//filter 
//takes an annonomous function as an argument and filters array is returns true
const matchedCountries = 
    countries.filter(function(country) {
    console.log(`current country is ${country}`);

    return country.startsWith('Z');
    })
console.log(matchedCountries);

//ES6
const matchedCountriesES6 = countries.filter(country => country.startsWith('Z'));
console.log(matchedCountriesES6);

//Map
//transforms an array into another array with transformation

const pupils =[
    {name: "Kallum",
    age: 27},
    {name: "Katie",
    age: 28}
]

//old school
const upperCasedPeople = pupils.map(function (person) {
    return {
        name: person.name.toUpperCase(),
        age: person.age,
        dateCreated: new Date()
    }
});
console.log(upperCasedPeople);

//ES6
const upperCasedPeopleES6 = pupils.map(person => {
    return {
        name: person.name.toUpperCase(),
        age: person.age,
        dateCreated: new Date()
    }
})
console.log(upperCasedPeopleES6);

//Some
//Return true is a value in the array matches function

const fruits = ['apple', 'pear', 'banana'];

const fruitResults = fruits.some(function (fruit) {
    return fruit === 'apple';
})

console.log(fruitResults);

//ES6

const fruitResultsES6 = fruits.some( fruit => fruit === 'apple');

console.log(fruitResultsES6);

//some with Objects

const footballTeams = [
    {name: 'Manchester United',
    nationalities: ['English', 'French', 'Portugese']},
    {name: 'Liverpool',
    nationalities: ['Brazilian','Egyptian']}
]

const hasEnglishPlayers = footballTeams.some(team => {
    return team.nationalities.includes('English');
})

console.log(hasEnglishPlayers);

//sort mutates

let letters = ['z','b','a','k'];

//natural sort 
console.log(letters.sort());

let numbers = [1,2,30,4];

console.log('Unsorted', numbers);
//function
numbers.sort(function(a,b) {
    return a - b;    
})

console.log('sorted', numbers);

let animals = ['lion','Zebra','turtle'];

console.log(animals.sort());

const sortedCaseInsensitiveAnimals = animals.sort(function(a,b) {
    let firstAsUpper = a.toUpperCase();
    let secondAsUpper = b.toUpperCase();

    if(firstAsUpper === secondAsUpper){
        return 0;
    } else if (firstAsUpper > secondAsUpper) {
        return 1;
    } else {

        return -1;
    }
})

console.log(sortedCaseInsensitiveAnimals);

//length of array
console.log(animals) //this has been sorted
console.log(animals.length);

//index of 

console.log(animals.indexOf('turtle'));

//push
//appends new element to the end of array 
console.log('push')
const places = [];

places.push({
    name: 'Barcelona',
    population: 10_000_000
})

// console.log(places);
console.log(JSON.parse(JSON.stringify(places)));

places.push({
    name:'Bristol',
    population: 2_000_000
})

// console.log(places)
console.log(JSON.parse(JSON.stringify(places)));

//pop
//pop removes the last element of an array and returns it
console.log('pop')
const bristol = places.pop();

// console.log(places);
console.log(JSON.parse(JSON.stringify(places)));


//shift
//removes the first element
console.log('shift')
places.shift();

// console.log(places);
console.log(JSON.parse(JSON.stringify(places)));

//unshift
//appends new element to the start of array 
console.log('unshift')
places.unshift({
    name: 'Tokyo',
    population: 234567
    });

// console.log(places);
console.log(JSON.parse(JSON.stringify(places)));

//Destructuring obj use curly brakcets for destructering
//for object destructing must use name i.e. keys

const person = {
    myName: 'john',

    address: {
        street: '1st Street',
        city: 'London'
    },
    hobbies: ['Sports','TV']
};

//to desrtuct and get a specfic key value out of an object can use below syntax
const {hobbies} = person;
console.log(hobbies);

//to go further into the nested object like below
const { address: {street}} = person;

console.log(street);

//destructing array use square brackets
//can change the name as it takes the values from the start of the array [0]

const rooms = ['kitchen', 'bathroom'];

const [kitchen] = rooms;

console.log(kitchen);

//Operators:
let firstNumber = 1;
//incrementing by 1
firstNumber = firstNumber + 1;
firstNumber++;

//incrementing by different values
firstNumber += 2;

//Please be aware of datatypes as string will concatenate will +

//decrement by 1
firstNumber--;

//decrement by different values
firstNumber -= 2;

//modules is a remainder operator
let sum = 10 % 2;

//equality
let classSize = '12';

//weak quality must match value (data type can mismatch)
if(classSize == 12){
    console.log('true'); //should log this
} else {
    console.log('false');
}

//strict equality must match data type and value
if(classSize === 12){
    console.log('true');
} else {
    console.log('false'); //should log this
}


//truthy and falsy will also follow == equality 
let falseBoolean = false;

if(falseBoolean == 0){
    console.log('true'); //should log this as matches falsy
} else {
    console.log('false');
}

//negative with the bang operator (not)
const currentWeather = 'Sunny';
//strict negation the below isHappy would be true or false
const isHappy = 'raining' !== currentWeather;

console.log(isHappy);
