import {fahrenheitToCelsius} from './Fahrenheit-to-Celsius';

describe('Fahrenheit to Celsius:', () => {
    it('Should fahrenheit 32 should produce 0 celsius', () => {
        const temp = 32;
        expect(fahrenheitToCelsius(temp)).toBe(0);
    })
    it('should fahrenheit 122 should produce 50 celsius', () =>{
        const temp = 122;
        expect(fahrenheitToCelsius(temp)).toBe(50);
    })
    it('With Formula 86 fahrenheit should return 30 celsius', () => {
        const temp = 86;
        expect(fahrenheitToCelsius(temp)).toBe(30);
    })
    describe('valid input:', ()=>{
        it('given a non number, should throw an error', () => {
            const temp = 'j';
            expect(() => fahrenheitToCelsius(temp)).toThrow('Please enter a number');
        })

        // it('Given temo >= 100, should throw error as temp to high', () => {

        // })
    }) 
})