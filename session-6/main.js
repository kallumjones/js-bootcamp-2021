console.log('Session 6');

//=====Callback Functions=====

const people = ['John', 'Chris', 'Ben', 'Lauren', 'Phil'];

const looper = (argument) => {
    console.log('argument', argument);
}

people.forEach(looper);

//Assyncornous
//Can happen in any order

//syncronous
//Happens in an order/sequentially

//Fast Food Example

const makeDrink = (callback) => {
    setTimeout(() => {
        console.log('Making Drink')
        let drink = 'Oasis'; //can pass a variable into the callback if needed
        callback(drink); //Call the intended downstream function
    },3000);
}; 

const makeFries = (typeOfDrink) => {
    console.log('Making Fries', typeOfDrink);
};

const makeBurger = () => {
    console.log('Making Burger');
};

const orderMeal = () => {
    makeBurger();
    makeDrink(makeFries);//dont include parenthesis when using a function in an argument as don't want to invoke
};

//This will console log burger, drink, fries
/*
A call back will run the next function once has finished, in the above example
makeFries will run once makeDrink has finished
*/
orderMeal();