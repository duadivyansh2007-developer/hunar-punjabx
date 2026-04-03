const mongoose = require('mongoose');

const jobSchema = new mongoose.Schema({
    companyId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    title: { type: String, required: true },
    description: { type: String },
    skillsRequired: [{ type: String }],
    location: { type: String },
    type: { type: String, enum: ['internship', 'full-time'], default: 'full-time' },
    createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Job', jobSchema);
