/*
Given 3 numbers, a, b and c, return their sum.
However, if one of the values is the same as another of the values, it does not count towards the sum.
For example:
loneSum(1, 2, 3) ===> 6 loneSum(3, 2, 3) ===> 2 loneSum(1, 1, 1) ===> 0
*/

export const loneSum = (...numbers) => {
    let total = 0;
    for(let number of numbers) {
        if(numbers.filter(numInArray => numInArray === number).length === 1){
            total += number;
        }
    }
    return total;
}

// console.log(loneSum(1,2,3));
// console.log(loneSum(3,2,3));
// console.log(loneSum(1,1,1));
// console.log(loneSum(10,10,100));
// console.log(loneSum(1000,10,100));
