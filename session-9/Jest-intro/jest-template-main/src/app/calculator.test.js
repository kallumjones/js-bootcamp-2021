import { addAllNumbers, divide } from './calculator'; 

describe('Calculator:', () => {
    describe('Valid Input:' , () => {
            it('Should add all numbers', () => {
            //AAA
            //ARRANGE (MAY OR MAY NOT BE HERE):
            const arr = [1, 2, 3];
        
            //ACT (test/create variable):
            const result = addAllNumbers(arr);
        
            //ASSERT
            expect(result).toBe(6);
        })
        
        it('Should divide two numbers', () => {
            const num1 = 10;
            const num2 = 2;
    
            const result = divide(num1,num2);
    
            expect(result).toBe(5);
        })
    })

    describe('Invalid input:', () => {
        it('Should not add text value when adding numbers', () => {
            
            //ARRANGE (MAY OR MAY NOT BE HERE):
            const arr = [1, 2, 3, 'hello', '5'];

            //ACT
            const result = addAllNumbers(arr);

            expect(result).toBe(6);
        })
        //How to catch an thrown error in a test, in expect add annon function
        it('Should throw error when dividing by zero', () => {
            expect(() => divide(2,0)).toThrow();
        })
    })
})

//use keyword test first argument is a description, second is annon function with body of test
// test('Should add all numbers', () => {
//     //AAA
//     //ARRANGE (MAY OR MAY NOT BE HERE):
//     const arr = [1, 2, 3];

//     //ACT (test/create variable):
//     const result = addAllNumbers(arr);

//     //ASSERT
//     expect(result).toBe(6);
// })

// test('Should divide two numbers', () => {
//     const num1 = 10;
//     const num2 = 2;

//     const result = divide(num1,num2);

//     expect(result).toBe(5);
// })

