/*
Seek and Destroy:

Remove from the array whatever is in the following arguments. return the leftover values
in an array

*/

const seekAndDestroy = (array, ...destroy) => {
    const filteredArray = array.filter(element => !destroy.includes(element));
    return filteredArray;
}

console.log(seekAndDestroy([1,5,7,'test'],5,'test',7));