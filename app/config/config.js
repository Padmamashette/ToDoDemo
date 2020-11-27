//Set up mongoose connection
const mongoose = require('mongoose');
const mongoDB = 'mongodb://localhost/demoDB';

mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;

module.exports = mongoose;