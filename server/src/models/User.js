const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  // A simple identifier. In a real app, this would be a login ID.
  userId: { type: String, required: true, unique: true }, 
  quizScores: [{
    lessonId: { type: mongoose.Schema.Types.ObjectId, ref: 'Lesson' },
    correct: Number,
    total: Number,
    lastAttempt: { type: Date, default: Date.now }
  }]
});

const User = mongoose.model('User', userSchema);

module.exports = User;