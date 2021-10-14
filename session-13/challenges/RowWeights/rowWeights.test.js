import { rowWeights } from "./rowWeights";

describe('Row Weights Challenege:', () => {
    it.each([
        [[13, 27, 49],[62, 27]],
        [[13],[13,0]],
        [[13,14,13,14,13,14],[39,42]]
    ]) ('Give array %s should return array %s', (input, expected) => {
        const results = rowWeights(input);

        expect(results).toEqual(expected);
    })
})