/*

Create a function that takes in a phone number that can match any uk phone number patterns

07856766543 (11 digits in a row)
0785 676 6543 (4 3 4 digits)
+447856766543 (+44 followed by 10 digits)
+44 7856766543 (+44 followed by space and 10 digits)
(44) 7856766543 ((44) followed by space and 10 digits)

*/

/*
Advanced - can i bring opitional ? into this

*/

const isValidUkPhoneNumber = (phoneNumber) =>{
    const powerfulRE = /\(?\+?4?4?\)?[0-9]{4}\s?[0-9]{3}\s?[0-9]{3,4}/;

    // const allDigitsRE = /[0-9]{11}/;
    // const digitGroupsRE = /[0-9]{4}\s[0-9]{3}\s[0-9]{4}/;
    // const thirdRE = /^\+44[0-9]{10}/;
    // const fourthRE = /^\+44\s[0-9]{10}/;
    // const fifthRE = /^\(44\)\s[0-9]{10}/;

    // const valid = allDigitsRE.test(phoneNumber) 
    // || digitGroupsRE.test(phoneNumber) 
    // || thirdRE.test(phoneNumber) 
    // || fourthRE.test(phoneNumber) 
    // || fifthRE.test(phoneNumber);

    // return valid;

    return powerfulRE.test(phoneNumber);
}

console.log(isValidUkPhoneNumber('07856766543'));
console.log(isValidUkPhoneNumber('0785 676 6543'));
console.log(isValidUkPhoneNumber('+447856766543'));
console.log(isValidUkPhoneNumber('+44 7856766543'));
console.log(isValidUkPhoneNumber('(44) 7856766543'));