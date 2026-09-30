const express = require('express');
const app = express();
const port = 3000;
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));
app.get('/', (req, res) => {
    res.render('index', {
        title: 'User Registration',
        error: null,
        user: null,
        message: null
    });
});
app.post('/register', (req, res) => {
    let { username, age } = req.body;
    username = username ? username.trim() : '';
    let errorMessage = null;
    let successMessage = null;
    if (!username || username.length < 3) {
        errorMessage = 'Username must be at least 3 characters long.';
    }
    else if (!age || isNaN(age)) {
        errorMessage = 'Please enter a valid age.';
    }
    else if (Number(age) < 18) {
        errorMessage = 'You must be at least 18 years old.';
    }
    else if (Number(age) > 100) {
        errorMessage = 'Please enter a valid age below 100.';
    }
    if (errorMessage) {
        res.render('index', {
            title: 'Registration Failed',
            error: errorMessage,
            user: null,
            message: null
        });
    } 
    else {
        successMessage = `Welcome, ${username}! Your registration was successful.`;

        res.render('index', {
            title: 'Registration Successful',
            error: null,
            user: username,
            message: successMessage
        });
    }
});
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});