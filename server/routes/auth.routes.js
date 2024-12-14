const express = require('express');
const router = express.Router();

// Placeholder route for login
router.post('/login', (req, res) => {
    res.status(200).json({ message: 'Login endpoint placeholder' });
});

// Placeholder route for register
router.post('/register', (req, res) => {
    res.status(200).json({ message: 'Register endpoint placeholder' });
});

module.exports = router;
