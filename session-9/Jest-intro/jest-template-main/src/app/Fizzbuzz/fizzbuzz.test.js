import {fizzBuzz, fizzBuzzRange} from './fizzbuzz';

describe('FizzBuzz:', () => {
    it('Given a multiple of 3 return Fizz', () => {
        const number = 6;
        expect(fizzBuzz(number)).toBe('Fizz');
    })

    it('Given a mutiple of 5, returns Buzz', () => {
        const number = 10;
        expect(fizzBuzz(number)).toBe('Buzz');
    })
    it('Given a mutiple of 3 and 5, returns FizzBuzz', () => {
        const number = 15;
        expect(fizzBuzz(number)).toBe('FizzBuzz');
    })
    it('Given a number but a mutiple of 3 or 5 returns itself', () => {
        const number = 2;
        expect(fizzBuzz(number)).toBe(number);
    }) 
    describe('Valid Input', () => {
        it('catch error if input is not a number', () => {
            const input = 'one';
            expect(() => fizzBuzz(input)).toThrow();
        })

        it('Catch error: needs to be positive', () => {
            const input = -1;
            expect(() => fizzBuzz(input)).toThrow();
        })
    })
    describe('FizzBuzzRange:', () => {
        it('Given a Range, returns array correct length', () => {
            const minValue = 1;
            const maxValue = 20;
            const results = fizzBuzzRange(minValue, maxValue);
            expect(results.length).toBe(20);
        })
        it('if min value = 1 and max vlaue = 5, get correct output', () =>{
            const minValue = 10;
            const maxValue = 15;
            const results = fizzBuzzRange(minValue, maxValue);
            expect(results).toEqual(['Buzz',11,'Fizz',13,14,'FizzBuzz']);
        })
    })
})

describe('Fizzbuzz with each', ()=>{
    it.each([
        [1,1],
        [3,'Fizz'],
        [5,'Buzz'],
        [15,'FizzBuzz']
    ])('When given %i should return %s', (number, expected) => {
        expect(fizzBuzz(number)).toBe(expected);
    });
});
