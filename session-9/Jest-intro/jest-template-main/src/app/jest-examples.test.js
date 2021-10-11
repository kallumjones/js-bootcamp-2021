describe('Add all numbers', () => {
    it.each([
        [1,1,2],
        [3,4,7],
    ]) (`Should add %i to %i to give %i`, (first, second, expected) => {
        const result = first + second;
        expect(result).toBe(expected);
    })
})