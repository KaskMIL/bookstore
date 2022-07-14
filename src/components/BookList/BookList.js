import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
// import { baseUrl } from '../../redux/Books/BooksRedux';
import { getBookList } from '../../redux/Books/BooksAsync';
// Components
import Book from '../Book/Book';

function BookList() {
  const books = useSelector((state) => state.books);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBookList());
    /*
    fetch(`${baseUrl}`, {
      method: 'GET',
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then((response) => response.json())
      .then((json) => console.log(json)); */
  }, [books.length]);

  return (
    <ul>
      {books.map((book) => (
        <Book
          key={book.item_id}
          title={book.title}
          author={book.author}
          id={book.item_id}
        />
      ))}
    </ul>
  );
}

export default BookList;
