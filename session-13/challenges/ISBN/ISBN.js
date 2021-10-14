/*
ISBN Validator

The check digit for ISBN-10
is calculated by multiplying each digit by its position (i.e., 1 x 1st digit, 2 x 2nd digit, etc.), 
summing these products together, 
doing a modulo of 11 and then taking that result 
and subtracting it from modulo 11 (with 'X' being used if the result is 10).

The check digit for ISBN-13
is calculated by multiplying each digit alternately by 1 or 3 (i.e., 1 x 1st digit, 3 x 2nd digit, 1 x 3rd digit, 3 x 4th digit, etc.), summing these products together, taking modulo 10 of the result and subtracting this value from 10, and then taking the modulo 10 of the result again to produce a single digit.
*/

const ISBN10 = (isbn) => {
    const isbnNumber = isbn.match(/\d/g);
    const check = isbnNumber.pop();

    const isbnNumbeMap = isbnNumber.map((number, index) => number * (index + 1))
    const isbnNumbereduce = isbnNumbeMap.reduce((agg, cur) => agg + Number(cur),0);
    const isbnDigit = isbnNumbereduce % 11
    return check !== 'X' ? check == isbnDigit: 10 === isbnDigit; //weak equality as initial a string
}

const ISBN13 = (isbn) => {
    const isbnNumber = isbn.match(/\d/g);
    const check = isbnNumber.pop();

    const isbnNumbeMap = isbnNumber.map((number, index) => {
        if(index % 2 === 0) {
            return number;
        } else {
            return number * 3;
        }
    });

    const isbnNumbereduce = isbnNumbeMap.reduce((agg, cur) => agg + Number(cur),0);
    const isbnDigit = 10 - (isbnNumbereduce % 10);

    console.log(check);
    
    console.log(isbnNumber);
    console.log(isbnNumbeMap);
    console.log(isbnDigit);
    return check == isbnDigit; //weak equality as initial a string
}

console.log(ISBN10('0-470-84525-2'));

console.log(ISBN13('978-0-262-13472-9'));