const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/Lyr-it', {useMongoClient: true});
const User = require('../models/user.models.js');

// Reset Data

// .collection.drop();

// Iteration #1

const userData = [
  { userName: 'Pocholo', email: 'mochila@ibiza.es', photos: '', country: 'ES', age: 55 },

];

User.create(userData, (err, docs) => {
  if (err) {
    throw err;
  }

  docs.forEach((user) => {
    console.log(user.userName);
  })

  mongoose.connection.close();
});
