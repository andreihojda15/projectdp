const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
  groups: { type: Array, default: [] },
  personal_notes: { type: Array, default: [] },
  categories: { type: Array, default: [] },
  friends_list: { type: Array, default: [] },
});

module.exports = mongoose.model('Users', UserSchema);
