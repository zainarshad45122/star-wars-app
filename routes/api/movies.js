const express = require('express');
const router = express.Router();

// @route   GET api/movies/test
// @desc    Tests users route
// @access  Public
router.get('/test', (req, res) => res.json({ msg: 'Movies Works' }));

module.exports = router;
