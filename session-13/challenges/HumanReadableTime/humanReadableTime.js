/*
Write a function, which takes a non-negative integer (seconds) as input 
and returns the time in a human readable format (HH:MM:SS)
HH = hours, padded to 2 digits, 
range 00-99 MM = hours, padded to 2 digits, 
range 00-59 SS = seconds, padded to 2 digits, 
range 00-59
The maximum time never exceeds 359999 (99:59:59)
*/

 export const humanReadableTime = (seconds) => {

    if(seconds > 359999) {
        throw new Error('Input is too large');
    } 
    const hours = Math.floor((seconds/3600) % 3600);
    const minutes = Math.floor(((seconds - (hours * 3600))/60) % 60);
    const secondsRemaining = seconds - (hours * 3600) - (minutes * 60);
    //format and pad numbers
    const hoursString = hours.toString().padStart(2,'0');
    const minutesString = minutes.toString().padStart(2,'0');
    const secondsString = secondsRemaining.toString().padStart(2,'0');
    return `${hoursString}:${minutesString}:${secondsString}`;
}

// console.log(humanReadableTime(120));
// console.log(humanReadableTime(124));
// console.log(humanReadableTime(3720));
// console.log(humanReadableTime(3600));
// console.log(humanReadableTime(3724));
// console.log(humanReadableTime(369999));