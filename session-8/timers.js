//Timers



const TIMER_SECONDS = 5000;

setTimeout(function () {
    console.log('Hello from set timer')
}, TIMER_SECONDS);

//can use either function declartion or define before hand

//Intervals:

setInterval(function() {
    console.log('Hello from interval');
},TIMER_SECONDS);

//remove interval (clearInterval keyword)
const timer = setInterval(function () {
    console.log('running every two seconds');
}, 2000);

function clear() {
    clearInterval(timer);
}

setTimeout(clear, 10000);