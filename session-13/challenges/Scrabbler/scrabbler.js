/*
Given two strings, when passed a scrambled string, 
if passed a second one the method will return true if the second word contains all letters in the rest.
For example:
scrambler(“cdoer”, “coder”) ===> true
scrambler(“hello”, “hkllo”) ===> false
*/


const scrambler = (wordOne, wordTwo) => {
    const wordOneSplit = wordOne.split('');
    const wordTwoSplit = wordTwo.split('');

    for(let letter of wordOneSplit){
        if(!wordTwoSplit.includes(letter)) {
            return false;
        } else {
            const indexOfLetter = wordTwoSplit.indexOf(letter);
            //removes found letter (look at better ways to do this)
            wordTwoSplit[indexOfLetter] = '';
        }
    }

    if(wordTwoSplit.every(letter => letter === '')){
        return true;
    } else {
        return false;
    }

}

console.log(scrambler('cdoer', 'coder'));
console.log(scrambler('hello', 'hkllo'));
console.log(scrambler('qqqqqq', 'qqqqqqq'));
console.log(scrambler('lll', 'll'));