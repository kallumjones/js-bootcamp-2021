/*
Assuming you have the following:


*/

const names = ['Hole in one!', 'Eagle', 'Birdie', 'Par', 'Bogey', 'Double Bogey', 'Quit'];
const par = 5;
const strokes = 2;

//If else

if(strokes === 1){
    console.log(names[0]);
} else if (strokes <= par -2){
    console.log(names[1]);
} else if (strokes === par -1){
    console.log(names[2]);
} else if (strokes === par){
    console.log(names[3]);
} else if (strokes === par + 1){
    console.log(names[4]);
} else if (strokes === par + 2){
    console,log(names[5]);
} else if(strokes >= par + 3){
    console.log(names[6]);
}

//Swicth method, does not work for less than and equals.

// switch (strokes) {
//     case 1:
//         console.log(names[0]);
//         break;
//     case strokes <= par - 2:
//         console.log(names[1]);
// }