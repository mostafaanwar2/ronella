const mongoose = require('mongoose');

const foodSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: String,
  price: Number,
  imageUrl: String,
}, { timestamps: true });

module.exports = mongoose.model('Food', foodSchema);
