const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
  bookId: mongoose.Schema.Types.ObjectId,
  userId: mongoose.Schema.Types.ObjectId,
  comment: String,
  rating: Number,
});

module.exports = mongoose.model('Review', reviewSchema);