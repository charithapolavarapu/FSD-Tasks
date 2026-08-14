"use strict";
class Student {
    // Public property
    name;
    // Private property
    age;
    // Protected property
    course;
    // Readonly property
    rollNo;
    // Static property
    static college = "SVECW";
    constructor(name, age, course, rollNo) {
        this.name = name;
        this.age = age;
        this.course = course;
        this.rollNo = rollNo;
    }
    display() {
        console.log("Roll No:", this.rollNo);
        console.log("Name:", this.name);
        console.log("Age:", this.age);
        console.log("Course:", this.course);
        console.log("College:", Student.college);
    }
}
class GraduateStudent extends Student {
    constructor(name, age, course, rollNo) {
        super(name, age, course, rollNo);
    }
    showCourse() {
        // Protected member can be accessed in subclass
        console.log("Course:", this.course);
        // console.log(this.age); // Error (private)
    }
}
let s1 = new Student("Alice", 20, "AI & DS", 101);
console.log("Public Name:", s1.name);
s1.display();
console.log("\nStatic Property:");
console.log(Student.college);
let s2 = new GraduateStudent("Bob", 22, "Data Science", 102);
s2.showCourse();
