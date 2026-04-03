const mongoose = require('mongoose');

const applicationSchema = new mongoose.Schema({
    studentId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    jobId: { type: mongoose.Schema.Types.ObjectId, ref: 'Job' },
    driveId: { type: mongoose.Schema.Types.ObjectId, ref: 'PlacementDrive' },
    status: { type: String, enum: ['applied', 'shortlisted', 'interview', 'selected', 'rejected'], default: 'applied' },
    aiScore: { type: Number, default: 0 },
    createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Application', applicationSchema);
