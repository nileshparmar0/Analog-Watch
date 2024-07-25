// Select the clock hands from the DOM
let minHand = document.querySelector('.min-hand');
let hourHand = document.querySelector('.hour-hand');
let secHand = document.querySelector('.second-hand');

function clock() {
    // Get the current time
    let time = new Date();
    let hrs = time.getHours();
    let mins = time.getMinutes();
    let sec = time.getSeconds();

    // Convert hours to 12-hour format
    let hrs12 = hrs % 12;
    hrs12 = hrs12 ? hrs12 : 12; // If hrs12 is 0, set it to 12
    
    // Calculate the degree for the hour hand
    let hourDeg = (((hrs12 + mins / 60) * 30) + 90); // Each hour is 30 degrees, add minute adjustment

    // Calculate the degree for the minute hand
    let minDeg = ((mins * 6) + 90); // Each minute is 6 degrees

    // Calculate the degree for the second hand
    let secDeg = ((sec * 6) + 90); // Each second is 6 degrees

    // Apply the rotation to the hour hand
    hourHand.style.transform = `rotate(${hourDeg}deg)`;
    
    // Apply the rotation to the minute hand
    minHand.style.transform = `rotate(${minDeg}deg)`;
    
    // Apply the rotation to the second hand
    secHand.style.transform = `rotate(${secDeg}deg)`;
}

// Update the clock every second
setInterval(clock, 1000);

// Initialize the clock
clock();
