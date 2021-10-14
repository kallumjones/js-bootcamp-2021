/*
Return the index of the lowest value in an array The input array will have at least one element in it. 
findLowestIndexInArr([99, 98, 97, 96, 95]) ===> 4
*/

// const findLowestIndex = (array) => array.indexOf(Math.min(...array));

const findLowestIndex = (arr) => {
    const copyOfArr = [...arr];
  
    sortedArrayCopy = copyOfArr.sort((a, b) =>  a - b);
    
    const lowestValue = sortedArrayCopy[0];
  
    return arr.indexOf(lowestValue);
  };

console.log(findLowestIndex([8,2,4,6,7]));
console.log(findLowestIndex([99, 98, 97, 96, 95]));
