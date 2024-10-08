const mongoose = require('mongoose')

const UserSchema = mongoose.Schema({
  username: {
    type: String,
    unique: true,
    required: true,
    maxlength: 12,
    minlength: 5
  },
  email: {
    type: String,
    unique: true,
    required: true
  }, 
  password: {
    type: String, 
    required: true,
  },
  verificationCode: {
    type: String
  },
  verified: {
    type: Boolean, 
    default: false
  },
  profilePic: {
    type: String,
  },
  joinedDate: {
    type: Date, 
    default: Date.now 
  },
  role: {
    type: String,
    default: 'User'
  },
  following: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }],
  followers: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }],
  likes: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Posts'
  }],
  saved: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Posts'
  }],
  posts: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Posts'
  }],
  notifications: [{ 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'Notification' 
  }],
  resetPasswordToken: { type: String, default: undefined},
  resetPasswordExpires: { type: Date, default: undefined }
})

module.exports = mongoose.model('User', UserSchema)