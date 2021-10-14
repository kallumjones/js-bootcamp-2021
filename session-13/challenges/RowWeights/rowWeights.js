/*
Row Weights
Several people are standing in a row divided into two teams.
The first person goes into team 1, the second into team 2, the third into team 1 and so on.
Challenge: Given an array of positive numbers (the weights of the people), return a new array/tuple of two numbers, where the first one is the total weight of team 1 and the second one is the total weight of team 2
Array sizes provided must be at least 1.
For example: rowWeights([13, 27, 49]) ==> returns (62, 27)
as team 1 contains 13 and 49 = 62 and team 2 only contains 27, so 27 is returned.

*/

export const rowWeights = (array) => {
    const teamOne = [];
    const teamTwo =[];

    for(let i = 0; i < array.length; i++){
        if(i % 2 === 0){
            teamOne.push(array[i]);
        } else {
            teamTwo.push(array[i]);
        }
    }

    const teamOneTotal = teamOne.reduce((agg, curr) => agg+curr, 0);
    const teamTwoTotal = teamTwo.reduce((agg, curr) => agg+curr, 0);

    return [teamOneTotal,teamTwoTotal]
}

// console.log(rowWeights([13, 27, 49]))
// console.log(rowWeights([13]))