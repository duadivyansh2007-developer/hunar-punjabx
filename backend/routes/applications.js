const express = require('express');
const router = express.Router();
const Application = require('../models/Application');
const auth = require('../middleware/auth');

// Apply for Job/Drive (Students)
router.post('/', auth, async (req, res) => {
    try {
        if (req.user.role !== 'student') return res.status(403).json({ error: 'Only students can apply' });
        
        const existingApp = await Application.findOne({ studentId: req.user._id, jobId: req.body.jobId });
        if (existingApp) return res.status(400).json({ error: 'Already applied' });

        // Simulate AI Score here instead of a separate service for the MVP
        const aiScore = Math.floor(Math.random() * 100); 

        const app = new Application({ ...req.body, studentId: req.user._id, aiScore });
        await app.save();
        res.status(201).json(app);
    } catch (err) {
        res.status(500).json({ error: 'Server error' });
    }
});

// Update Application Status (Institutes/Companies)
router.put('/:id', auth, async (req, res) => {
    try {
        if (req.user.role === 'student') return res.status(403).json({ error: 'Unauthorized' });
        
        const app = await Application.findByIdAndUpdate(req.params.id, { status: req.body.status }, { new: true });
        res.json(app);
    } catch (err) {
        res.status(500).json({ error: 'Server error' });
    }
});

// Get Applications
router.get('/', auth, async (req, res) => {
    try {
        let query = {};
        if (req.user.role === 'student') query.studentId = req.user._id;
        // Need specific queries for institute/company in production, but skipping for brevity
        const apps = await Application.find(query).populate('studentId', 'name').populate('jobId');
        res.json(apps);
    } catch (err) {
        res.status(500).json({ error: 'Server error' });
    }
});

module.exports = router;
