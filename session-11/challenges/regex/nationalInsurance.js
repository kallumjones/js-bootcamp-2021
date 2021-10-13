/*
In general a national insurance number has the following pattern:

Two letters
hyphen
Two numbers
hyphen
Two numbers
A letter

Write a function that checks if the value provided meets the above criteria. Return true when it does, false otherwise.
*/

const isValidNationalInsurance = (ni) => {
    const nationalInsuranceRE = /^[a-z]{2}-[0-9]{2}-[0-9]{2}[a-z]/i;
    // console.log(ni.match(nationalInsuranceRE));
    return nationalInsuranceRE.test(ni);
}

console.log(isValidNationalInsurance('werrrrr-89-34A'));

console.log(isValidNationalInsurance('we-89-34A'));