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

// Connect to MongoDB
const PORT = process.env.PORT || 5000;
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('MongoDB local connected successfully');
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });
    })
    .catch(err => {
        console.error('Database connection error:', err);
    });
