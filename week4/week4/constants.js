export class Student {
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
// Exporting a function
export function greet() {
    console.log("Welcome to TypeScript Modules");
}
