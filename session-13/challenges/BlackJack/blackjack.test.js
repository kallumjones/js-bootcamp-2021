import {blackjack} from './blackjack';

describe('Blackjack Challenge:', () => {
    it('Given both numbers over 21 return 0', () => {
        const results = blackjack(23,24);

        expect(results).toBe(0);
    })
    it('Given number one is closest return number one', () => {
        const results = blackjack(20,17);

        expect(results).toBe(20);
    })
    it('Given number two is closest return number two', () => {
        const results = blackjack(19,21);

        expect(results).toBe(21);
    })
    it('given both numbers are equal and 21 or under should return draw', () => {
        const results = blackjack(19,19);

        expect(results).toBe('Draw');
    })
    it('given one bust one under 21 return number under 21', () => {
        const results = blackjack(23,20);
        expect(results).toBe(20);
    })
})