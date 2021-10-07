import ShoppingBasket from './shoppingBasket';

describe('ShoppingBasket:', () => {
    let shoppingBasket;

    //set up
    beforeEach(() => {
        shoppingBasket = new ShoppingBasket();
    })

    it('Should initialise with zero items', () => {
        //Instance creation:
        expect(shoppingBasket.items.length).toEqual(0);

    });

    it('Should add Apples to shopping basket', () => {
        //arrange
        const item = 'Apples';

        shoppingBasket.addItems(item);

        expect(shoppingBasket.items.length).toBe(1);
        expect(shoppingBasket.items).toContain(item);

    })

    //tear down
    afterEach(() => {
        shoppingBasket = null;
    })
})

