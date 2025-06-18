import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function Home() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/books').then(res => setBooks(res.data.slice(0, 3)));
  }, []);

  return (
    <div>
      <h1>Featured Books</h1>
      {books.map(book => (
        <div key={book._id}>
          <h3><Link to={`/books/${book._id}`}>{book.title}</Link></h3>
          <p>{book.description}</p>
        </div>
      ))}
    </div>
  );
}

export default Home;
