const mongoose = require('mongoose');

const SkillSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  }
});

const Skill = mongoose.model('skills', SkillSchema);
module.exports = Skill;