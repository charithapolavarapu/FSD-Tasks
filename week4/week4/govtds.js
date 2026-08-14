"use strict";
var StudentDetails;
(function (StudentDetails) {
    class Student {
        name;
        age;
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }
        display() {
            console.log("Name:", this.name);
            console.log("Age:", this.age);
        }
    }
    StudentDetails.Student = Student;
    function college() {
        console.log("College: SVECW");
    }
    StudentDetails.college = college;
})(StudentDetails || (StudentDetails = {}));
let s1 = new StudentDetails.Student("Alice", 20);
s1.display();
StudentDetails.college();
