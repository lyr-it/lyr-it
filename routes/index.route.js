const express = require('express');
const router = express.Router();
const spotifyController = require('../controllers/spotify.controller')

router.get('/', spotifyController.index);
router.get('/lyrics', spotifyController.lyrics)
module.exports = router;
