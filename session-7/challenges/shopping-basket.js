/*

Shopping Basket

We should be able to 
-Create a shopping basket and have a total of 0
-Be able to add a single item and have it's value added to the total
-Be able to add mulitple items and accumulate the total of the items
-Be able to add the same item multiple times and accumulate the total of items

As a class
retrieve the total at any time

*/

/*
Idea
item has name, price, quantity
*/

const cheese = {
    name: 'cheese',
    price: 3.99,
    quantity: 1
};

const shoppingList = [{
    name: 'cheese',
    price: 2.99,
    quantity: 5
}, {
    name: 'chocolate',
    price: 4.50,
    quantity: 2
}, {
    name: 'apple',
    price: 0.50,
    quantity: 1
}];

class ShoppingBasket {
    constructor() {
        this._basket = {};
        this._currentQuantity = 0;
        this._total = 0;
    }

    addItem (items) {

        for(let i =0; i < items.length; i++){
            if(Object.keys(this._basket).includes(items[i].name)) {
                this._basket[items[i].name] += items[i].quantity;
            } else {
                this._basket[items[i].name] = items[i].quantity;
            }
            this._currentQuantity += items[i].quantity;
            this._total += Math.round((items[i].price * items[i].quantity) * 100)/100;
        }
    }

    get total() {
        return this._total;
    }

}


const newBasket = new ShoppingBasket();


newBasket.addItem(shoppingList);
newBasket.addItem([cheese]);
// newBasket.addItem([cheese]);

console.log(newBasket);
console.log(newBasket.total);
