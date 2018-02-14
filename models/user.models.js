const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const SALT_WORK_FACTOR = 10;

const FIRST_ADMIN = 'ironhacker';
const ROLE_ADMIN = 'ADMIN';
const ROLE_GUEST = 'GUEST';

const userSchema = new mongoose.Schema({
      username: {
        type: String,
        required: [true, 'Username is required'],
        unique: true
      },
      password: {
        type: String,
        required: [true, 'User needs a password']
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
        required: false,
      },
      country: {
        type: String,
        required: false,
      },
      age: {
        type: Number,
        required: false
      } {
        timestamps: true
      });



    const User = mongoose.model('User', userSchema); module.exports = User;
