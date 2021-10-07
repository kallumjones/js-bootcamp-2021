/*

Validate passwords to ensure that:
- They are at least 8 characters long
- contain at least one letter
- conatin at least one number

*/

import {validatePassword} from './ValidatePassword'; 

describe('Validate Password', () => {
    //Given... When... Then...
    it('Should return false when password is empty', () => {
        expect(validatePassword('')).toBe(false);
        // expect(validatePassword('')).toBeFalsy(); //example of another match
    })

    it('Should return true when length of password is at least 8', () => {
        const password = '1234567a';

        expect(validatePassword(password)).toBe(true);
    })

    it('Should return false when only numbers in password', () => {
        const password = '12345678'

        expect(validatePassword(password)).toBe(false);
    })

    it('Should return false when only letter in password', () => {
        const password = 'abcdefgh'

        expect(validatePassword(password)).toBe(false);
    })

    it('Should return false when only capital letter in password', () => {
        const password = 'ABCDEFGH'

        expect(validatePassword(password)).toBe(false);
    })

    it('Should return false when only capital letter in password', () => {
        const password = 'ABCDEFGH'

        expect(validatePassword(password)).toBe(false);
    })
})