import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import ReviewForm from '../components/ReviewForm';

function BookDetails() {
  const { id } = useParams();
  const [book, setBook] = useState(null);
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:5000/books/${id}`).then(res => setBook(res.data));
    axios.get(`http://localhost:5000/reviews/${id}`).then(res => setReviews(res.data));
  }, [id]);

  if (!book) return <p>Loading...</p>;

  return (
    <div>
      <h1>{book.title}</h1>
      <p>{book.description}</p>

      <h3>Reviews</h3>
      {reviews.map((rev, i) => (
        <div key={i}>
          <p>{rev.comment}</p>
          <small>Rating: {rev.rating}</small>
        </div>
      ))}

      <ReviewForm bookId={id} />
    </div>
  );
}

export default BookDetails;