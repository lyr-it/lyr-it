const express = require('express');
const router = express.Router();
const authController = require('../controllers/auth.controller');
const secure = require('../configs/passport.config');
const passport = require('passport');

// router.get('/auth/spotify', authController.login);
router.get('/Callback', authController.loginCallback);
router.get('/auth/spotify', passport.authenticate('spotify', {scope: ['user-read-email', 'user-read-private'], showDialog: true}));

module.exports = router;