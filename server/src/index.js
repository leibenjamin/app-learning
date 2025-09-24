// server/src/index.js  (CommonJS version for simplicity on Render)
require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const seedDB = require('./data/seed');          // OK if you have it
const lessons = require('./routes/lessons');    // must export an Express router
const users = require('./routes/users');        // same

const app = express();

// --- Runtime config ---
const PORT = process.env.PORT || 3000;
const HOST = '0.0.0.0'; // bind all interfaces for Render

// Change USERNAME to your actual GitHub username.
// If you also serve from a custom domain, add it here too.
const ALLOWED_ORIGINS = [
  'http://localhost:5173',          // Vite dev
  'https://leibenjamin.github.io',     // GitHub Pages (user or project page)
  'https://benlei.org',           // ← optional if you also serve there
];

// CORS: origins are scheme + host only (no paths)
app.use(cors({
  origin(origin, cb) {
    if (!origin) return cb(null, true);                 // allow curl/server-to-server
    if (ALLOWED_ORIGINS.includes(origin)) return cb(null, true);
    return cb(null, false);                             // politely deny (no 500)
  },
  methods: ['GET','POST','PUT','PATCH','DELETE','OPTIONS'],
  allowedHeaders: ['Content-Type','Authorization'],
  // credentials: true, // keep OFF unless you actually use cookies/auth headers
}));


app.use(express.json());

// --- Database ---
const mongoURI = process.env.MONGO_URI;
// On Render you MUST set MONGO_URI to a cloud MongoDB (e.g., Atlas).
if (!mongoURI) {
  console.warn('⚠️ MONGO_URI is not set. In Render → your service → Environment, add MONGO_URI.');
}

mongoose.connect(mongoURI, {})  // Mongoose v7+ sensible defaults
  .then(async () => {
    console.log('MongoDB connected');
    if (process.env.SEED_ON_BOOT === 'true') {
      try {
        await seedDB();
        console.log('Database seeded');
      } catch (e) {
        console.error('Seed error:', e);
      }
    }
  })
  .catch(err => {
    console.error('Mongo connection error:', err);
    process.exit(1);
  });

// --- Routes ---
app.use('/api/v1/lessons', lessons);
app.use('/api/v1/users', users);

app.get('/', (_req, res) => {
  res.send('Hello from NeuroLearn Backend!');
});

// --- Start ---
app.listen(PORT, HOST, () => {
  console.log(`Server listening on http://${HOST}:${PORT}`);
});
