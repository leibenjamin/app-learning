const express = require('express');
const { submitQuiz } = require('../controllers/users');

const router = express.Router();

router.route('/submit-quiz').post(submitQuiz);

module.exports = router;