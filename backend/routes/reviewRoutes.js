const express = require('express');
const Review = require('../models/Review');
const router = express.Router();

router.get('/:bookId', async (req, res) => {
  const reviews = await Review.find({ bookId: req.params.bookId });
  res.json(reviews);
});

router.post('/', async (req, res) => {
  const newReview = new Review(req.body);
  await newReview.save();
  res.status(201).json(newReview);
});

module.exports = router;