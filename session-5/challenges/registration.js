/*

Custom Registration

Write a function that creates a custom car registration.

Your function should:

Replace 'A' with the number 4.
Replace 'B' with the number 8.
Replace 'S' with the number 5.
Replace 'E' with the number 3.
Any other number/letter is returned as the number itself

So passing:

MSSA SMK

should yield: M554 5MK

Caveats:

The registration must be 8 in length (which includes one space)
The first letter is to be ignored for conversion

The function should return the outcome
*/

//Replace all (doesn't seem to work within node...)

function customReg(registration) {
    let splitRegArray = registration.split("");
    if (
      splitRegArray.length === 8 &&
      splitRegArray.filter((ele) => ele === " ").length === 1
    ) {
      let firstLetter = registration.slice(0, 1);
      let restOfReg = registration.slice(1).toUpperCase();
  
      // console.log(firstLetter);
      // console.log(restOfReg);
  
      //replaceALl works in browser but not in node
      restOfReg = restOfReg.replaceAll("A", 4);
      restOfReg = restOfReg.replaceAll("B", 8);
      restOfReg = restOfReg.replaceAll("S", 5);
      restOfReg = restOfReg.replaceAll("E", 3);

      //replace with regexp global works for node .js
      // restOfReg = restOfReg.replace(/A/g, 4);
      // restOfReg = restOfReg.replace(/B/g, 8);
      // restOfReg = restOfReg.replace(/S/g, 5);
      // restOfReg = restOfReg.replace(/E/g, 3);
      // console.log(restOfReg);
  
      return firstLetter + restOfReg;
    } else {
        return("Please Enter a Valid Registration");
    }
  }
  
//Loop and Switch method

  function customeRegLoop(registration) {
    let splitRegArray = registration.split("");
    // console.log(registration.split(" "));
    if (splitRegArray.length === 8 && registration.split(" ").length === 2) {
      for(let i = 1;i < splitRegArray.length; i++){
        switch(splitRegArray[i]){
            case 'A':
                splitRegArray[i] = 4;
                break;
            case 'B':
                splitRegArray[i] = 8;
                break;
            case 'S':
                splitRegArray[i] = 5;
                break;
            case 'E':
                splitRegArray[i] = 3;
                break;
            }
        }
        return splitRegArray.join('');
    } else {
      return ("Please Enter a Valid Registration");
    }
  }
  
  console.log("MSSA SMK => ", customReg("MSSA SMK"));
  console.log("AAA HH H => ", customReg("AAA HH H"));
  console.log("AFP 34SD => ", customReg("AFP 34sD")); //test first was A
  

  console.log("MSSA SMK => ", customeRegLoop("MSSA SMK"));
  console.log("AAA HH H => ", customeRegLoop("AAA HH H"));
  console.log("AFP 34SD => ", customeRegLoop("AFP 34sD")); //test first was A




