//Session 2 Object recap

const album = {
    title: '21',
    artist: 'Adele',
    year: 2000,
    songs: [{
        name: 'Hello'
    }, {
        name: 'Rolling in the deep'
    }],
    info (){
        return `${this.title} was created by ${this.artist}`;
    }
}

console.log(album);

//access proporties using DOT notation
console.log(album.year);

//to call method/function use () to invoke function.
console.log(album.info());

//JSON

const product = {
    "name": "Samsung TV",
    "saleItem": false,
    "dimensions": [{
        "hight": 234,
        "width": 432,
    }],
    info (){
        return `this is a ${this.name}`;
    }
};

//convert object to JSON
const productAsJSON = JSON.stringify(product);
console.log(productAsJSON);

//convert JSON to object

let productBackAsObj = JSON.parse(productAsJSON);
console.log(productBackAsObj);

//You can also creat an object Explicity usinf the 'ne' keyword
let car = new Object();

car.model = "Ford";

console.log(car);