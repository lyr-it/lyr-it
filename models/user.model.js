const mongoose = require('mongoose');
const spotifyApi = require('../apis/spotify.api');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Username is required'],
    unique: true
  },
  email: {
    type: String,
    lowercase: true,
    required: [true, 'Email is required'],
    match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address'],
    unique: true
  },
  photos: {
    type: String,
    required: false
  },
  country: {
    type: String,
    required: false
  },
  social: {
    id: String,
    accessToken: String,
    refreshToken: String
  },
  age: {
    type: Number,
    required: false
  }
});

userSchema.methods.getCurrentSongs = function(next) {
  spotifyApi.currentPlaying(this, next);
}

const User = mongoose.model('User', userSchema); module.exports = User;
