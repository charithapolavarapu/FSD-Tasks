/**
 * IMPORTING EXPRESS
 * We use the 'express' module to handle our web server logic.
 */
const express = require('express');
const app = express();
const PORT = 3000;

/**
 * 1. BASIC JSON RESPONSE
 * When the user visits the root, we send a simple JSON object.
 * .json() automatically sets the "Content-Type" to "application/json".
 */
app.get('/', (req, res) => {
    res.json({
        message: "Welcome to our API!",
        status: "Active",
        timestamp: new Date()
    });
});

/**
 * 2. SENDING AN ARRAY OF OBJECTS
 * This mimics a real-world database response (e.g., a list of students).
 */
app.get('/students', (req, res) => {
    const studentList = [
        { id: 101, name: "Alice", course: "MERN Stack" },
        { id: 102, name: "Bob", course: "Data Science" },
        { id: 103, name: "Charlie", course: "UI/UX" }
    ];

    res.json(studentList);
});

/**
 * 3. DYNAMIC JSON RESPONSE
 * We can also return data based on a specific item.
 * Example: http://localhost:3000/product/77
 */
app.get('/product/:id', (req, res) => {
    const productId = req.params.id;

    res.json({
        requestedId: productId,
        category: "Electronics",
        inStock: true,
        tags: ["gadget", "new-arrival"]
    });
});

app.listen(PORT, () => {
    console.log(`JSON Server is running at http://localhost:${PORT}`);
});
