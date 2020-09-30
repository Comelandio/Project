const mongoose = require('../database');

mongoose.connect('mongoose://Localhost/noderest', { useMongoClient: true });
mongoose.Promise = global.Promise;

module.exports = mongoose;