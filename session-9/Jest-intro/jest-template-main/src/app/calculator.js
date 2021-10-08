export const addAllNumbers = (arr) => {
    const copyArr = [...arr];
    let total = 0;
    copyArr.forEach(item => {
        if(typeof item === 'number'){
            total += item;
        }
    })
    
    return total;
}

// console.log(addAllNumbers([1,2,3]));

export const divide = (num1,num2) => {
    if(num2 === 0) {
        throw new Error('Can\'t divide by zero')
    }
    return num1/num2;
}