import React from 'react';
import PropTypes from 'prop-types';

const Book = (props) => {
  const { title, author } = props;
  return (
    <li>
      <div className="book-data">
        <h2>{title}</h2>
        <h3>{author}</h3>
      </div>
      <button type="submit">Delete</button>
    </li>
  );
};

Book.propTypes = {
  title: PropTypes.objectOf(PropTypes.string),
  author: PropTypes.objectOf(PropTypes.string),
};

Book.defaultProps = {
  title: '',
  author: '',
};

export default Book;
