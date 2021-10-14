import {loneSum} from './loneSum';

describe('Lone Sum Challenge:', () => {
    it.each([
        [1,2,3,6],
        [3,2,3,2],
        [1,1,1,0],
        [10,100,1000,1110]
    ]) (
        'Given %i %i %i should return %i', (first, second, third, expected) => {
            const results = loneSum(first, second, third);

            expect(results).toBe(expected);
        }
    )
})