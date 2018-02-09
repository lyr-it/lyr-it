const mongoose = require('mongoose');

mongoose.Promise = Promise;

mongoose.connect('mongodb://localhost/lyrit-dev');
// mongoose.connect(process.env.MONGODB_URI, { useMongoClient: true });
