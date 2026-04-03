const express = require('express');
const router = express.Router();
const PlacementDrive = require('../models/PlacementDrive');
const auth = require('../middleware/auth');

// Create Drive (Institutes)
router.post('/', auth, async (req, res) => {
    try {
        if (req.user.role !== 'institute') return res.status(403).json({ error: 'Only institutes can create drives' });
        
        const drive = new PlacementDrive({ ...req.body, instituteId: req.user._id });
        await drive.save();
        res.status(201).json(drive);
    } catch (err) {
        res.status(500).json({ error: 'Server error' });
    }
});

// Get Drives
router.get('/', async (req, res) => {
    try {
        const drives = await PlacementDrive.find().populate('instituteId', 'name');
        res.json(drives);
    } catch (err) {
        res.status(500).json({ error: 'Server error' });
    }
});

module.exports = router;
