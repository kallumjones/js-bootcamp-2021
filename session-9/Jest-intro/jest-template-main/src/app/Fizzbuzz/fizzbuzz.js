/*
Write a program which return "fizz" if the number is a multiple of 3, 
return "buzz" if its multiple of 5 and return "fizzbuzz" 
if the number is divisible by both 3 and 5. 
If the number is not divisible by either 3 or 5 then it should just return the number itself. 

Bonus: 
Enhance your program to print out the outcome if 
provided a range of numbers 1 to 20. For example it should print: 
1 2 fizz 4 buzz fizz ...

Tdd methodogly 
*/

 export const fizzBuzz = (number) => {

    if(typeof number !== 'number'){
        throw new Error('input is not a number');
    } else if(number < 0){
        throw new Error('is not positive');
    } else {
        if(number % 3 === 0 && number % 5 === 0) {
            return 'FizzBuzz';
        } else if(number % 3 === 0) {
            return 'Fizz';
        } else if(number % 5 === 0) {
            return 'Buzz';
        } else {
            return number;
        }
    }
}

export const fizzBuzzRange = (minValue, maxValue) => {
    const results = [];

    for(let i = minValue; i <= maxValue; i++){
        results.push(fizzBuzz(i));
    }

    return results;
}




