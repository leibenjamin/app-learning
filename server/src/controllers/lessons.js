const Lesson = require('../models/Lesson');

// @desc    Get all lessons
// @route   GET /api/v1/lessons
// @access  Public
exports.getLessons = async (req, res, next) => {
  try {
    const lessons = await Lesson.find().sort({ module: 1, order: 1 });
    res.status(200).json({ success: true, count: lessons.length, data: lessons });
  } catch (err) {
    res.status(500).json({ success: false, error: 'Server Error' });
  }
};
