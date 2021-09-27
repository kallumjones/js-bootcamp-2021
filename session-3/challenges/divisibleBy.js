/*
Iterate from numbers 1 to 500 and sum up the numbers that are divisble by 3 or 5.
Print these numbers to the screen as well as the total at the end.
*/

console.log('Running divisibleBy')

let sum = 0;

for(let i = 1; i <= 500; i++){
    if(i % 3 === 0 || i % 5 === 0){
        console.log(i);
        sum += i;
    }
}

console.log(sum);