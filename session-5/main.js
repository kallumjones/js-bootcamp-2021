// Error Handling:

// 

const divideNumbers = (first, second) => {
    if(second === 0){
        throw new Error('Not divisible by zero!'); //throw and shows an error
    }
    return first/second;
}

let value = '0';
try {
    const dividedValue = divideNumbers(10,0);
    value = `${dividedValue}`;
    console.log('divide Numbers =>', value);
} catch(err) { 
    value = '0';
    console.error(err);
    console.error(err.message);
}

//Rest opertor

//... (three dots)
//dynamic provide values to a function splits an object into variables and the rest
const createPersonObjectWithRest = (firstName, lastName, ...details) => {
    console.log(
        `createPersonObjectWithrest: FirstName ${firstName}, Details: $details`, details
    );

    //destructuring:
    const [street, city, postCode] = details
    return {
        firstName,
        lastName,
        street,
        city,
        postCode
    }
}

createPersonObjectWithRest(
    'John',
    'rest',
    '1st Street',
    'Manchester',
    'M2'
);

//rest operator must be last formal parameter

console.log('======Spread======')
//Spread operator

//Deep and Shallow copy

//shallow copy just touches/copy the top layer
//deep copy copys all nested arrays/objects

const numbers = [0,1,2,3];
//copy references
const copyOfNumbers = numbers;

copyOfNumbers[0] = 99; //This updates both because updates the data memory
//as both point to the same location

console.log('Numbers', numbers, 'CopyOfNumbers', copyOfNumbers);

//copy with spread operator does not copy reference creates new memory
const copyOfNumberEs6 = [...numbers];

copyOfNumberEs6[0] = 77;

console.log('Numbers', numbers, 'copyOfNumberEs6', copyOfNumberEs6);

//Objects
const person = {
    name: 'John',
    address: {
        places: ['A','B'],
        coordinates: {
            long: 99,
            lat: 88
        }
    }
}

console.log(person);

//ES6 copy (spread operator (shallow copy so nested columns will be references)):
//i.e. updating name won't change person.name
//but adding to nested address will update both objects as passed by reference
const copiedPerson ={ ...person };

copiedPerson.name = 'Foo';

console.log('Person', person, 'copiedPerson', copiedPerson);

//Deep Copy JSON
copiedPersonJSON = JSON.parse(JSON.stringify(person));
copiedPersonJSON.address.places.push('D');
console.log(copiedPersonJSON);

//Got ya this would not take functions
//To create a deep copy with functions may have to do loop to copy each part

