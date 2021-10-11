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
     } else if (temp < -459.67) {
         throw new Error('Temp in Fahrenheit too low, please enter higher number');
     } else {
        const celsius = (temp - 32) * 5/9;
        return celsius;
     }
};

export const celsiusToFahrenheit = (temp) => {
    if(typeof temp !== 'number'){
        throw new Error('Please enter a number');
    } else if (temp < -273.15) {
        throw new Error('Temp in celsius too low, please enter a higher number');
    } else {
        const fahrenheit = (temp / (5/9)) + 32;
        return fahrenheit;
    }
};

export const kelvinToCelsius = (temp) => {
    if(typeof temp !== 'number'){
        throw new Error('Please enter a number');
    } else if (temp < 0) {
        throw new Error('Temp in Kelvin too low, please enter a higher number');
    } else {
        const celsius = Math.round((temp - 273.15)*100)/100;
        return celsius;
    }
}

export const celsiusToKelvin = (temp) => {
    if(typeof temp !== 'number'){
        throw new Error('Please enter a number');
    } else if (temp < -273.15) {
        throw new Error('Temp in celsius too low, please enter a higher number');
    } else {
        const kelvin = Math.round((temp + 273.15)*100)/100;
        return kelvin;
    }
}

export const kelvinToFahreinheit = (temp) => {
    if(typeof temp !== 'number'){
        throw new Error('Please enter a number');
    } else if (temp < 0) {
        throw new Error('Temp in Kelvin too low, please enter a higher number');
    } else {
        const kelvin = Math.round(((temp - 273.15) * (9/5) + 32)*100)/100;
        return kelvin;
    }
}

export const fahreinheitToKelvin = (temp) => {
    if(typeof temp !== 'number'){
        throw new Error('Please enter a number');
    } else if (temp < -459.67) {
        throw new Error('Temp in Fahrenheit too low, please enter higher number');
    } else {
        const kelvin = Math.round((((temp - 32)/(9/5)) + 273.15)*100)/100;
        return kelvin;
    }
}

export const tempDynamic = (temp, initial, converted) => {

    if(/[KFC]/.test(initial) === false || /[KFC]/.test(converted === false)){
        throw new Error('please enter valid conversion or initial state')
    } else {
        let result;
        
        switch(initial) {
            case 'C':
                if(converted === 'K'){
                    result = celsiusToKelvin(temp); 
                } else if (converted === 'F') {
                    result = celsiusToFahrenheit(temp);
                } else {
                    result = temp;
                }
                break;
            case 'K':
                if(converted === 'C'){
                    result = kelvinToCelsius(temp); 
                } else if (converted === 'F') {
                    result = kelvinToFahreinheit(temp);
                } else {
                    result = temp;
                }
                break;
            case 'F':
                if(converted === 'K'){
                    result = fahreinheitToKelvin(temp); 
                } else if (converted === 'C') {
                    result = fahrenheitToCelsius(temp);
                } else {
                    result = temp;
                }
                break;
        }
        return result;
    }
}

// console.log(fahrenheitToCelsius(30));

// module.exports = {
//     fahrenheitToCelsius, 
//     celsiusToFahrenheit, 
//     kelvinToCelsius, 
//     celsiusToKelvin,
//     kelvinToFahreinheit,
//     fahreinheitToKelvin,
//     tempDynamic};
