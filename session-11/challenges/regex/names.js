/*
Given the following names:

Mr. Schafer
Mr Smith
Ms Davis
Mrs. Robinson
Mr. T

Write a function that returns true when all these patterns are matched. False otherwise.


*/

const nameChecker = (name) => {
    const regex = /^M(r|s)\.?s?\.?/;

    return regex.test(name);
}

console.log(nameChecker('Mr. Schafer'));
console.log(nameChecker('Mr Smith'));
console.log(nameChecker('Ms Davis'));
console.log(nameChecker('Mrs. Robinson'));
console.log(nameChecker('Mr. T'));
console.log(nameChecker('r. Schafer'));
console.log(nameChecker('Tr Smith'));
console.log(nameChecker('ds Davis'));