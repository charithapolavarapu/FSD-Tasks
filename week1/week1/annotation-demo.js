"use strict";
let bookTitle = "Harry Potter and the Sorcerer's Stone";
let publishedYear = 1997;
let isBestseller = true;
function getBookStatus(title, year) {
    return `${title} was a famous book published in ${year}`;
}
let authors = ["J.K. Rowling", "Mary GrandPre", "Arthur Levine"];
const description = getBookStatus(bookTitle, publishedYear);
console.log(description);
console.log("Bestseller:", isBestseller);
console.log("Authors:", authors);
