const words = [
    'heavenly',
    'discover',
    'increase',
    'scientific',
    'mint',
    'flippant',
    'oatmeal',
    'mend',
    'ship',
    'amount',
    'telling',
    'moan',
    'rotten'
];

let time = 7; //time left to play the game
let score = 0; //keeps track of score
let isPlayingGame; //determines if the user is playing.

//DOM Selectors:
const secondDisplay = document.getElementById('seconds');
const startButton = document.getElementById('start-button');
const wordInput = document.getElementById('word-input');
const currentWord = document.getElementById('current-word');
const scoreDisplay = document.getElementById('score');
const timeDisplay = document.getElementById('time');
const message = document.getElementById('message');
const seconds = document.getElementById('seconds');

//initialise the game:
const initialise = () => {
    console.log('Initialised Game!!');
    //hide button
    startButton.classList.add('hide');

    //fetch new random word
    showWord();

    //Fetch the users input
    wordInput.addEventListener('input', checkInput)

    //call count down by one second:
    setInterval(countDownTimer, 1000);

    setInterval(checkGameStatus, 500);
}

const checkGameStatus = () => {
    if(!isPlayingGame && time === 0){
        message.innerHTML = 'Game Over';
        score = -1;
    }
}

const countDownTimer = () => {
    if(time > 0){
        time--;
    } else if(time === 0){
        isPlayingGame = false;
    }

    timeDisplay.innerHTML = time;
}

const checkWordsMatched = () => {
    let matched = false;
    if(wordInput.value === currentWord.innerHTML){
        if(score === -1) {
            message.innerHTML = 'New Game';
            console.log('here');
        } else {
        message.innerText = 'CORRECT';
        }
        matched = true;
    } else if(message.innerText !== 'Game Over'){
        message.innerText = '';
    }

    return matched;
}

const checkInput = () => {
    if(checkWordsMatched()){
        //there was a match here:
        isPlayingGame = true;

        //show new word for game to start
        showWord();

        //reset the Input;
        wordInput.value = '';

        score++;

        if(score < 10) {
            time = 7
        } else if (score < 20){
            secondDisplay.innerText = 5;
            if(score === 10){
                message.innerText = 'Level up';
            }
            time = 5;
        } else {
            secondDisplay.innerText = 3;
            if(score === 20){
                message.innerText = 'Level up';
            }
            time = 3;
        }

    }

    if(score === -1){
        scoreDisplay.innerHTML = 0;
    } else {
        scoreDisplay.innerHTML = score;
    }
}

const showWord = () => {
    const wordSelected = words[Math.floor(Math.random() * words.length)];
    
    currentWord.innerHTML = wordSelected;
}

startButton.addEventListener('click', initialise);