const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');

// Mock AI Readiness Score
router.get('/readiness', auth, (req, res) => {
    if (req.user.role !== 'student') return res.status(403).json({ error: 'Unauthorized' });
    
    const readinessScore = Math.floor(Math.random() * 40) + 60; // 60 To 100
    res.json({ readinessScore, message: 'AI calculated your readiness based on your profile.' });
});

module.exports = router;
