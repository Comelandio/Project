const mongoose = require('mongoose');

//mongoose.connect('mongoose://Localhost/noderest', { useMongoClient: true });
mongoose.connect('mongodb://localhost:27017/noderest', 
    { useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true});
mongoose.Promise = global.Promise;

module.exports = mongoose;