const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
      userName: {
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
      age: {
        type: Number,
        required: false
      }});

    const User = mongoose.model('User', userSchema); module.exports = User;
