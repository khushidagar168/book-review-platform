import { useState } from 'react';
import axios from 'axios';

function ReviewForm({ bookId }) {
  const [comment, setComment] = useState('');
  const [rating, setRating] = useState(5);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post('http://localhost:5000/reviews', { bookId, comment, rating });
    setComment('');
    setRating(5);
  };

  return (
    <form onSubmit={handleSubmit}>
      <textarea value={comment} onChange={(e) => setComment(e.target.value)} required />
      <input type="number" value={rating} min="1" max="5" onChange={(e) => setRating(e.target.value)} />
      <button type="submit">Submit Review</button>
    </form>
  );
}

export default ReviewForm;