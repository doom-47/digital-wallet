console.log('server.js file is running');

const mongoose = require('mongoose');
const dotenv = require('dotenv');
const app = require('./app');

dotenv.config();

(async () => {
  try {
    console.log('Trying to connect MongoDB...');
    await mongoose.connect(process.env.MONGO_URI);
    console.log('✅ Connected to MongoDB');
    app.listen(3000, () => {
      console.log('🚀 Server running at http://localhost:3000');
    });
  } catch (err) {
    console.error('❌ MongoDB connection error:', err.message);
  }
})();
