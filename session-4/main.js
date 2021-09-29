// =========Scope=========

//Const and let have block scope, if defined within {} can be called inside only

let num = 1;

if(num > 0){
    let num = 2;
    console.log("1. num called inside:", num); //should show 2
    if(true){
        const anotherNumber = 23;
        console.log("2. another Number block scope:", anotherNumber); //should show 23

        console.log('3. num called again inner global:', num); //should show 2
    }
};

console.log("4. outside code block global num:", num) //should show 1

//example 2

if(true){
    const text = 'Hello';
    console.log('Text inside code block:', text);
}

// console.log('Reference error as text is not gloabl scope', text);
