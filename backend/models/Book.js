const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
  title: String,
  author: String,
  description: String,
  genre: String,
  image: String,
  ratings: [Number],
});

module.exports = mongoose.model('Book', bookSchema);