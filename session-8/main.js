import reverseArray, {sumAllNumbers,existsInArr} from "./array-function.js";
import {Car} from "./Car.js";
/*
In the above import the reverseArray is a default function from the 
array-functions file this is imported and needs to be outside of the 
{} brackets, none default functions can still be imported through ]
using the {}
*/

const arr = [1,2,3,'hello'];

console.log(sumAllNumbers([3,4,6,7,8]));
console.log(existsInArr(arr, 1));
console.log(reverseArray([1,2,3]));

//create new instance of car: 
const ford = new Car(2.3, 'Ford', 'Ford');

// ford.engineSize = '1'; //will throw error due to setter

console.log(ford);