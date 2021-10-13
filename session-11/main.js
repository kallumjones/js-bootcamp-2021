//====Regular Expressions==

//creates a regular expression as a variable
const messageRE = /hello/;
const actualMessage = 'hello';

//verifies if there is a match and returns true or false
if(messageRE.test(actualMessage)){
    console.log(`actual message: ${actualMessage} contains regex ${messageRE}`);
}

const phrase = `
The fat cat ran down the street.
It was searching for a mouse to eat.
`;

//g is global 
const atRE = /at/g;

console.log(atRE.exec(phrase));
console.log(phrase.match(atRE));

const phone = '123-456';
const re = /(\d{3})-(\d{3})/;

console.log(...phone.match(re));


