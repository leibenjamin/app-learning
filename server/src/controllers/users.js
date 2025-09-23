const User = require('../models/User');

// @desc    Submit a quiz score
// @route   POST /api/v1/users/submit-quiz
exports.submitQuiz = async (req, res) => {
  const { userId, lessonId, correct, total } = req.body;

  if (!userId || !lessonId || correct === undefined || !total) {
    return res.status(400).json({ success: false, error: 'Missing required fields' });
  }

  try {
    // Find user or create a new one. For this demo, we use a static userId.
    let user = await User.findOne({ userId });
    if (!user) {
      user = new User({ userId, quizScores: [] });
    }

    // Check if a score for this lesson already exists
    const existingScoreIndex = user.quizScores.findIndex(score => score.lessonId.toString() === lessonId);

    if (existingScoreIndex > -1) {
      // Update existing score
      user.quizScores[existingScoreIndex].correct = correct;
      user.quizScores[existingScoreIndex].total = total;
      user.quizScores[existingScoreIndex].lastAttempt = Date.now();
    } else {
      // Add new score
      user.quizScores.push({ lessonId, correct, total });
    }

    await user.save();
    res.status(200).json({ success: true, data: user });

  } catch (error) {
    console.error('Error submitting quiz score:', error);
    res.status(500).json({ success: false, error: 'Server Error' });
  }
};