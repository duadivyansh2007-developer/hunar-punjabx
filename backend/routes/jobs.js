const express = require('express');
const router = express.Router();
const Job = require('../models/Job');
const auth = require('../middleware/auth');

// Create Job (Companies)
router.post('/', auth, async (req, res) => {
    try {
        if (req.user.role !== 'company') return res.status(403).json({ error: 'Only companies can post jobs' });
        
        const job = new Job({ ...req.body, companyId: req.user._id });
        await job.save();
        res.status(201).json(job);
    } catch (err) {
        res.status(500).json({ error: 'Server error' });
    }
});

// Get All Jobs
router.get('/', async (req, res) => {
    try {
        const jobs = await Job.find().populate('companyId', 'name');
        res.json(jobs);
    } catch (err) {
        res.status(500).json({ error: 'Server error' });
    }
});

module.exports = router;
