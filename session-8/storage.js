//Storage: cookies, localStorgae and session Storage

//locat storage:
//can store in local 

//Adding a new item to local storage: key:value
localStorage.setItem('name', 'foo');
localStorage.setItem('sport', 'rugby');

/*
If you were to visualise above (can see in application tab on inspect)
|key|value|
name|foo
sport|rugby
*/

//Retrieve 'sport' from storage:

const sportValue = localStorage.getItem('sport');
console.log(sportValue);

//arrays and objects need to be turned to JSON to save in local storage:

const countries = ['france','germany']

localStorage.setItem('countries', JSON.stringify(countries));

const countriesFromStorage = JSON.parse(localStorage.getItem('countries'));

console.log(countriesFromStorage);

//Adding an Object:

const product = {
    name: 'coke',
    price: 12.0
}

localStorage.setItem('product', JSON.stringify(product));

const objectFromStorage = JSON.parse(localStorage.getItem('product'));

console.log(objectFromStorage);

//to remove item

localStorage.removeItem('product');
localStorage.removeItem('name');
localStorage.removeItem('countries');
localStorage.removeItem('sport');

//Session Storage

//can check if session storage exists
/*
if(sessionStorage){

}
*/

sessionStorage.setItem('id', 1234567);

//same prinicples apply for storing array and objects in session storage (as above)

//Cookies:

//can create cookies using document

// document.cookie = `name=John Doe; expires=` + new Date(2025,0,1).toUTCstring();


