const mongoose = require('mongoose');

mongoose.Promise = Promise;

mongoose.connect('mongodb://localhost/Lyr-it');
// mongoose.connect(process.env.MONGODB_URI, { useMongoClient: true });
