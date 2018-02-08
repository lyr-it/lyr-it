const mongoose = require('mongoose');

mongoose.Promise = Promise;

mongoose.connect('mongodb://localhost/lyrit-dev', { useMongoClient: true });
// mongoose.connect(process.env.MONGODB_URI, { useMongoClient: true });
