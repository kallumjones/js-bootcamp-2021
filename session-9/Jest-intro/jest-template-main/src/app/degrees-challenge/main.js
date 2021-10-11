import { tempDynamic } from "./Fahrenheit-to-Celsius.js";
console.log('Temp converter');
//DOM Selectors

const submitBtn = document.querySelector('.submit-btn');
const tempInput = document.getElementById('temp-input');

const getTemp = (event) => {
    event.preventDefault();


    const initialTemperature = document.querySelector('input[name=initial]:checked').value;
    const convertTemperature = document.querySelector('input[name=convert]:checked').value;
    const temperature = Number(tempInput.value);

    let results = tempDynamic(temperature, initialTemperature, convertTemperature)
    results = Math.round(results*100)/100;
    document.getElementById('temp').innerHTML = `${results} &deg;${convertTemperature}`;


}



submitBtn.addEventListener('click', getTemp);

