const secondHand = document.querySelector('.second-hand');
const minHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('hour-hand');

const transition = document.querySelector('.hand');

function setDate() {
    const now = new Date();

    // For Second Hand
    const seconds = now.getSeconds();
    const secondDegrees = ((seconds / 60) * 360) + 90;
    if (secondDegrees === 90) {
        // If it's the first second of the minute, temporarily disable the transition
        secondHand.style.transition = 'none';
    } else {
        // Otherwise, re-enable the transition (in case it was previously disabled)
        secondHand.style.transition = '';
    }
    secondHand.style.transform = `rotate(${secondDegrees}deg)`;

    // For Minute Hand
    const mins = now.getMinutes();
    const minsDegree = ((mins / 60) * 360) + 90;
    if (minsDegree === 90) {
        minHand.style.transition = 'none';
    } else {
        minHand.style.transition = '';
    }
    minHand.style.transform = `rotate(${minsDegree}deg)`;

    // For Hour Hand
    const hour = now.getHours();
    const hourDegree = ((hour / 12) * 360) + 90;
    if (hourDegree === 90) {
        hourHand.style.transition = 'none';
    } else {
        hourHand.style.transition = '';
    }
    hourHand.style.transform = `rotate(${hourDegree}deg)`;
}

setInterval(setDate, 1000);

