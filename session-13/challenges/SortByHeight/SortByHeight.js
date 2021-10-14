/*
SortByHeight
Some people are standing in a row in a park. There are trees between them which cannot be moved. Your task is to rearrange the people by their height in ascending numeric order without moving the trees.
Trees in the array are marked as ‘-1’
e.g. [-1, 150, 190, 170, -1, -1, 160, 180] => [-1, 150, 160, 170, -1, -1, 180, 190]
*/

export const sortByHeight = (array) => {
    const resultsArray = [...array];
    const filteredArray = array.filter(element => element !== -1);

    filteredArray.sort();
    
    for(let i = 1; i < resultsArray.length;i ++){
        if(resultsArray[i] === -1){
            continue;
        } else {
            const newInput = filteredArray.shift();
            resultsArray[i] = newInput;
        }
    }
    return resultsArray;
}

// console.log(sortByHeight([-1, 150, 190, 170, -1, -1, 160, 180]));