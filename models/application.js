const mongoose = require('mongoose');

const appsSchema = mongoose.Schema({
  company: { type: String, required: true },
  position: { type: String, required: true },
  url: { type: String, required: true },
  email: { type: Boolean, required: true },
  website: { type: Boolean, required: true },
  linkedin: { type: Boolean, required: true },
  comment: { type: String, required: true },
  // addedAt: { type: Date, required: true },
  // userId: { type: String, required: true }
});

module.exports = mongoose.model('Application', appsSchema);