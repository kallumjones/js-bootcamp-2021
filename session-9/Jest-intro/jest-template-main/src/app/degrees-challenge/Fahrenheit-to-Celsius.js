/*


Write a function to convert Fahrenheit to Celsius

Write a function to convert Celsius to Fahrenheit

Through tdd methodogy
    To do this, get exmaple e.g. 32 F => 0 C, then create test for this
    once test is created make the function work will as little code as possible
    then do another exmaple, then add function in to make it dynamic, 
    then start testing edge cases..

    Do the resverse functions, 

    Add dynamic in..

Write the same for Kelvin, then create dynamic function that can deal with all three

if fancy try and create a UI for the above

((Fahrenheit - 32) * 5 / 9)

*/
 export const fahrenheitToCelsius = (temp) =>{
     if(typeof temp !== 'number'){
         throw new Error('Please enter a number');
     } else {
        const celsius = (temp - 32) * 5/9;
        // console.log(celsius);
        return celsius;
     }
}
