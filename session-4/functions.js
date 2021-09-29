console.log('Functions');

//Hoisting
/*

*/

//Functions:
//Methods: 
//Altough lots of people use these terms interchangable

//Function declaration:
//Uses keyword function

function sayMessage() {
    console.log('Hello');
}

//invoke function uses () at the end of function

sayMessage();

//Function expression:
//uses const = 
//class as annonomous function, as name is const variable
//should end with ; same as defining normal const variables

const sayAnotherMessage = function() {
    console.log('Another Message Called');
};

sayAnotherMessage();

//ES6 fat arrow

const sayOneMoreMessage = () => {
    console.log('One More Message');
}

//zero parameters needs ()
//one parameter can  = num => {}
//two or more = (param1, param2) => {}

sayOneMoreMessage();

// ======invoke right away=====
let name = 'Kallum';

(function() {
    console.log("This will run right away", name);
})(name); 

// ======Functions with Params====

//Parameters are variables listed as a part of the function definition. 
//Arguments are values passed to the function when it is invoked

function addFive(num) {
    return num + 5;
}

const result = addFive(3);

console.log(result);

const addFiveArrow = num => num + 5; //one line does not need {} brackets

//SRP -- Single Responsibility Principle
//KISS -- Keep It Simple Stupid
//DRY -- Don't Repeat Yoursel