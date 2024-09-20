const express = require('express');
const app = express();
const connectDB = require('./src/infrastructure/database');

const port = 3000;

require('dotenv').config();

// Connect to MongoDB
connectDB();

// Swagger setup
require('./src/infrastructure/swagger')(app);


// Routes
const bookRoutes = require('./src/interfaces/controllers/bookController');
const memberRoutes = require('./src/interfaces/controllers/memberController');

app.use('/books', bookRoutes);
app.use('/members', memberRoutes);

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
  });
  
module.exports = app;

