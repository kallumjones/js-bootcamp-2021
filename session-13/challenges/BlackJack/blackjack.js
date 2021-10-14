/*
Blackjack:

Given two numbers greater than 0, return whichever is nearest to 21 without going over. 
Return 0 if they both go over 21.

blackJack(19, 21) ===> 21 
blackJack(21, 19) ===> 21 
blackJack(19, 22) ===> 19 \
blackJack(99, 23) ===> 0
*/

 export const blackjack = (numOne, numTwo) => {
    const numOneDiff = 21 - numOne < 0 ? 'bust' : 21 - numOne;
    const numTwoDiff = 21 - numTwo < 0 ? 'bust' : 21 - numTwo;;
    console.log(numOneDiff, numTwoDiff);
    let result;

    if(numOneDiff === 'bust' && numTwoDiff ==='bust'){
        result = 0;
    } else if (numOneDiff === 'bust' && typeof numTwoDiff === 'number') {
        result = numTwo;
    } else if (numTwoDiff === 'bust' && typeof numOneDiff === 'number') {
        result = numOne;
    } else if (numOneDiff < numTwoDiff) {
        result = numOne; 
    } else if (numTwoDiff < numOneDiff) {
    result = numTwo;
    } else if (numOneDiff === numTwoDiff){
        result = 'Draw';
    }
    return result;
}

// console.log(blackjack(19,21));
// console.log(blackjack(21,18));
// console.log(blackjack(22,19));
// console.log(blackjack(19,19));
// console.log(blackjack(93,23));