require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// Basic routes (We will modularize these later)
app.get('/api/health', (req, res) => {
    res.json({ status: 'ok', message: 'HUNAR Punjab API is running' });
});

// Import specific routes
const authRoutes = require('./routes/auth');
const jobRoutes = require('./routes/jobs');
const driveRoutes = require('./routes/drives');
const appRoutes = require('./routes/applications');
const aiRoutes = require('./routes/ai');

app.use('/api/auth', authRoutes);
app.use('/api/jobs', jobRoutes);
app.use('/api/drives', driveRoutes);
app.use('/api/applications', appRoutes);
app.use('/api/ai', aiRoutes);

// Vercel handles PORT dynamically, and we only need to manually listen if running locally
const PORT = process.env.PORT || 5000;

// Connect to MongoDB asynchronously but don't block the app export for Vercel
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected successfully'))
    .catch(err => console.error('Database connection error:', err));

// On Vercel, we export the app. Locally, we start the listener.
if (process.env.NODE_ENV !== 'production') {
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT} (Local Mode)`);
    });
}

// Export for Vercel Serverless
module.exports = app;
