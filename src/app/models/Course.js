const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const slug = require('mongoose-slug-generator');
const mongooseDelete = require('mongoose-delete');

const Course = new Schema({
    name: { type: String, maxlength: 255, required: true, },
    description: { type: String, maxlength: 600 },
    img: { type: String, maxlength: 255 },
    slug: { type: String, slug: 'name', unique: true },
    videoId: { type: String, maxlength: 255, required: true },
    deletedAt:{}
},{
  timestamps: true,
});


//Add plugins
mongoose.plugin(slug);
Course.plugin(mongooseDelete, { 
  deletedAt: true,
  overrideMethods: 'all',
 })

module.exports = mongoose.model('Course', Course)