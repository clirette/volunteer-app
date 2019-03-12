const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  age: {
    type: Number,
    required: true
  },
  skills: [{
    type: String
  }],
  specialty: { 
    type: String
  }
});

const User = mongoose.model('users', UserSchema);
module.exports = User;