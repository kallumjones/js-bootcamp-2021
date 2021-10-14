import { sortByHeight } from "./SortByHeight";

describe('Sort By Heights Challenge:', () => {
    it('Given an array should sort apart from trees (-1)', () => {
        const resultsOne = sortByHeight([-1, 150, 190, 170, -1, -1, 160, 180]);
        const resultsTwo = sortByHeight([-1,-1,-1,21,20,-1,-1,-1]);
        expect(resultsOne).toEqual([-1, 150, 160, 170, -1, -1, 180, 190]);
        expect(resultsTwo).toEqual([-1,-1,-1,20,21,-1,-1,-1]);
    })
})