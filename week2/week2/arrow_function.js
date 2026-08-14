"use strict";
let studentName = "Suzanne";
let marks = [85, 90, 78, 92];
const greetStudent = (name) => {
    return `Welcome ${name} to TypeScript Programming`;
};
const calculateAverage = (scores) => {
    let total = scores.reduce((sum, mark) => sum + mark, 0);
    return total / scores.length;
};
const checkResult = (average) => {
    if (average >= 40) {
        return "Student Passed";
    }
    else {
        return "Student Failed";
    }
};
const displayInfo = (name, result) => {
    console.log(`Student Name: ${name}`);
    console.log(`Result: ${result}`);
};
console.log(greetStudent(studentName));
const averageMarks = calculateAverage(marks);
console.log(`Average Marks: ${averageMarks}`);
const resultStatus = checkResult(averageMarks);
displayInfo(studentName, resultStatus);
