import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';

import { deleteBook } from '../../redux/Books/BooksRedux';

const Book = (props) => {
  const dispatch = useDispatch();
  const { title, author, id } = props;

  const handleDelete = (event, id) => {
    event.preventDefault();
    dispatch(deleteBook(id));
  };

  return (
    <li id={id}>
      <div className="book-data">
        <h2>{title}</h2>
        <h3>{author}</h3>
      </div>
      <button onClick={(e) => handleDelete(e, id)} type="submit">
        Delete
      </button>
    </li>
  );
};

Book.propTypes = {
  title: PropTypes.string,
  author: PropTypes.string,
  id: PropTypes.string,
};

Book.defaultProps = {
  title: '',
  author: '',
  id: '',
};

export default Book;
