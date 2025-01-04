// models/User.js
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  googleId: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  avatar: { type: String }, // To store user's profile picture
});

const User = mongoose.model('User', userSchema);

module.exports = User;
