const mongoose = require('mongoose');

mongoose.connect('mongoose://Localhost/noderest', { useMongoClient: true });
mongoose.Promise = global.Promise;

module.exports = mongoose;