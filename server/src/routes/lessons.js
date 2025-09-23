const express = require('express');
const { getLessons } = require('../controllers/lessons');

const router = express.Router();

router.route('/').get(getLessons);

module.exports = router;
