const express = require('express');
const router = express.Router();
const authController = require('../controllers/auth.controller');
const secure = require('../configs/passport.config');
const passport = require('passport');

router.get('/auth/spotify', passport.authenticate('spotify', {scope: ['user-read-email', 'user-read-private', 'user-read-currently-playing'], showDialog: true}));
router.get('/callback', authController.loginWithSpotifyCallback);
router.get('/logout', authController.logout);

module.exports = router;
