const mongoose = require('mongoose');

// Defines a single version of a question
const questionVariationSchema = new mongoose.Schema({
  questionText: { type: String, required: true },
  options: [{ type: String, required: true }],
  correctAnswerIndex: { type: Number, required: true },
});

// Defines a pool of question variations for a single fact
const questionPoolSchema = new mongoose.Schema({
  factId: { type: String, required: true },
  questions: [questionVariationSchema]
});

// Defines the main lesson structure
const lessonSchema = new mongoose.Schema({
  module: { type: Number, required: true },
  order: { type: Number, required: true },
  title: { type: String, required: true },
  content: { type: String, required: true },
  visuals: [
    {
      type: { type: String, enum: ['image', 'video'] },
      url: String,
      caption: String,
    }
  ],
  // This is the corrected part: It now correctly uses the questionPoolSchema
  quiz: [questionPoolSchema]
});

module.exports = mongoose.model('Lesson', lessonSchema);
