import {fahrenheitToCelsius,celsiusToFahrenheit,kelvinToCelsius,celsiusToKelvin,tempDynamic} from './Fahrenheit-to-Celsius';
// const degreeConvertors = require('./Fahrenheit-to-Celsius.js');

// const fahrenheitToCelsius = degreeConvertors.fahrenheitToCelsius;
// const celsiusToFahrenheit = degreeConvertors.celsiusToFahrenheit;
// const kelvinToCelsius = degreeConvertors.kelvinToCelsius;
// const celsiusToKelvin = degreeConvertors.celsiusToKelvin;

// const tempDynamic = degreeConvertors.tempDynamic;

describe('Fahrenheit to Celsius:', () => {
    it.each([
        [32, 0],
        [122, 50],
        [86, 30]
    ])(`given fahrenheit %i should return celsius %i`, (fahrenheit, celsius)=> {
        expect(fahrenheitToCelsius(fahrenheit)).toBe(celsius)
    })
    describe('valid input:', ()=>{
        it('given a non number, should throw an error', () => {
            const temp = 'j';
            expect(() => fahrenheitToCelsius(temp)).toThrow('Please enter a number');
        })

        it('Given fahrenheit < -459.67, should throw error as temp too low', () => {
            const temp = -500;
            expect(() => fahrenheitToCelsius(temp)).toThrow();
        })
    }) 
})

describe('Celsius to Fahrenheit:', () => {
    it.each([
        [0, 32],
        [50, 122],
        [30, 86]
    ])(`given Celsius %i should return Fahrenheit %i`, (celsius, fahrenheit)=> {
        expect(celsiusToFahrenheit(celsius)).toBe(fahrenheit)
    })
    describe('valid input:', ()=>{
        it('given a non number, should throw an error', () => {
            const temp = 'j';
            expect(() => celsiusToFahrenheit(temp)).toThrow('Please enter a number');
        })

        it('Given Celsius < -273.15, should throw error as temp too low', () => {
            const temp = -300;
            expect(() => celsiusToFahrenheit(temp)).toThrow();
        })
    }) 
})

describe('Celsius to Kelvin:', () => {
    it.each([
        [0, 273.15],
        [50, 323.15],
        [86, 359.15]
    ])(`given Celsius %i should return Kelvin %i`, (celsius, kelvin)=> {
        expect(celsiusToKelvin(celsius)).toBe(kelvin)
    })
    describe('valid input:', ()=>{
        it('given a non number, should throw an error', () => {
            const temp = 'j';
            expect(() => celsiusToKelvin(temp)).toThrow('Please enter a number');
        })

        it('Given Celsius < -273.15, should throw error as temp too low', () => {
            const temp = -300;
            expect(() => celsiusToKelvin(temp)).toThrow();
        })
    }) 
})

describe('Kelvin to Celsius:', () => {
    it.each([
        [0, -273.15],
        [50, -223.15],
        [300, 26.85]
    ])(`given Kelvin %i should return Celsius %i`, (kelvin, celsius)=> {
        expect(kelvinToCelsius(kelvin)).toBe(celsius)
    })
    describe('valid input:', ()=>{
        it('given a non number, should throw an error', () => {
            const temp = 'j';
            expect(() => kelvinToCelsius(temp)).toThrow('Please enter a number');
        })

        it('Given fahrenheit < 0, should throw error as temp too low', () => {
            const temp = -3;
            expect(() => kelvinToCelsius(temp)).toThrow();
        })
    }) 
})



describe('Dynamic Function', ()=> {
    it.each([
        [0,'C','F',32],
        [32,'F','C', 0],
        [0,'K','C',-273.15],
        [0,'K','F',-459.67],
        [50,'C','F',122],
        [50,'K','F',-369.67],
        [50,'K','C',-223.15],
    ])(`Given %i %s should return in %s with value %i`, (temp, initial, converted, expected) => {
        expect(tempDynamic(temp, initial, converted)).toBe(expected)
    })
})