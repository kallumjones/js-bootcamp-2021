//For Loops

for (let i = 0; i <10; i++){
    console.log('i +>', i);
}

//loop through array
const numbers = [1,2,3,4,5];

for(let i = 0; i < numbers.length; i++){
    console.log(numbers[i]);
}

//for ... in loop (still uses indexing)
for(let num in numbers){
    console.log(numbers[num]);
}

//for ... of loop (grabs values from start)
const films = ['green mile', 'batman', 'saw'];

for(let film of films){
    console.log('I am watching ', film);
}

//Array forEach

films.forEach((film , index)=> console.log(index, 'I am watching ' + film))

//While Loops

let i = 0;
while (i < 10) {
    console.log('i =>', i);
    i++;
}


