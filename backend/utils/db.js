const mongoose = require('mongoose');

const connectDB = async () => {
    // readyState: 0=disconnected, 1=connected, 2=connecting, 3=disconnecting
    if (mongoose.connection.readyState === 1) {
        return; // Already connected
    }

    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log('MongoDB connected successfully');
    } catch (err) {
        console.error('Database connection error:', err.message);
        throw err;
    }
};

module.exports = connectDB;
