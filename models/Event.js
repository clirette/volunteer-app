const mongoose = require('mongoose');
const User = require('./User');

const EventSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String
  },
  participants: [{ type: mongoose.Schema.Types.ObjectId, ref: 'users'}]
});

const Event = mongoose.model('events', EventSchema);
module.exports = Event;