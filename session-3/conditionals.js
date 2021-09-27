//conditionals

//if statement 

/*
if(expression is true)
{do this}
*/

let personAge = 18;
if(personAge > 16) {
    console.log('Can Vote');
} else {
    console.log('Can\'t Vote');
}

//else if
const baggageAllowanceInLbs = 25;
let addittionalCost = 100;

if(baggageAllowanceInLbs < 20){
    console.log('No additional costs');
} else if (baggageAllowanceInLbs < 30) {
    console.log('Additional charge is 5');
    addittionalCost += 5;
} else if (baggageAllowanceInLbs < 40){
    console.log('additional charge is 10');
    addittionalCost += 10;
} else {
    console.log('woah')
}

//ternary operator ?

const amount = 100;
const shouldChargeTax = amount > 50 ? true : false;

//switch statements

const coinInserted = 20;

switch (coinInserted) {
    case 20: //what this does is if coinInserted is 20 or 50 runs line 45;
    case 50:
        console.log(`You inserted ${coinInserted}`);
        break;
    case 100:
        console.log('coin not accepted');
        break;
    default:
        console.log('please enter coin');
        break;
}
