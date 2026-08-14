const express = require("express");

const app = express();

const PORT = 3000;

app.get("/", (req, res) => {
    res.send("Welcome to my Express Server!");
});

app.get("/about", (req, res) => {
    res.send("This is the About page");
});

app.get("/users", (req, res) => {
    res.json([
        { id: 1, name: "Charitha" },
        { id: 2, name: "Rahul" }
    ]);
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});