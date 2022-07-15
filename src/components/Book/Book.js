import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';

import { deleteBook } from '../../redux/Books/BooksAsync';

import styles from './Book.module.scss';

const Book = (props) => {
  const dispatch = useDispatch();
  const {
    title, author, id, category,
  } = props;

  const handleDelete = (event, id) => {
    event.preventDefault();
    dispatch(deleteBook(id));
  };

  return (
    <li className={styles.container} id={id}>
      <div className={styles.bookData}>
        <h4>{category}</h4>
        <h2>{title}</h2>
        <h3>{author}</h3>
        <ul className={styles.bookBtns}>
          <li className={styles.first}>Comments</li>
          <li className={styles.border}>
            <button className={styles.btn} onClick={(e) => handleDelete(e, id)} type="submit">
              Delete
            </button>
          </li>
          <li className={styles.last}>Edit</li>
        </ul>
      </div>
      <div>
        <div className="progress" />
        <div className={styles.currentChapter}>
          <h2>Current Chapter</h2>
          <h3>No information</h3>
          <button className={styles.updateBtn} type="submit">Update progress</button>
        </div>
      </div>
    </li>
  );
};

Book.propTypes = {
  title: PropTypes.string,
  author: PropTypes.string,
  id: PropTypes.string,
  category: PropTypes.string,
};

Book.defaultProps = {
  title: '',
  author: '',
  id: '',
  category: '',
};

export default Book;
