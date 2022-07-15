import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
// Action creator
import { getBookList } from '../../redux/Books/BooksAsync';
// Components
import Book from '../Book/Book';

function BookList() {
  const books = useSelector((state) => state.books);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBookList());
  }, [books.length]);

  return (
    <ul>
      {books.map((book) => (
        <Book
          key={book.item_id}
          title={book.title}
          author={book.author}
          id={book.item_id}
          category={book.category}
        />
      ))}
    </ul>
  );
}

export default BookList;
