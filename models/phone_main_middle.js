const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId;
const bcrypt = require('bcryptjs');
const config = require ('../config/database');
const timestamps = require('mongoose-timestamp');

//Phone Main Middle Schema
const PhoneMainMiddleSchema = mongoose.Schema({
  link: {
    type: String,
    default: '#'
  },
  image: {
    type: String,
    required: true
  },
  alt: {
    type: String,
    required: true
  },
  sort: {
    type: Number,
    default: 0
  }
});

PhoneMainMiddleSchema.plugin(timestamps,  {
  createdAt: 'created_at',
  updatedAt: 'updated_at'
});

const PhoneMainMiddle = module.exports = mongoose.model('phone_main_middle', PhoneMainMiddleSchema);
