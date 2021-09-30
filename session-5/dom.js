console.log('Dom connected');

console.log(document);

//Selectors:
//To select a HTML element by their id
const headingElement = document.getElementById('heading');

console.log(headingElement);

//InnerHTML gets the inner HTML of the HTML element
console.log(headingElement.innerHTML);

headingElement.innerHTML = 'I Just Changed You!';

//another way is grab element by query selector
const paragraph = document.querySelector('.paragraphs');

console.log(paragraph.innerHTML);

//CSS class is accessed through dot notation
//CDD id is accessed through # notation

const allListItems = document.querySelectorAll('.item');

console.log(allListItems);

allListItems.forEach(item => console.log(item.innerHTML));


//Difference between innerHTML and innerText...

//select using a data attribute:
//Used [] in a query selector
const image = document.querySelector('[data-custome-image-name]');

console.log(image);

//select by class name:
const paragraohByClassName = document.getElementsByClassName('paragraphs');
console.log(paragraohByClassName);

//Event Handling:

function headingListener () {
    console.log('You clicked the heading')
}

function paraHover() {
    console.log('You hovered over paragraph');
}

//how to add an event listener through javaScript
const listAdderBtn = document.getElementById('listAdderBtn');
const numberList = document.querySelector('.number-list');

listAdderBtn.addEventListener('click',function() {
    const listItem = document.createElement('li');
    listItem.classList.add('item');

    listItem.innerHTML = Math.floor(Math.random() * 100);

    numberList.appendChild(listItem);
    //listItem.is = 'myNewId'
    console.log(listItem);
})


//event handler
const commentsBox = document.getElementById('comments');

function validateComments (event){
    const currentInput = event.target.value;
    const numbersRE = /[0-9]/;
    if(numbersRE.test(currentInput)) {

    console.log(currentInput);
    }

}

commentsBox.addEventListener('keyup', validateComments);