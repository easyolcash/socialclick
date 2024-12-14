const express = require('express');
const router = express.Router();

// Placeholder route for getting all platforms
router.get('/', (req, res) => {
    res.status(200).json({ message: 'List of platforms (placeholder)' });
});

// Placeholder route for creating a new platform
router.post('/', (req, res) => {
    const { name, description } = req.body;
    if (!name || !description) {
        return res.status(400).json({ message: 'Name and description are required' });
    }
    res.status(201).json({ message: 'Platform created (placeholder)', data: { name, description } });
});

module.exports = router;
