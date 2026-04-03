const mongoose = require('mongoose');

const driveSchema = new mongoose.Schema({
    instituteId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    title: { type: String, required: true },
    description: { type: String },
    eligibilityCriteria: {
        minCgpa: { type: Number, default: 0 },
        branches: [{ type: String }],
        skillsRequired: [{ type: String }]
    },
    status: { type: String, enum: ['upcoming', 'active', 'completed'], default: 'upcoming' },
    createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('PlacementDrive', driveSchema);
