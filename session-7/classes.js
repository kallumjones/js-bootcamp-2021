class Person {
    //class body
    constructor(name, age, gender) {
        this.name = name;
        this.age = age;
        this.gender = gender;
    }

    // set (name) {
    //     this.name = name;
    // }

    // get name() {
    //     return this.name;
    // }
}


//S.O.L.I.D (read up on in own time) 

const frank = new Person('Frank', 23, 'M');

console.log(frank.name);

//exmaple Name:
class Animal {
    constructor(name) {
        this.name = name;
    }

    move() {
        console.log(this.name, 'is moving');
    }
}

class Lion extends Animal {
    constructor(name, age){
        super(name);
        this.age = age;
    }

    getAge() {
        return this.age;
    }
}

const leoTheLion = new Lion('Leo', 12);
leoTheLion.move()
console.log(leoTheLion.getAge());
