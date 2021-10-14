import {humanReadableTime} from './humanReadableTime';

describe('Time Challenge:', () => {
    it('Given just seconds should return 00:00:seconds', () => {
        const results = humanReadableTime(45);

        expect(results).toBe('00:00:45');
    })   
    it('Given just single minutes should return 00:0minute:00', () => {
        const results = humanReadableTime(120);

        expect(results).toBe('00:02:00');
    })  
    it('Given just minutes should return 00:minutes:00', () => {
        const results = humanReadableTime(660);

        expect(results).toBe('00:11:00');
    })
    it('Given just hours should return hours:00:00', () => {
        const results = humanReadableTime(3600);

        expect(results).toBe('01:00:00');
    })
    it('Given too large input throw error', () => {
        expect(() => humanReadableTime(379999)).toThrow('Input is too large');
    })
})