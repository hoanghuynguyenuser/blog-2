const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Course = new Schema({
    name: { type: String, maxlength: 255 },
    description: { type: String, maxlength: 600 },
    img: { type: String, maxlength: 255 },
    slug: { type: String },
    createdAt: { type: Date, default: Date.now },
    updateddAt: { type: Date, default: Date.now },
  });

module.exports = mongoose.model('Course', Course)