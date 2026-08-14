"use strict";
function greet(name) {
    return `Hello ${name}`;
}
function getLocation(city = "Hyderabad") {
    return `Location: ${city}`;
}
function sendAlert(phoneNumber, message) {
    console.log(`Sending SMS to ${phoneNumber}...`);
    if (message) {
        console.log(`Content: ${message}`);
    }
}
function calculateTotalScores(...scores) {
    return scores.reduce((total, current) => total + current, 0);
}
console.log(greet("Prabhas"));
console.log(getLocation());
console.log(getLocation("Vijayawada"));
sendAlert(9876543210);
sendAlert(9876543210, "Movie starts now!");
const total = calculateTotalScores(10, 20, 30, 40);
console.log(`Total Score: ${total}`);
