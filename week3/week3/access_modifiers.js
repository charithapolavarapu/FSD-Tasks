"use strict";
class Person {
    name;
    age;
    city;
    constructor(name, age, city) {
        this.name = name;
        this.age = age;
        this.city = city;
    }
    display() {
        console.log(this.name);
        console.log(this.age);
        console.log(this.city);
    }
}
let p = new Person("Alice", 20, "Hyderabad");
console.log(p.name); // ✅ Public
// console.log(p.age); // ❌ Private
// console.log(p.city);// ❌ Protected
p.display();
