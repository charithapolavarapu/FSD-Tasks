"use strict";
// any type
let flexibleValue = 10;
flexibleValue = "Now I am a String";
console.log(flexibleValue);
flexibleValue = true;
console.log(flexibleValue);
// unknown type
let mysteryValue = "Hello Vishnu";
if (typeof mysteryValue === "string") {
    console.log("Length of unknown string: " + mysteryValue.length);
}
// void function
function logNotification(message) {
    console.log("ALERT: " + message);
}
logNotification("Environment Setup Complete!");
