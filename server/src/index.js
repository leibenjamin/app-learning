import cors from 'cors';

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const seedDB = require('./data/seed'); // Import the seed function

// Route files
const lessons = require('./routes/lessons');
const users = require('./routes/users'); // Import the new user routes

const app = express();
const port = process.env.PORT || 3000;

app.use(cors({
  origin: [
    'https://YOUR_USERNAME.github.io',
    'https://YOUR_USERNAME.github.io/YOUR_REPO_NAME' // project page
  ],
}));
app.use(express.json());

const mongoURI = process.env.MONGO_URI || 'mongodb://localhost:27017/neurolearn';

mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('MongoDB connected');
    // Seed the database
    seedDB().then(() => {
      console.log('Database seeded');
    });
  })
  .catch(err => console.log(err));

// Mount routers
app.use('/api/v1/lessons', lessons);
app.use('/api/v1/users', users); // Mount the new user routes

app.get('/', (req, res) => {
  res.send('Hello from NeuroLearn Backend!');
});

app.listen(port, () => console.log(`Listening on ${port}`));
