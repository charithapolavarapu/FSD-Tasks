"use strict";
class GenericDemo {
    display(value) {
        console.log("Value:", value);
    }
    show(a, b) {
        console.log("First Value:", a);
        console.log("Second Value:", b);
    }
    getData(data) {
        return data;
    }
    printArray(items) {
        console.log("Array Elements:");
        for (let item of items) {
            console.log(item);
        }
    }
}
let obj = new GenericDemo();
obj.display(100);
obj.display("Hello TypeScript");
obj.display(true);
obj.show(10, 20);
obj.show("Hello", "World");
let numberResult = obj.getData(500);
let stringResult = obj.getData("Generics Example");
console.log("Returned Number:", numberResult);
console.log("Returned String:", stringResult);
let numbers = [1, 2, 3, 4];
let names = ["Alice", "Bob", "Charlie"];
obj.printArray(numbers);
obj.printArray(names);
