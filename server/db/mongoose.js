const mongoose = require('mongoose');

// set it up to set promises
mongoose.Promise = global.Promise;
// connect
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/TodoApp');

module.exports = {
  mongoose
};
