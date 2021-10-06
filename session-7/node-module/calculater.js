function add(...nums) {
    const total = nums.reduce((agg, cur) => agg + cur);
    return total;
}

function divide(num1, num2) {
    if(num2 === 0) {
        throw new error('You cannot divide by zero!');
    } 

    return num1/num2
}

// console.log(add(1,2,3));

//how to export through node 
module.exports = {sum: add, divide};