console.log('Session 7');

//====Pure Functions====

//pure function, returns what is expected without modifying anything and does one thing
//Example of pure function:
const add = (num1,num2) => {
    const total = num1 + num2;
    return total;
};

console.log(add(5,5));
//not pure function
//does not always return same result
const addNonPure = (num1,num2) => {
    const total = num1 + num2 + Math.random();
    return total;
};

console.log(addNonPure(5,5));

const createPerson = (person, dob) => {
    return {person,
    dob}
}

console.log(createPerson('bill', '01-08-2000'));
