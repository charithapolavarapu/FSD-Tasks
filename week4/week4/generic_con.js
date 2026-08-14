"use strict";
class GenericConstraintDemo {
    display(value) {
        console.log("Value:", value);
    }
    add(a, b) {
        return a + b;
    }
    showLength(data) {
        console.log("Length:", data.length);
    }
    getProperty(obj, key) {
        return obj[key];
    }
}
let obj = new GenericConstraintDemo();
obj.display(100);
obj.display("TypeScript");
let sum = obj.add(20, 30);
console.log("Sum:", sum);
obj.showLength("Hello");
let arr = [10, 20, 30, 40];
obj.showLength(arr);
let student = {
    name: "Alice",
    age: 20
};
console.log("Name:", obj.getProperty(student, "name"));
console.log("Age:", obj.getProperty(student, "age"));
