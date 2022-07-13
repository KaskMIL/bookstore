import React from 'react';

import { useSelector } from 'react-redux';
// Components
import Book from '../Book/Book';

function BookList() {
  const books = useSelector((state) => state.books);
  return (
    <ul>
      {books.map((book) => (
        <Book key={book.id} title={book.title} author={book.author} id={book.id} />
      ))}
    </ul>
  );
}

export default BookList;
