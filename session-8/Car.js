//Pascal case:
export class Car {
    constructor(engineSize, make, manufacturer) {
        this._engineSize = engineSize;
        this._make = make;
        this._manufacturer = manufacturer;
    }

    set engineSize(engineSize) {
        if(typeof engineSize === 'number'){
            this._engineSize = engineSize;
        } else {
            throw new Error('engine size needs to be a number');
        }
    }

    get engineSize() {
        return this._engineSize;
    }
}

const ford = new Car(2.3, 'Ford', 'Ford');

// ford.engineSize = '1.2';
ford.wheel = 'nice';

console.log(ford.engineSize);