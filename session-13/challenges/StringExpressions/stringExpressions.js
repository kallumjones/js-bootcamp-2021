/*
Write a function such that when given a string parameter, 
which will perform a mathematical operation and return the result, in words.
Numbers 0-9 and the symbols "plus" and "minus"
are the only inputs allowed in the single parameter the program receives.

For example:
stringExpression( "onezeropluseight" ) ===> "oneeight"
stringExpression( "oneminusoneone" ) ===> "negativeonezero"
*/

const stringExpression = (string) => {
    const numberDict = {
        'zero': 0,
        'one': 1,
        'two': 2,
        'three': 3,
        'four': 4,
        'five': 5,
        'six': 6,
        'seven': 7,
        'eight': 8,
        'nine': 9,
        'plus': '+',
        'minus': '-'
    };

    const numberResultsDict = {
        0: 'zero',
        1: 'one',
        2:'two',
        3:'three',
        4:'four',
        5:'five',
        6:'six',
        7:'seven',
        8:'eight',
        9:'nine',
        '-': 'negative'
    };

    //Cycles through the string and grabs each individual word if matches in the dict object
    const splitString = [];
    let tempString = string;

    let i = 0;
    while(tempString.length > 0) {
        // console.log(tempString, tempString.length);
        let sliceString = tempString.slice(0,i);
        if(!Object.keys(numberDict).includes(sliceString)){
            i++;
        } else {
            splitString.push(sliceString);
            tempString = tempString.slice(i);
            i = 0;
        }
    }

    for(let element in splitString){
        splitString[element] = numberDict[splitString[element]];
    }

    let splitStringJoined = splitString.join('').match(/(\d+|\+|\-)/g)

    let total = Number(splitStringJoined[0]);

    for(let i = 1; i < splitStringJoined.length; i++){
        if(splitStringJoined === '+' || splitStringJoined === '-'){
            continue;
        } else if(splitStringJoined[i - 1] === '+') {
            total += Number(splitStringJoined[i]);
        } else if(splitStringJoined[i - 1] === '-'){
            total -= Number(splitStringJoined[i]);
        }
    }

    return total.toString().split('').map(element => element = numberResultsDict[element]).join('');

}

console.log(stringExpression('onezeropluseightminustwoplusfiveone'));
console.log(stringExpression('oneminusoneone'));