// server/routes/courseRoutes.js
const express = require('express');
const Course = require('../models/Сorses');

const router = express.Router();

router.get('/courses', async (req, res) => {
    try {
        const courses = await Course.findAll();
        res.json(courses);
    } catch (error) {
        console.error('Error fetching courses:', error);
        res.status(500).json({ message: 'Server error' });
    }
});

module.exports = router;
