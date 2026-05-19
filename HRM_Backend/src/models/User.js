const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const UserSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true
  },
  password: {
    type: String,
    required: true
  },
  role: {
    type: String,
    enum: ['company', 'hr', 'employee'],
    required: true,
    lowercase: true 
  }
}, { timestamps: true });

// FIXED HOOK: Removed the 'next' parameter completely. 
// Returning out or throwing an error inside an async middleware tells Mongoose when to proceed.
UserSchema.pre('save', async function () {
  if (!this.isModified('password')) return;
  
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

UserSchema.methods.matchPassword = async function (enteredPassword) {
  try {
    return await bcrypt.compare(enteredPassword, this.password);
  } catch (error) {
    return false;
  }
};

module.exports = mongoose.model('User', UserSchema);