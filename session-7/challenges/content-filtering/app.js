const names = [
  "Karena",
  "Angelia",
  "Leone",
  "Brandon",
  "Judie",
  "Euna",
  "Harriett",
  "Sharan",
  "Forest",
  "Ingrid",
  "Johana",
  "Ben",
  "Peter",
  "Paul",
  "Noah",
  "Isidra",
  "Junko",
  "Sparkle",
  "Quentin",
  "Dorethea",
  "Delpha",
  "Desiree",
  "Val",
  "Lakeisha",
  "Charis",
  "Yahyah",
  "Rochell",
  "Iliana",
  "Neil",
  "Shelba",
  "Lala",
  "Vennie",
  "Tijuana",
  "Faustina",
  "Nadeen",
  "Shoshana",
  "Michael",
  "Oliver",
  "Oscar",
  "Adan",
  "Lucio",
  "Vernie",
  "Mandy",
  "Winston",
  "Zoe",
];
const alpha = "ABCDEFGHIJKLMNOPQRSTUVWYZ";

const renderNames = () => {
  const letters = alpha.split("");
  const ulElement = document.getElementById("namesList");

  letters.forEach((letter) => {
    const liHeader = document.createElement("li");
    liHeader.classList.add("collection-header");

    const liHeading = document.createElement("h5");
    liHeading.textContent = letter.toUpperCase();

    liHeader.appendChild(liHeading);

    ulElement.appendChild(liHeader);

    names
      .filter((name) => name.toUpperCase().startsWith(letter))
      .map((name) => {
        const liItem = document.createElement("li");
        liItem.classList.add("collection-item");

        const anchorForName = document.createElement("a");
        anchorForName.textContent = name;

        liItem.appendChild(anchorForName);

        ulElement.appendChild(liItem);
      });
  });
};

window.addEventListener("load", renderNames()); // good job we didn't change this, at all, ever..... XD

// Your code can go here ...
//Get selectors
const wordInput = document.getElementById('filterInput');
const listOfNames = document.querySelectorAll('.collection-item');
const listOfHeaders = document.querySelectorAll('.collection-header');

//add event listener to the text input
wordInput.addEventListener('keyup', function(event) {

  const currentInput = event.target.value;
  const currentInputCap = currentInput.toUpperCase();


  let capitalLetters = [];
  listOfNames.forEach(element => {
    if(!element.innerText.toUpperCase().includes(currentInputCap)){
      element.style.display = "none";
    } else {
      capitalLetters.push(element.innerText.slice(0,1));
      element.style.display = "block";
    }
  });
    // console.log(capitalLetters);
  
  listOfHeaders.forEach(element => {
    if(!capitalLetters.includes(element.innerText)){
      element.style.display = "none";
    } else {
      element.style.display = "block";
    }
  });
})