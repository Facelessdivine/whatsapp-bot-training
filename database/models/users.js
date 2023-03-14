const mongoose = require('mongoose');

const usersSchema = new mongoose.Schema({
  from: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
    unique: true
  }
}, { timestamps: true }, { collection: 'users' });

const users = mongoose.model('users', usersSchema);

module.exports = { users };
