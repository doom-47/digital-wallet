const express = require('express');
const cors = require('cors');
const app = express();

const userRoutes = require('./routes/user');
const transactionRoutes = require('./routes/transaction'); // if you have it

app.use(cors());  // <---- Add this to enable CORS for all origins

app.use(express.json()); // to parse JSON requests
app.use('/api/users', userRoutes);
app.use('/api/transactions', transactionRoutes); // if needed

module.exports = app;
