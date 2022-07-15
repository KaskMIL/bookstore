import React, { useState } from 'react';
import { v4 } from 'uuid';

import { useDispatch } from 'react-redux';
import { addBook } from '../../redux/Books/BooksAsync';

import styles from './AddForm.module.scss';

function AddForm() {
  const [inputText, setInputText] = useState({
    title: '',
    author: '',
  });
  const [categoryInput, setCategory] = useState({ category: '' });
  const [formComplete, setFormComplete] = useState({ complete: false });

  const dispatch = useDispatch();

  const handleChange = (e) => {
    setInputText({
      ...inputText,
      [e.target.name]: e.target.value,
    });
  };

  const handleCategory = (e) => {
    setCategory({ category: e.target.value });
  };

  const newBook = (e) => {
    e.preventDefault();
    if (inputText.title && inputText.author) {
      const newBook = {
        title: inputText.title,
        author: inputText.author,
        id: v4(),
        category: categoryInput.category,
      };
      dispatch(addBook(newBook));
    } else {
      setFormComplete({ ...formComplete, complete: !formComplete.complete });
    }
    setInputText({
      title: '',
      author: '',
    });
  };

  return (
    <section className={styles.formSection}>
      <div className={styles.separatorLine} />
      <h2>ADD NEW BOOK</h2>
      <form className={styles.form}>
        <input
          onChange={(e) => handleChange(e)}
          type="text"
          name="title"
          value={inputText.title}
          placeholder="Book Title"
          className={styles.input}
        />
        <input
          onChange={(e) => handleChange(e)}
          type="text"
          name="author"
          value={inputText.author}
          placeholder="Book Author"
          className={styles.input}
        />
        <select
          onChange={(e) => handleCategory(e)}
          value={categoryInput.category}
          className={styles.input}
        >
          <option value="">Category</option>
          <option value="Action">Action</option>
          <option value="Fiction">Fiction</option>
          <option value="Science-Fiction">Science-Fiction</option>
          <option value="Romance">Romance</option>
        </select>
        <button
          className={styles.addBtn}
          onClick={(e) => newBook(e)}
          type="submit"
        >
          ADD BOOK
        </button>
      </form>
    </section>
  );
}

export default AddForm;
