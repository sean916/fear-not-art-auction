const path = require('path');
require('dotenv').config({ path: require('find-config')('.env') })
const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });

        console.log('MongoDB connection SUCCESS')

    } catch (error) {
        console.error('MongoDB connection FAIL',error);
        process.exit(1);
    }
};

module.exports = connectDB;