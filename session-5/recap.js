console.log('****** Fundamentals 5 ******');

// Functions:

//declaration (Global):
function debitAccount(account, amount) {

    account.total += amount;

    return account;
}

//calling/invoke:
const account = {
    total: 0
};
const amount = 100;

console.log(account); //in the broswer will show updated value

const updatedAccount = debitAccount(account, amount);

console.log(account); //passed by reference so still updated as havent "copied" account
console.log(updatedAccount); //passed by reference so also points to same object

//function Expression:
const greet = () => console.log('Hello')

greet()

//Functions with default values (in the parameters can use = to set up default variables)

const makeCoffee =(coffeeType, coffeeOptions = {toppings: ['cream'],
hasMilk: true, hasSugar: false}) => {
    // console.log(`Coffee: ${coffeeType}, coffee Options: ${JSON.stringify(coffeeOptions)}`)

    let coffeeMessage = '';

    if(coffeeType === 'cappuccino'){
        coffeeOptions.toppings.forEach(function(topping){
            coffeeMessage += `Added ${topping} `;
        })

        coffeeMessage += 'Enjoy your ' + coffeeType
    } else {
        coffeeMessage = 'Sorry we do not sell ' + coffeeType;
    }

    return coffeeMessage
};

const coffeeType = 'cappuccino';
const coffeeOptions = {
    toppings: ['vanilla'],
    hasSugar: true,
    hasMilk: false
}

console.log(makeCoffee(coffeeType));