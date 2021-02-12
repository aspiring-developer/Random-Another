const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema( {
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  avatar: {
    type: String
  },
  date: {
    type: Date,
    default: Date.now
  }
});

// module.exports = user = mongoose.model('user', UserSchema);
// Note: was like above, but making like below for better understanding
let user = mongoose.model('User', UserSchema);
module.exports = user;