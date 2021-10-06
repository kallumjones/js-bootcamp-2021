console.log('Session 7');

/*
When to use if vs Switch, 
How many permitations, and what type
Negiable computational power
*/
const foodOption = 'Crisps';

if(foodOption === 'Crisps') {
    console.log('You chose crisps');
} else if(foodOption === 'Drinks') {
    console.log('You chose Drinks');
}

switch(foodOption){
    case 'Crisps':
        console.log('You chose crisps');
        break;
}

//Switch checks 

//====Rest====
//the rest parameter must be the last parameter, 
const sumAllPrimes = (title, ...nums) => {
    console.log(title, nums);
    return [title, nums];
}

console.log('Sum of Prime Numbers: ', sumAllPrimes('primes',1,2,3,4,5));

//===spread===
//shallow copy only copies top layer (the nested layers still are passed by reference)

//array
const people = ['jon','jill'];

const copyOfPeople = [...people]; //creates a shallow copy that doesnt copy reference in memory

copyOfPeople[0] = 'tim';

console.log(people, copyOfPeople);

//object

const album = {
    artist: 'dido',
    song: 'happy'
};

const copiedAlbum = {...album, label: 'sony'};

console.log(album, copiedAlbum);



