const express = require('express');
const router = express.Router();

// Placeholder route for getting all schedules
router.get('/', (req, res) => {
    res.status(200).json({ message: 'List of schedules (placeholder)' });
});

// Placeholder route for creating a new schedule
router.post('/', (req, res) => {
    const { time, post } = req.body;
    if (!time || !post) {
        return res.status(400).json({ message: 'Time and post data are required' });
    }
    res.status(201).json({ message: 'Schedule created (placeholder)', data: { time, post } });
});

module.exports = router;
