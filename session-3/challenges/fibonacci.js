/*
Writ a program that produces the Fibonacci sequence:
0, 1, 1, 2, 3, 5, 8, 13, 21
0 - 50 range
*/

const fibonacci = [0,1];

for(let i = 1; i < 9; i++){
    fibonacci.push(fibonacci[i] + fibonacci[i-1]);
}

console.log(fibonacci);

//function

const finbonacciFunction = (num) => {
    const fibonacci = [0,1];
    
    for(let i = 1; fibonacci.length < num; i++){
        fibonacci.push(fibonacci[i] + fibonacci[i-1]);
    }

    return fibonacci;
}

console.log(finbonacciFunction(30));