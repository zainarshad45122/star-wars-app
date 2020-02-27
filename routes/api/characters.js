const express = require('express');
const router = express.Router();

// @route   GET api/characters/test
// @desc    Tests users route
// @access  Public
router.get('/test', (req, res) => res.json({ msg: 'Character Works' }));

module.exports = router;
